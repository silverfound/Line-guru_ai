export function competitionName(match = {}) {
  const candidates = [
    match.competition?.name, match.competition?.title, match.competition,
    match.league?.name, match.league?.title, match.league,
    match.tournament?.name, match.tournament?.title, match.tournament,
    match.series?.name, match.series?.title, match.series,
    match.event?.name, match.event?.title, match.event,
    match.competition_name, match.league_name, match.tournament_name,
    match.series_name, match.seriesName, match.event_name,
    match.competitionName, match.leagueName
  ];
  for (const value of candidates) {
    const name = typeof value === "string" || typeof value === "number"
      ? String(value).trim()
      : value && typeof value === "object"
        ? String(value.name ?? value.title ?? value.short_name ?? "").trim()
        : "";
    if (name) return name;
  }
  return "";
}

function teamKey(value) {
  return String(value || "").toLowerCase().replace(/\bwomen\b/g, " women ")
    .replace(/[^a-z0-9]+/g, " ").trim().replace(/\s+/g, " ");
}

export function matchIdentity(match = {}) {
  const day = String(match.date || "").slice(0, 10);
  const a = teamKey(match.team1);
  const b = teamKey(match.team2);
  if (day && a && b) return [day, ...[a, b].sort()].join("|");
  return match.id ? "id:" + String(match.id) : "";
}

export function mergeMatch(existing = {}, incoming = {}) {
  const merged = { ...existing };
  for (const [key, value] of Object.entries(incoming)) {
    if (value === null || value === undefined || value === "") continue;
    if (key === "competition") {
      const oldHas = Boolean(String(merged.competition || "").trim());
      const newIsSportScore = /sportscore/i.test(String(incoming.source || ""));
      const oldIsSportScore = /sportscore/i.test(String(merged.source || ""));
      if (!oldHas || (newIsSportScore && !oldIsSportScore)) merged.competition = value;
      continue;
    }
    if (merged[key] === null || merged[key] === undefined || merged[key] === "") {
      merged[key] = value;
    }
  }
  if (/sportscore/i.test(String(incoming.source || "")) && merged.competition) {
    merged.competitionSource = "SportScore";
  }
  return merged;
}

export function mergeMatchLists(...lists) {
  const byIdentity = new Map();
  for (const list of lists) {
    for (const match of Array.isArray(list) ? list : []) {
      const key = matchIdentity(match);
      if (!key) continue;
      const previous = byIdentity.get(key);
      byIdentity.set(key, previous ? mergeMatch(previous, match) : { ...match });
    }
  }
  return [...byIdentity.values()];
}
