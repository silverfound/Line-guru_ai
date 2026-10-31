"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
require("../match-status.js");
const group = global.LineGuruMatchStatus.group;

test("live innings in descriptive status overrides stale upcoming status", () => {
  assert.equal(group({ status: "upcoming", statusText: "1st Innings" }), "live");
  assert.equal(group({ status: "upcoming", status_text: "In Progress" }), "live");
});
test("completed result overrides stale live status", () => {
  assert.equal(group({ status: "live", statusText: "Adelaide Strikers Women won by 6 wickets" }), "finished");
  assert.equal(group({ status: "in progress", result: "Match finished" }), "finished");
  assert.equal(group({ status: "finished" }), "finished");
});
test("scheduled fixtures remain upcoming", () => {
  assert.equal(group({ status: "upcoming" }), "upcoming");
  assert.equal(group({ status: "Scheduled" }), "upcoming");
});
test("object-shaped provider status values are supported", () => {
  assert.equal(group({ status: { name: "live" }, statusText: { description: "2nd innings" } }), "live");
});
