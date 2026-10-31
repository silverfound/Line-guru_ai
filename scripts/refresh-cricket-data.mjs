import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname } from "node:path";
import { competitionName, mergeMatchLists } from "./feed-normalization.mjs";

const OUTPUT = "data/cricket-feed.json";
const MIN_INTERVAL_MS = 5.75 * 60 * 60 * 1000; // manual refresh quota guard
const now = new Date();

async function readPrevious() {
  try { return JSON.parse(await readFile(OUTPUT, "utf8")); }
  catch { return null; }
}

function unwrap(payload) {
  if (Array.isArray(payload?.data)) return payload.data;
  if (Array.isArray(payload?.matches)) return payload.matches;
  if (Array.isArray(payload?.fixtures)) return payload.fixtures;
  if (Array.isArray(payload?.data?.matches)) return payload.data.matches;
  if (Array.isArray(payload?.data?.fixtures)) return payload.data.fixtures;
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

function cleanScore(value) {
  const text = str(value).trim();
  return !text || /^(?:-|—|N\/A|null|undefined)$/i.test(text) ? "" : text;
}

function firstScore(...values) {
  for (const value of values) { const score = cleanScore(value); if (score) return score; }
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

function dateValue(...values) {
  for (const value of values) {
    if (value === undefined || value === null || value === "") continue;
    const raw = value && typeof value === "object"
      ? first(value.utc, value.datetime, value.dateTime, value.start, value.value, value.timestamp, value.date, value.local)
      : value;
    if (raw === "") continue;
    if (typeof raw === "number" || /^\d{10,13}$/.test(String(raw))) {
      const n = Number(raw);
      const ms = String(raw).length <= 10 ? n * 1000 : n;
      const parsed = new Date(ms);
      if (Number.isFinite(parsed.getTime())) return parsed.toISOString();
    }
    const parsed = Date.parse(String(raw));
    if (Number.isFinite(parsed)) return new Date(parsed).toISOString();
  }
  return "";
}

function scoreValue(value) {
  if (value && typeof value === "object") {
    const runs = value.runs ?? value.run ?? value.r ?? value.total?.runs;
    const wickets = value.wickets ?? value.w ?? value.total?.wickets;
    const overs = value.overs ?? value.o ?? value.total?.overs;
    if (runs !== undefined && runs !== null && runs !== "") {
      return String(runs) + (wickets === undefined || wickets === null || wickets === "" ? "" : "/" + wickets)
        + (overs === undefined || overs === null || overs === "" ? "" : " (" + overs + " ov)");
    }
    return first(value.display, value.current, value.score, value.value, value.name, value.title);
  }
  return cleanScore(value);
}

function normalizeMatch(m, source) {
  const teams = Array.isArray(m?.teams) ? m.teams : [];
  const home = m?.home ?? m?.team1 ?? m?.home_team ?? m?.homeTeam ?? m?.localteam ?? teams[0];
  const away = m?.away ?? m?.team2 ?? m?.away_team ?? m?.awayTeam ?? m?.visitorteam ?? teams[1];
  const score = m?.score ?? m?.scores ?? m?.scoreboard ?? {};
  const innings = Array.isArray(m?.innings) ? m.innings
    : Array.isArray(m?.scorecard) ? m.scorecard
    : Array.isArray(m?.scorecards) ? m.scorecards : [];
  const totalFor = (index) => {
    const total = innings[index]?.total ?? innings[index]?.score ?? innings[index];
    if (!total || (total.runs === undefined && total.r === undefined)) return "";
    const runs = total.runs ?? total.r;
    const wickets = total.wickets ?? total.w;
    const overs = total.overs ?? total.o;
    return String(runs) + (wickets === undefined ? "" : "/" + wickets)
      + (overs === undefined ? "" : " (" + overs + " ov)");
  };
  const team1 = first(home?.name, home?.team?.name, home?.team, home, m?.home_team?.name, m?.homeTeam?.name, m?.localteam?.name, m?.team1Name, teams[0]?.name, teams[0]);
  const team2 = first(away?.name, away?.team?.name, away?.team, away, m?.away_team?.name, m?.awayTeam?.name, m?.visitorteam?.name, m?.team2Name, teams[1]?.name, teams[1]);
  const scoreList = Array.isArray(score) ? score : (Array.isArray(m?.scores) ? m.scores : innings);
  const startTime = dateValue(
    m?.date?.utc, m?.date?.datetime, m?.date, m?.time?.utc, m?.time,
    m?.kickoff_utc, m?.kickoff, m?.kickoffTime, m?.start_at, m?.startAt,
    m?.start_time, m?.startTime?.utc, m?.startTime, m?.startDate,
    m?.dateTimeGMT, m?.dateTime, m?.datetime_utc, m?.date_utc,
    m?.match_date, m?.fixture_date, m?.start_date, m?.scheduled_at,
    m?.scheduled, m?.timestamp, m?.start_timestamp, m?.match_start
  );
  const rawVenue = first(
    m?.venue?.name, m?.venue?.full_name, m?.venue?.ground, m?.venue,
    m?.ground?.name, m?.ground, m?.stadium?.name, m?.stadium,
    m?.location?.name, m?.venue_name, m?.venueName, m?.ground_name, m?.stadium_name
  );
  const venue = /^(?:TBC|TBD|TBA)(?:\s*,\s*(?:TBC|TBD|TBA))*$/i.test(rawVenue) ? "" : rawVenue;
  const state = first(
    m?.status?.name, m?.status?.description, m?.status?.text, m?.status,
    m?.state?.name, m?.state?.description, m?.state, m?.match_status,
    m?.matchStatus, m?.live_status, m?.match_state, m?.result, m?.stage
  );
  const status = state || (m?.matchStarted === true || m?.is_live === true ? "Live"
    : (m?.matchEnded === true || m?.is_completed === true ? "Completed" : ""));
  const statusTextRaw = first(m?.status_text, m?.statusText, m?.status?.text, m?.status?.description, m?.note, m?.info, m?.commentary);
  const statusText = /^(?:abnormal|normal|unknown|n\/a|null|undefined)$/i.test(statusTextRaw) ? "" : statusTextRaw;
  const tossObject = m?.toss && typeof m.toss === "object" ? m.toss : {};
  const tossText = typeof m?.toss === "string" ? m.toss : first(m?.toss_text, m?.toss_result);
  let tossWinner = first(
    tossObject?.team?.name, tossObject?.winner?.name, tossObject?.winner,
    tossObject?.won_by?.name, tossObject?.won_by, m?.toss_winner?.name,
    m?.toss_winner, m?.tossWinner, m?.toss_won_by
  );
  let tossDecision = first(tossObject?.decision, tossObject?.elected, m?.toss_decision, m?.tossDecision);
  if (tossText) {
    const winnerMatch = tossText.match(/^(.+?)\s+won the toss/i);
    const decisionMatch = tossText.match(/(?:elected to|chose to|opted to)\s+(bat|field|bowl)/i);
    if (!tossWinner && winnerMatch) tossWinner = winnerMatch[1].trim();
    if (!tossDecision && decisionMatch) tossDecision = decisionMatch[1].toLowerCase();
  }
  const rawScores = Array.isArray(score) ? score : [];
  return {
    id: first(m?.id, m?.match_id, m?.matchId, m?.fixture_id, m?.event_id),
    slug: first(m?.slug, m?.match_slug, m?.matchSlug, m?.url_slug, m?.event_slug),
    source,
    date: startTime,
    status,
    statusText,
    competition: competitionName(m),
    team1,
    team2,
    score1: firstScore(
      scoreValue(score?.home), scoreValue(score?.team1), scoreValue(home?.score),
      scoreValue(home?.runs), scoreValue(m?.home_score), scoreValue(m?.team1Score),
      scoreValue(m?.score1), scoreValue(m?.localteam_score), totalFor(0), scoreForTeam(team1, scoreList)
    ),
    score2: firstScore(
      scoreValue(score?.away), scoreValue(score?.team2), scoreValue(away?.score),
      scoreValue(away?.runs), scoreValue(m?.away_score), scoreValue(m?.team2Score),
      scoreValue(m?.score2), scoreValue(m?.visitorteam_score), totalFor(1), scoreForTeam(team2, scoreList)
    ),
    venue,
    tossWinner,
    tossDecision,
    battingTeam: first(m?.batting_team?.name, m?.battingTeam?.name, m?.current_batting_team?.name, m?.batting_team, m?.battingTeam, m?.batting, m?.current_batting_team),
    inningsNumber: first(m?.innings_number, m?.current_innings_number, m?.current_innings?.number, m?.currentInnings?.number, m?.inningsNo, typeof m?.innings === "number" ? m.innings : ""),
    target: first(m?.target, m?.chase_target, m?.runs_target, m?.target_score),
    format: first(m?.format?.name, m?.format, m?.matchType, m?.match_type, m?.game_type)
  };
}
function isPlaceholderTeam(value) {
  return /^(?:A|B|AB)\d+\s*\(/i.test(String(value || "").trim())
    || /^(?:TBC|TBD|TBA|Team\s*[A-Z0-9]+)$/i.test(String(value || "").trim());
}

function isHongKongSixes(match) {
  const label = [
    match?.name, match?.seriesName, match?.series?.name, match?.series?.title,
    match?.league, match?.competition?.name, match?.competition, match?.matchType, match?.match_type
  ].map(str).join(" ").toLowerCase();
  if (/hong.?kong.?sixes|super.?sixes|six.?a.?side/.test(label)) return true;

  // CricketData.org can label Hong Kong Sixes as T20. Two six-over-or-shorter innings
  // are not a T20 match; keep this unsupported format out rather than mislabel it.
  const rows = Array.isArray(match?.score) ? match.score
    : (Array.isArray(match?.scores) ? match.scores : []);
  const overs = rows.map(row => Number.parseFloat(row?.o ?? row?.overs))
    .filter(Number.isFinite);
  return /t20|twenty.?20/.test(label) && overs.length >= 2 && overs.every(value => value <= 6);
}

function inFeedDateWindow(match) {
  const timestamp = Date.parse(String(match?.date || ""));
  if (!Number.isFinite(timestamp)) return false;
  const today = new Date(now);
  today.setUTCHours(0, 0, 0, 0);
  const todayStart = today.getTime();
  const futureEnd = todayStart + 14 * 86400000;
  const status = String(match?.status || "").toLowerCase();
  if (/live|in.?progress|1st inn|2nd inn|stumps/.test(status)) {
    return timestamp >= todayStart - 86400000 && timestamp < futureEnd;
  }
  if (/won by|drawn|tied|abandoned|no result|cancelled|completed|finished|result:/.test(status)) {
    return timestamp >= todayStart - 14 * 86400000 && timestamp < futureEnd;
  }
  // Upcoming fixtures must be today through the next 13 days, never a distant
  // season calendar returned by an unbounded provider endpoint.
  return timestamp >= todayStart && timestamp < futureEnd;
}

function supportedFormat(match) {
  const text = `${match?.format || ""} ${match?.competition || ""}`.toLowerCase();
  if (/test|first.?class|multi.?day|four.?day|five.?day/.test(text)) return null;
  if (/odi|one.?day|50.?over/.test(text)) return "odi";
  if (/t20|twenty.?20|t10|ten10|100.?ball|hundred/.test(text)
    || /the hundred|women.?s hundred|abu dhabi t10|lanka t10|european cricket league|indian premier league|\bipl\b|pakistan super league|\bpsl\b|big bash|\bbbl\b|\bwbbl\b|caribbean premier league|\bcpl\b|bangladesh premier league|\bbpl\b|lanka premier league|\blpl\b|sa20|international league t20|\bilt20\b|major league cricket|\bmlc\b|women.?s premier league|\bwpl\b|women.?s caribbean premier league|\bwcpl\b|global t20|global super league|super smash|vitality blast|t20 spring challenge|nepal premier league/.test(text)) return "t20";
  return null;
}

function isPublishableMatch(match) {
  if (!match?.team1 || !match?.team2) return false;
  // Publish only supported white-ball formats; Test and unknown formats never enter the feed.
  if (!supportedFormat(match)) return false;
  if (isPlaceholderTeam(match.team1) || isPlaceholderTeam(match.team2)) return false;
  // A match without a usable date cannot be sorted or reliably classified.
  if (!/^\d{4}-\d{2}-\d{2}/.test(String(match.date || ""))) return false;
  if (!inFeedDateWindow(match)) return false;
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
    const endpointErrors = Array.isArray(rawMatches.providerErrors) ? rawMatches.providerErrors : [];
    const matches = rawMatches.filter(isPublishableMatch);
    const filteredCount = rawMatches.length - matches.length;
    const messages = [];
    if (endpointErrors.length) messages.push(endpointErrors.join("; "));
    if (filteredCount) messages.push(`Filtered ${filteredCount} invalid/undated match(es)`);
    if (!matches.length) {
      const noDataMessage = messages.join("; ")
        || (rawMatches.length ? `No valid dated matches; filtered ${filteredCount}/${rawMatches.length}` : "Provider responded but returned no matches for this window");
      return { status: endpointErrors.length || rawMatches.length ? "error" : "ok", message: noDataMessage, rawMatchCount: rawMatches.length, matchCount: 0, matches: [] };
    }
    return {
      status: endpointErrors.length ? "partial" : "ok",
      message: messages.length ? messages.join("; ") : undefined,
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
  const previousNormalizerVersion = Number(previous?.normalizerVersion || 0);
  if (!previousHasProviderFailure && !previousHasBadData && previousNormalizerVersion >= 2) {
    console.log("Refresh skipped by local quota guard; minimum interval is 5 hours 45 minutes.");
    process.exit(0);
  }
  console.log(previousNormalizerVersion < 2
    ? "Quota guard bypassed once because the feed normalizer was upgraded; refreshing with the new field mappings."
    : "Quota guard bypassed because the previous feed has provider errors or invalid match records; running one diagnostic refresh.");
}

const providers = {};
if (process.env.CRICKETDATA_API_KEY) {
  providers.cricketData = await providerResult("CricketData.org", async () => {
    const headers = { "Accept": "application/json" };
    const buildUrl = endpoint => {
      const url = new URL(`https://api.cricapi.com/v1/${endpoint}`);
      url.searchParams.set("apikey", process.env.CRICKETDATA_API_KEY);
      url.searchParams.set("offset", "0");
      return url.toString();
    };
    // currentMatches supplies live/recent scores; matches supplies the scheduled fixture list.
    // Keep the calls independent so a temporary failure in one does not discard the other.
    const [currentResult, fixturesResult] = await Promise.all([
      requestJson(buildUrl("currentMatches"), headers)
        .then(payload => ({ kind: "currentMatches", payload }))
        .catch(error => ({ kind: "currentMatches", error })),
      requestJson(buildUrl("matches"), headers)
        .then(payload => ({ kind: "matches", payload }))
        .catch(error => ({ kind: "matches", error }))
    ]);
    const errors = [currentResult, fixturesResult]
      .filter(result => result.error)
      .map(result => `${result.kind} endpoint: ${String(result.error?.message || "request failed").slice(0, 120)}`);
    const current = currentResult.payload
      ? unwrap(currentResult.payload).filter(m => !isHongKongSixes(m)).map(m => normalizeMatch(m, "CricketData.org"))
      : [];
    const fixtureStart = new Date(now);
    fixtureStart.setUTCHours(0, 0, 0, 0);
    const fixtureEnd = new Date(fixtureStart.getTime() + 14 * 86400000);
    const fixtures = fixturesResult.payload
      ? unwrap(fixturesResult.payload).filter(m => !isHongKongSixes(m)).map(m => ({
          ...normalizeMatch(m, "CricketData.org"),
          status: first(m?.status, m?.state, m?.stage, "Scheduled")
        })).filter(match => {
          const start = Date.parse(String(match.date || ""));
          // CricketData's match list can include fixtures many weeks away.
          // Publish only the next 14 days so distant December fixtures don't crowd Upcoming.
          return Number.isFinite(start) && start >= fixtureStart.getTime() && start < fixtureEnd.getTime();
        })
      : [];
    const combined = mergeMatchLists(current, fixtures);
    combined.providerErrors = errors;
    return combined;
  });
} else {
  providers.cricketData = { status: "not_configured", matchCount: 0, matches: [] };
}


if (process.env.SPORTSCORE_API_KEY) {
  providers.sportScore = await providerResult("SportScore", async () => {
    const headers = {
      "Accept": "application/json",
      "X-Api-Key": process.env.SPORTSCORE_API_KEY
    };
    const request = async url => requestJson(url, headers);
    const day = new Date(now);
    day.setUTCHours(0, 0, 0, 0);
    const tomorrow = new Date(day.getTime() + 86400000);
    const dayString = value => value.toISOString().slice(0, 10);

    // One live/recent request plus today's and tomorrow's fixtures.
    // The API accepts a single UTC calendar date per fixtures request.
    const results = await Promise.all([
      request("https://sportscore.com/api/widget/matches/?sport=cricket&limit=50")
        .then(payload => ({ kind: "live/recent", payload }))
        .catch(error => ({ kind: "live/recent", error })),
      request(`https://sportscore.com/api/v1/fixtures/?sport=cricket&date=${dayString(day)}&limit=200`)
        .then(payload => ({ kind: "today fixtures", payload }))
        .catch(error => ({ kind: "today fixtures", error })),
      request(`https://sportscore.com/api/v1/fixtures/?sport=cricket&date=${dayString(tomorrow)}&limit=200`)
        .then(payload => ({ kind: "tomorrow fixtures", payload }))
        .catch(error => ({ kind: "tomorrow fixtures", error }))
    ]);

    const errors = results.filter(result => result.error)
      .map(result => `${result.kind}: ${String(result.error?.message || "request failed").slice(0, 120)}`);
    const liveMatches = results[0].payload
      ? unwrap(results[0].payload).map(match => ({
          ...normalizeMatch(match, "SportScore"),
          status: first(match?.status, match?.state, match?.status_text, "Live / recent")
        }))
      : [];
    const fixtureMatches = results.slice(1).flatMap(result => result.payload
      ? unwrap(result.payload).map(match => ({
          ...normalizeMatch(match, "SportScore"),
          status: first(match?.status, match?.state, match?.status_text, "Scheduled")
        }))
      : []);
    const liveDetails = await Promise.all(liveMatches
      .filter(match => match.slug && /live|in.?progress|1st inn|2nd inn/i.test(match.status + " " + match.statusText))
      .slice(0, 12)
      .map(async match => {
        try {
          const url = new URL("https://sportscore.com/api/widget/match/");
          url.searchParams.set("sport", "cricket");
          url.searchParams.set("slug", match.slug);
          const payload = await request(url.toString());
          const detail = payload?.match || payload?.data?.match || payload?.data || payload;
          const enriched = normalizeMatch(detail, "SportScore");
          return {
            ...match,
            ...Object.fromEntries(Object.entries(enriched).filter(([key, value]) => value !== "" && value !== null && value !== undefined)),
            source: "SportScore",
            slug: match.slug
          };
        } catch {
          return match;
        }
      }));
    const combined = mergeMatchLists(liveDetails, liveMatches, fixtureMatches);
    combined.providerErrors = errors;
    return combined;
  });
} else {
  providers.sportScore = { status: "not_configured", matchCount: 0, matches: [] };
}

const allMatches = Object.values(providers).flatMap(p => p.matches || []);
const mergedMatches = mergeMatchLists(allMatches);

const output = {
  schemaVersion: 1,
  normalizerVersion: 2,
  generatedAt: now.toISOString(),
  refreshPolicy: {
    scheduledRunsPerDay: 0,
    minimumHoursBetweenRuns: 5.75,
    requestBudget: "Manual refresh only. Each permitted run makes at most 2 CricketData requests and 15 SportScore requests (live/recent, today fixtures, tomorrow fixtures, plus up to 12 live-match detail requests). Failed requests are not retried."
  },
  providers,
  matches: mergedMatches,
  derived: {
    teamForm: "Not computed in this first feed version; requires verified completed-match results per selected team.",
    groundAverages: "Not computed in this first feed version; requires confirmed venue and innings totals from historical scorecards.",
    pitchReport: { status: "unavailable", note: "No verified match-day pitch report was found in the configured endpoints. No pitch type is guessed." }
  }
};

await mkdir(dirname(OUTPUT), { recursive: true });
await writeFile(OUTPUT, JSON.stringify(output, null, 2) + "\n");
console.log(`Feed refreshed. Configured providers: ${Object.values(providers).filter(p => p.status !== "not_configured").length}; usable matches: ${output.matches.length}. Provider diagnostics: ${JSON.stringify(Object.fromEntries(Object.entries(providers).map(([key, value]) => [key, { status: value.status, rawMatchCount: value.rawMatchCount ?? value.matchCount, matchCount: value.matchCount, message: value.message }])))}. No API keys are written to the output.`);
