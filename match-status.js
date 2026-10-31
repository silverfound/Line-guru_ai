(function (root) {
  "use strict";
  function label(value) {
    if (value && typeof value === "object") return String(value.name || value.title || value.description || value.short_name || "");
    return String(value || "");
  }
  function group(match = {}) {
    const status = [match.status, match.statusText, match.status_text, match.result, match.note, match.match_status, match.matchStatus].map(label).join(" ").toLowerCase();
    // Terminal evidence wins if a provider leaves status="live" after the result.
    if (/won by|lost by|drawn|tied|abandoned|no result|cancelled|canceled|completed|complete|finished|ended|result\\s*:|match over/.test(status)) return "finished";
    // Detailed innings state wins if the generic status still says "upcoming".
    if (/live|in.?progress|in.?play|started|1st inn|first innings|2nd inn|second innings|stumps|day\\s*[1-5]|drinks|innings break|rain delay/.test(status)) return "live";
    if (/scheduled|upcoming|fixture|not started|pre.?match/.test(status)) return "upcoming";
    return "upcoming";
  }
  root.LineGuruMatchStatus = { group };
})(typeof window !== "undefined" ? window : globalThis);
