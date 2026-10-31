import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

test("cricket feed refresh remains manual-only", async () => {
  const workflow = await readFile(".github/workflows/cricket-data-refresh.yml", "utf8");
  assert.match(workflow, /workflow_dispatch:/);
  assert.doesNotMatch(workflow, /^\s*schedule:/m);
  assert.doesNotMatch(workflow, /^\s*cron:/m);
  assert.doesNotMatch(workflow, /^\s*push:/m);
});

test("manual feed refresh has no local cooldown but remains manual-only", async () => {
  const script = await readFile("scripts/refresh-cricket-data.mjs", "utf8");
  assert.doesNotMatch(script, /MIN_INTERVAL_MS|minimumHoursBetweenRuns|Refresh skipped by local quota guard/);
  assert.match(script, /scheduledRunsPerDay:\s*0/);
  assert.match(script, /no local cooldown/i);
});


test("OpenCricket live fallback uses the server-side secret and leads merged live data", async () => {
  const script = await readFile("scripts/refresh-cricket-data.mjs", "utf8");
  const workflow = await readFile(".github/workflows/cricket-data-refresh.yml", "utf8");
  assert.match(script, /https:\/\/opencricketapi\.com\/v1\/live/);
  assert.match(script, /Authorization.*Bearer.*OPENCRICKET_API_KEY/);
  assert.match(script, /providers\.openCricket/);
  assert.match(script, /\.\.\.\(providers\.openCricket\?\.matches \|\| \[\]\)/);
  assert.match(workflow, /OPENCRICKET_API_KEY: \$\{\{ secrets\.OPENCRICKET_API_KEY \}\}/);
});
