const test=require("node:test");
const assert=require("node:assert/strict");
const {normalize}=require("../live-match-state.js");

test("normalizes live chase score, wickets, overs, target, batting team and toss",()=>{
 const data={match:{status:"live",toss:"Australia won the toss and elected to field",now:{innings:2},innings:[
  {innings:1,team:"India",runs:182,wickets:6,overs:"20.0"},
  {innings:2,team:"Australia",runs:91,wickets:3,overs:"10.2",chase_target:183}
 ],batting:"Australia"}};
 const live=normalize(data,"India","Australia");
 assert.equal(live.team1Score,"182/6 (20.0 ov)");
 assert.equal(live.team2Score,"91/3 (10.2 ov)");
 assert.equal(live.battingTeam,"Australia");
 assert.equal(live.inningsNumber,2);
 assert.equal(live.target,"183");
 assert.equal(live.tossWinner,"Australia");
 assert.equal(live.tossDecision,"field");
});

test("normalizes provider scorecard when innings array is absent",()=>{
 const live=normalize({data:{match:{status_text:"2nd innings",scorecard:[
  {innings:1,team:"Pakistan",runs:150,wickets:8,overs:"20"},
  {innings:2,team:"Sri Lanka",runs:65,wickets:2,overs:"8.1"}
 ],now:{innings:2},batting_team:{name:"Sri Lanka"},toss:{winner:"Pakistan",decision:"bat"}}}},"Pakistan","Sri Lanka");
 assert.equal(live.team1Score,"150/8 (20 ov)");
 assert.equal(live.team2Score,"65/2 (8.1 ov)");
 assert.equal(live.battingTeam,"Sri Lanka");
 assert.equal(live.target,"151");
 assert.equal(live.tossWinner,"Pakistan");
 assert.equal(live.tossDecision,"bat");
});

test("does not invent missing score or toss fields",()=>{
 const live=normalize({match:{status:"live",teams:[]}},"A","B");
 assert.equal(live.team1Score,"");
 assert.equal(live.team2Score,"");
 assert.equal(live.tossWinner,"");
 assert.equal(live.tossDecision,"");
});

test("supports numeric innings, current_innings object and batting side without a scorecard array",()=>{
 const live=normalize({data:{status_text:"2nd innings",innings:2,current_innings:{number:2,team:{name:"Melbourne Stars"},runs:185,wickets:2,overs:"16.4"},batting_team:{name:"Melbourne Stars"},home_score:"42/1",away_score:"185/2",target:190,toss:"Adelaide Strikers Women won the toss and elected to bat",venue:"Adelaide Oval"}},"Adelaide Strikers Women","Melbourne Stars Women");
 assert.equal(live.inningsNumber,2);
 assert.equal(live.battingTeam,"Melbourne Stars Women");
 assert.equal(live.currentOvers,"16.4");
 assert.equal(live.target,"190");
 assert.equal(live.tossWinner,"Adelaide Strikers Women");
 assert.equal(live.tossDecision,"bat");
 assert.equal(live.venue,"Adelaide Oval");
});
test("matches batting team names with or without Women suffix",()=>{
 const live=normalize({match:{innings:[{innings:1,team:"Adelaide Strikers",runs:170,wickets:5,overs:"20.0"},{innings:2,team:"Melbourne Stars",runs:90,wickets:2,overs:"10.1"}],current_innings:2,batting:"Melbourne Stars"}},"Adelaide Strikers Women","Melbourne Stars Women");
 assert.equal(live.battingTeam,"Melbourne Stars Women");
 assert.equal(live.team2Score,"90/2 (10.1 ov)");
});

test("matches live provider fixtures when Women suffix is missing and home/away order changes",()=>{
 const {sameTeams}=require("../live-match-state.js");
 assert.equal(sameTeams("Melbourne Stars Women","Adelaide Strikers Women","Adelaide Strikers","Melbourne Stars"),true);
 assert.equal(sameTeams("India","Australia","India A","Australia"),false);
});
