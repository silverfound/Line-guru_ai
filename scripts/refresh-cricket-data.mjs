import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname } from "node:path";

const OUTPUT = "data/cricket-feed.json";
const MIN_INTERVAL_MS = 5 * 60 * 60 * 1000 + 45 * 60 * 1000; // at most 4 scheduled refreshes/day
const now = new Date();

async function readPrevious() {
  try { return JSON.parse(await readFile(OUTPUT, "utf8")); }
  catch { return null; }
}

function unwrap(payload) {
  if (Array.isArray(payload?.data)) return payload.data;
  if (Array.isArray(payload?.matches)) return payload.matches;
  if (Array.isArray(payload?.data?.matches)) return payload.data.matches;
  if (Array.isArray(payload?.response)) return payload.response;
  return [];
}

function str(value) {
  if (typeof value === "string" || typeof value === "number") return String(value);
  if (value && typeof value === "object") return String(value.name ?? value.title ?? value.short_name ?? "");
  return "";
}

function first(...values) {
  for (const value of values) {
    const text = str(value).trim();
    if (text) return text;
  }
  return "";
}

function scoreForTeam(teamName, scores) {
  if (!Array.isArray(scores)) return "";
  const relevant = scores.filter(item => {
    const inning = String(item?.inning || item?.team || "").toLowerCase();
    return !inning || !teamName || inning.includes(teamName.toLowerCase());
  });
  return relevant.map(item => {
    const runs = item?.r ?? item?.runs ?? item?.score ?? "";
    const wickets = item?.w ?? item?.wickets ?? "";
    const overs = item?.o ?? item?.overs ?? "";
    if (runs === "") return "";
    return String(runs) + (wickets === "" ? "" : "/" + wickets) + (overs === "" ? "" : " (" + overs + " ov)");
  }).filter(Boolean).join(" & ");
}

function normalizeMatch(m, source) {
  const teams = Array.isArray(m?.teams) ? m.teams : [];
  const home = m?.home ?? m?.team1 ?? m?.home_team ?? teams[0];
  const away = m?.away ?? m?.team2 ?? m?.away_team ?? teams[1];
  const score = m?.score ?? m?.scores ?? {};
  const innings = Array.isArray(m?.innings) ? m.innings : [];
  const totalFor = (index) => {
    const total = innings[index]?.total;
    if (!total || total.runs === undefined) return "";
    return String(total.runs) + (total.wickets === undefined ? "" : "/" + total.wickets)
      + (total.overs === undefined ? "" : " (" + total.overs + " ov)");
  };
  const team1 = first(home?.name, home?.team, home, m?.home_team, m?.team1Name, teams[0]?.name, teams[0]);
  const team2 = first(away?.name, away?.team, away, m?.away_team, m?.team2Name, teams[1]?.name, teams[1]);
  const scoreList = Array.isArray(score) ? score : (Array.isArray(m?.scores) ? m.scores : []);
  const startTime = first(m?.date, m?.start_time, m?.startTime, m?.dateTimeGMT, m?.match_date, m?.start_date, m?.scheduled_at, m?.dateTime);
  const state = first(m?.status, m?.state, m?.match_status, m?.matchStatus, m?.result, m?.stage);
  const status = state || (m?.matchStarted === true ? "Live" : (m?.matchEnded === true ? "Completed" : ""));
  return {
    id: first(m?.id, m?.match_id, m?.matchId),
    source,
    date: startTime,
    status,
    competition: first(m?.league, m?.competition, m?.series, m?.seriesName, m?.event_name),
    team1,
    team2,
    score1: first(score?.home, score?.team1, m?.home_score, m?.team1Score, m?.score1, totalFor(0), scoreForTeam(team1, scoreList)),
    score2: first(score?.away, score?.team2, m?.away_score, m?.team2Score, m?.score2, totalFor(1), scoreForTeam(team2, scoreList)),
    venue: first(m?.venue?.name, m?.venue, m?.ground, m?.stadium),
    tossWinner: first(m?.toss?.team, m?.toss_winner, m?.tossWinner),
    tossDecision: first(m?.toss?.decision, m?.toss_decision, m?.tossDecision),
    format: first(m?.format, m?.matchType, m?.match_type)
  };
}

function isPlaceholderTeam(value) {
  return /^(?:A|B|AB)\d+\s*\(/i.test(String(value || "").trim())
    || /^(?:TBC|TBD|TBA|Team\s*[A-Z0-9]+)$/i.test(String(value || "").trim());
}

function isPublishableMatch(match) {
  if (!match?.team1 || !match?.team2) return false;
  if (isPlaceholderTeam(match.team1) || isPlaceholderTeam(match.team2)) return false;
  // A match without a usable date cannot be sorted or reliably classified.
  if (!/^\d{4}-\d{2}-\d{2}/.test(String(match.date || ""))) return false;
  return true;
}

async function requestJson(url, headers = {}) {
  const response = await fetch(url, { headers, signal: AbortSignal.timeout(12000) });
  if (!response.ok) {
    let detail = "";
    try {
      const body = await response.clone().json();
      detail = first(body?.error?.message, body?.error?.code, body?.message, body?.detail);
    } catch {}
    // Never include the URL: CricketData.org puts its API key in the query string.
    throw new Error(`HTTP ${response.status}${detail ? ": " + detail : ""}`);
  }
  const payload = await response.json();
  if (payload?.status === "failure" || (payload?.error && payload.error !== null)) {
    throw new Error(first(payload?.error?.message, payload?.error?.code, payload?.message, "Provider returned an API error"));
  }
  return payload;
}

async function providerResult(name, fn) {
  try {
    const rawMatches = await fn();
    const matches = rawMatches.filter(isPublishableMatch);
    const filteredCount = rawMatches.length - matches.length;
    if (!matches.length && rawMatches.length) {
      return { status: "error", message: `No valid dated matches; filtered ${filteredCount}/${rawMatches.length}`, rawMatchCount: rawMatches.length, matchCount: 0, matches: [] };
    }
    return {
      status: matches.length ? "ok" : "error",
      message: filteredCount ? `Filtered ${filteredCount} invalid/undated match(es)` : undefined,
      rawMatchCount: rawMatches.length,
      matchCount: matches.length,
      matches
    };
  } catch (error) {
    return { status: "error", message: String(error?.message || "Request failed").slice(0, 160), rawMatchCount: 0, matchCount: 0, matches: [] };
  }
}

const previous = await readPrevious();
const previousAt = Date.parse(previous?.generatedAt || "");
if (Number.isFinite(previousAt) && now.getTime() - previousAt < MIN_INTERVAL_MS) {
  const previousProviders = Object.values(previous?.providers || {});
  const previousHasProviderFailure = previousProviders.some(p => p?.status === "error" || p?.status === "partial");
  const previousHasBadData = previousProviders.some(p => (p?.matches || []).some(m => !isPublishableMatch(m)));
  if (!previousHasProviderFailure && !previousHasBadData) {
    console.log("Refresh skipped by local quota guard; minimum interval is 5h45m.");
    process.exit(0);
  }
  console.log("Quota guard bypassed because the previous feed has provider errors or invalid match records; running one diagnostic refresh.");
}

const providers = {};
const date = now.toISOString().slice(0, 10);
// The API allows a maximum 14-calendar-day fixture window (inclusive).
const toDate = new Date(now.getTime() + 13 * 86400000).toISOString().slice(0, 10);

if (process.env.BIGBALLSDATA_API_KEY) {
  providers.bigBalls = await providerResult("Big Balls Data", async () => {
    const payload = await requestJson("https://api.bigballsdata.com/v1/cricket/matches?limit=100", {
      "x-api-key": process.env.BIGBALLSDATA_API_KEY,
      "Accept": "application/json"
    });
    return unwrap(payload).map(m => normalizeMatch(m, "Big Balls Data"));
  });
} else {
  providers.bigBalls = { status: "not_configured", matchCount: 0, matches: [] };
}

if (process.env.OPENCRICKET_API_KEY) {
  providers.openCricket = await providerResult("OpenCricket", async () => {
    const headers = { "Authorization": `Bearer ${process.env.OPENCRICKET_API_KEY}`, "Accept": "application/json" };
    const [livePayload, fixturePayload] = await Promise.all([
      requestJson("https://opencricketapi.com/v1/live", headers),
      requestJson(`https://opencricketapi.com/v1/fixtures?from=${date}&to=${toDate}`, headers)
    ]);
    const live = unwrap(livePayload).map(m => ({ ...normalizeMatch(m, "OpenCricket"), status: first(m?.status, m?.state, "Live"), feedType: "live" }));
    const fixtures = unwrap(fixturePayload).map(m => ({ ...normalizeMatch(m, "OpenCricket"), status: first(m?.status, m?.state, m?.stage, "Scheduled"), feedType: "fixture" }));
    const seen = new Set();
    return [...live, ...fixtures].filter(m => {
      const key = m.id || [m.date, m.team1, m.team2].join("|");
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  });
} else {
  providers.openCricket = { status: "not_configured", matchCount: 0, matches: [] };
}

if (process.env.CRICKETDATA_API_KEY) {
  providers.cricketData = await providerResult("CricketData.org", async () => {
    const url = new URL("https://api.cricapi.com/v1/currentMatches");
    url.searchParams.set("apikey", process.env.CRICKETDATA_API_KEY);
    url.searchParams.set("offset", "0");
    const payload = await requestJson(url.toString(), { "Accept": "application/json" });
    return unwrap(payload).map(m => normalizeMatch(m, "CricketData.org"));
  });
} else {
  providers.cricketData = { status: "not_configured", matchCount: 0, matches: [] };
}

const allMatches = Object.values(providers).flatMap(p => p.matches || []);
const unique = new Map();
for (const match of allMatches) {
  const key = match.id || [match.date, match.team1, match.team2].join("|");
  if (key.replaceAll("|", "").trim()) {
    const existing = unique.get(key);
    if (!existing || (existing.score1 === "" && match.score1 !== "")) unique.set(key, match);
  }
}

const output = {
  schemaVersion: 1,
  generatedAt: now.toISOString(),
  refreshPolicy: {
    scheduledRunsPerDay: 0,
    minimumHoursBetweenRuns: 5.75,
    requestBudget: "Each manual run makes at most 1 Big Balls request, 2 OpenCricket requests and 1 CricketData request. Failed requests are not retried."
  },
  providers,
  matches: [...unique.values()],
  derived: {
    teamForm: "Not computed in this first feed version; requires verified completed-match results per selected team.",
    groundAverages: "Not computed in this first feed version; requires confirmed venue and innings totals from historical scorecards.",
    pitchReport: { status: "unavailable", note: "No verified match-day pitch report was found in the configured endpoints. No pitch type is guessed." }
  }
};

await mkdir(dirname(OUTPUT), { recursive: true });
await writeFile(OUTPUT, JSON.stringify(output, null, 2) + "\n");
console.log(`Feed refreshed. Configured providers: ${Object.values(providers).filter(p => p.status !== "not_configured").length}; usable matches: ${output.matches.length}. Provider diagnostics: ${JSON.stringify(Object.fromEntries(Object.entries(providers).map(([key, value]) => [key, { status: value.status, rawMatchCount: value.rawMatchCount ?? value.matchCount, matchCount: value.matchCount, message: value.message }])))}. No API keys are written to the output.`);
