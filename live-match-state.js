(function(root){
"use strict";
function text(v){
 if(v===null||v===undefined)return "";
 if(typeof v==="object")return String(v.name||v.title||v.team||v.label||"").trim();
 return String(v).trim();
}
function teamKey(v){return text(v).toLowerCase().replace(/\bwomen\b/g,"").replace(/\bwomens\b/g,"").replace(/[^a-z0-9]+/g," ").trim()}
function firstValue(...values){return values.find(v=>v!==undefined&&v!==null&&String(v).trim()!=="")}
function rowScore(row){
 if(!row)return "";
 const runs=firstValue(row.runs,row.r,row.total?.runs,row.score?.runs,row.score);
 const wickets=firstValue(row.wickets,row.w,row.total?.wickets,row.score?.wickets);
 const overs=firstValue(row.overs,row.o,row.total?.overs,row.score?.overs,row.overs_bowled);
 if(runs===undefined)return "";
 if(typeof runs==="string"&&/[\/(]/.test(runs))return runs.trim();
 return String(runs)+(wickets===undefined?"":"/"+wickets)+(overs===undefined?"":" ("+overs+" ov)");
}
function normalize(payload,team1,team2){
 let d=payload||{};
 for(let i=0;i<4;i++){
  const next=d.match||d.data?.match||d.data?.data||d.data;
  if(!next||next===d)break;
  d=next;
 }
 const state=d.current_innings&&typeof d.current_innings==="object"?d.current_innings:
  d.currentInnings&&typeof d.currentInnings==="object"?d.currentInnings:
  d.now&&typeof d.now==="object"?d.now:
  d.current&&typeof d.current==="object"?d.current:
  d.live&&typeof d.live==="object"?d.live:{};
 let rows=Array.isArray(d.innings)?d.innings:
  Array.isArray(d.scorecard)?d.scorecard:
  Array.isArray(d.innings_scorecard)?d.innings_scorecard:
  Array.isArray(d.scorecards)?d.scorecards:
  Array.isArray(d.innings_data)?d.innings_data:[];
 if(!rows.length&&Array.isArray(d.teams))rows=d.teams.map(x=>({...x,team:x.team||x.name}));
 const phaseRaw=firstValue(
  typeof d.innings==="number"||typeof d.innings==="string"?d.innings:undefined,
  d.innings_number,d.current_innings_number,d.current_innings_no,d.currentInningsNumber,
  typeof d.current_innings==="number"||typeof d.current_innings==="string"?d.current_innings:undefined,
  state.innings,state.number,state.innings_number,d.inningsNo
 );
 let phase=Number(phaseRaw)||0;
 const statusText=String(d.status_text||d.statusText||d.status||"").toLowerCase();
 if(!phase&&/2nd innings|second innings|innings 2/.test(statusText))phase=2;
 if(!phase&&/1st innings|first innings|innings 1/.test(statusText))phase=1;
 if(!phase&&rows.length)phase=Number(rows.find(x=>x.current||x.is_current)?.innings||rows.find(x=>x.current||x.is_current)?.number)||0;
 const rowFor=name=>rows.find(x=>teamKey(x.team||x.batting_team||x.name||x.team_name)===teamKey(name));
 const row1=rowFor(team1),row2=rowFor(team2);
 const score1=rowScore(row1)||text(firstValue(d.home_score,d.team1Score,d.score1,d.scores?.home,d.scores?.team1,d.home?.score,d.teams?.[0]?.score));
 const score2=rowScore(row2)||text(firstValue(d.away_score,d.team2Score,d.score2,d.scores?.away,d.scores?.team2,d.away?.score,d.teams?.[1]?.score));
 let current=rows.find(x=>Number(x.innings||x.number)===phase)||rows.find(x=>x.current||x.is_current)||rows[phase-1]||{};
 const battingRaw=firstValue(d.batting_team,d.battingTeam,d.current_batting_team,d.current_batting,d.batting,state.batting_team,state.battingTeam,state.batting,state.team,state.team_name,state.batting_side,current.team,current.batting_team);
 let batting=text(battingRaw);
 if(battingRaw&&typeof battingRaw==="object")batting=text(battingRaw.name||battingRaw.team?.name||battingRaw.team||battingRaw.short_name);
 const statusLower=statusText;
 if(!batting&&/\(\s*away\s*\)/i.test(statusLower))batting=text(team2);
 if(!batting&&/\(\s*home\s*\)/i.test(statusLower))batting=text(team1);
 const battingKey=teamKey(batting);
 if(battingKey===teamKey(team1))batting=text(team1);
 else if(battingKey===teamKey(team2))batting=text(team2);
 const currentScore=rowScore(state);
 const score1Final=score1||(battingKey===teamKey(team1)?currentScore:"");
 const score2Final=score2||(battingKey===teamKey(team2)?currentScore:"");
 const explicitTarget=firstValue(d.target,d.chase_target,d.runs_target,d.target_score,state.target,state.chase_target,current.chase_target);
 let target=explicitTarget===undefined?"":String(explicitTarget);
 if(!target&&phase>1){
  const first=rows.find(x=>Number(x.innings||x.number)===1)||rows[0];
  const runs=firstValue(first?.runs,first?.r,first?.total?.runs);
  if(runs!==undefined&&Number.isFinite(Number(runs)))target=String(Number(runs)+1);
 }
 const tossObj=d.toss&&typeof d.toss==="object"?d.toss:{};
 let tossWinner=text(firstValue(d.toss_winner,d.tossWinner,tossObj.winner,tossObj.won_by));
 let tossDecision=text(firstValue(d.toss_decision,d.tossDecision,tossObj.decision,tossObj.elected));
 const tossText=typeof d.toss==="string"?d.toss:"";
 if(!tossWinner&&tossText){const m=tossText.match(/^(.+?)\s+won the toss/i);if(m)tossWinner=m[1].trim()}
 if(!tossDecision&&tossText){const m=tossText.match(/(?:elected to|chose to|opted to)\s+(bat|field|bowl)/i);if(m)tossDecision=m[1].toLowerCase()}
 if(/^batting$/i.test(tossDecision))tossDecision="bat";
 if(/^bowling$/i.test(tossDecision)||/^bowl$/i.test(tossDecision))tossDecision="field";
 const currentOvers=firstValue(current.overs,current.o,current.total?.overs,state.overs,d.overs,d.overs_bowled);
 return {
  team1Score:score1Final,team2Score:score2Final,battingTeam:batting,inningsNumber:phase,
  target,tossWinner,tossDecision,venue:text(firstValue(d.venue,d.ground,d.venue_name)),
  status:text(firstValue(d.status_text,d.status,d.state)),updatedAt:text(firstValue(d.updated_at,d.updatedAt)),
  currentOvers:currentOvers===undefined?"":String(currentOvers),raw:d
 };
}
function sameTeams(a1,a2,b1,b2){const x=teamKey(a1),y=teamKey(a2),u=teamKey(b1),v=teamKey(b2);return Boolean(x&&y&&u&&v)&&((x===u&&y===v)||(x===v&&y===u))}
const api={normalize,sameTeams};
if(typeof module!=="undefined"&&module.exports)module.exports=api;
root.LineGuruLiveState=api;
})(typeof window!=="undefined"?window:globalThis);
