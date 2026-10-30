const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");

function loadTeamLookup() {
  const directoryContext = { window: {} };
  vm.runInNewContext(
    fs.readFileSync("teams-data.js", "utf8"),
    directoryContext,
    { filename: "teams-data.js" }
  );

  const values = {
    team1Select: "feed:Adelaide Strikers Women",
    team2Select: "feed:Melbourne Stars Women"
  };
  const document = {
    getElementById(id) {
      return { value: values[id] || "" };
    },
    addEventListener() {}
  };
  const window = { LineGuruTeams: directoryContext.window.LineGuruTeams };
  let source = fs.readFileSync("script.js", "utf8");
  const closing = /\}\)\(\);\s*$/;
  assert.match(source, closing, "script.js should retain its application wrapper");
  source = source.replace(closing, "window.__lineGuruTestTeam = team;\n})();");

  vm.runInNewContext(source, { window, document }, { filename: "script.js" });
  return { lookup: window.__lineGuruTestTeam, values };
}

test("women's feed teams resolve to women's captains", () => {
  const { lookup } = loadTeamLookup();
  assert.equal(lookup("team1Select").captain, "Tahlia McGrath");
  assert.equal(lookup("team2Select").captain, "Meg Lanning");
});

test("men's feed teams continue to resolve to men's captains", () => {
  const { lookup, values } = loadTeamLookup();
  values.team1Select = "feed:Adelaide Strikers";
  values.team2Select = "feed:Melbourne Stars";
  assert.equal(lookup("team1Select").captain, "Matthew Short");
  assert.equal(lookup("team2Select").captain, "Marcus Stoinis");
});
