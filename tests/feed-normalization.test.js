const test = require("node:test");
const assert = require("node:assert/strict");

test("SportScore competition is retained when another provider has no league", async () => {
  const { mergeMatchLists } = await import("../scripts/feed-normalization.mjs");
  const merged = mergeMatchLists(
    [{ date: "2026-10-31T08:00:00Z", team1: "Adelaide Strikers Women", team2: "Melbourne Stars Women", format: "T20", competition: "", source: "CricketData.org" }],
    [{ date: "2026-10-31T08:00:00+00:00", team1: "Melbourne Stars Women", team2: "Adelaide Strikers Women", competition: "Big Bash League Women", source: "SportScore" }]
  );
  assert.equal(merged.length, 1);
  assert.equal(merged[0].competition, "Big Bash League Women");
  assert.equal(merged[0].format, "T20");
});

test("competition extraction supports SportScore league/tournament naming shapes", async () => {
  const { competitionName } = await import("../scripts/feed-normalization.mjs");
  assert.equal(competitionName({ competition: { name: "Women's Big Bash League" } }), "Women's Big Bash League");
  assert.equal(competitionName({ league: { title: "Women's Big Bash League" } }), "Women's Big Bash League");
  assert.equal(competitionName({ tournament_name: "WBBL" }), "WBBL");
});

test("same-day fixture deduplication ignores provider team order but keeps different dates", async () => {
  const { mergeMatchLists } = await import("../scripts/feed-normalization.mjs");
  const merged = mergeMatchLists(
    [{ date: "2026-10-31T08:00:00Z", team1: "A", team2: "B", source: "A" }],
    [{ date: "2026-10-31T08:00:00+00:00", team1: "B", team2: "A", competition: "League", source: "SportScore" }],
    [{ date: "2026-11-01T08:00:00Z", team1: "A", team2: "B", source: "A" }]
  );
  assert.equal(merged.length, 2);
  assert.equal(merged[0].competition, "League");
});
