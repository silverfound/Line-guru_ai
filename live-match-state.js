(function(root){
"use strict";
function text(v){if(v===null||v===undefined)return "";if(typeof v==="object")return String(v.name||v.title||v.team||"");return String(v).trim()}
function teamKey(v){return text(v).toLowerCase().replace(/\\bwomen\\b/g,"").replace(/[^a-z0-9]+/g," ").trim()}
function score(row){if(!row)return "";let runs=row.runs??row.r??row.total?.runs??row.score?.runs,w=row.wickets??row.w??row.total?.wickets??row.score?.wickets,o=row.overs??row.o??row.total?.overs??row.score?.overs;if(runs===undefined||runs===null||runs==="")return "";return String(runs)+(w===undefined||w===null||w===""?"":"/"+w)+(o===undefined||o===null||o===""?"":" ("+o+" ov)")}
function normalize(payload,team1,team2){
 const d=payload?.match||payload?.data?.match||payload?.data||payload||{};
 const rows=Array.isArray(d.innings)?d.innings:Array.isArray(d.scorecard)?d.scorecard:[];
 const now=d.now||d.current||{};
 const phase=Number(now.innings??d.innings_number??d.current_innings_number??d.current_innings?.number??d.inningsNo??rows.length)||0;
 const rowFor=name=>rows.find(x=>teamKey(x.team||x.batting_team||x.name)===teamKey(name));
 const row1=rowFor(team1),row2=rowFor(team2);
 const s1=score(row1)||text(d.home_score??d.team1Score??d.score1??d.scores?.home??d.score?.home);
 const s2=score(row2)||text(d.away_score??d.team2Score??d.score2??d.scores?.away??d.score?.away);
 const current=rows.find(x=>Number(x.innings||x.number)===phase)||rows[phase-1]||rows[rows.length-1]||{};
 let batting=text(d.batting_team??d.battingTeam??d.current_batting_team??d.batting??now.batting_team??current.team);
 if(Array.isArray(now.batting)&&!batting)batting=text(current.team);
 let target=d.target??d.chase_target??d.runs_target??current.chase_target??"";
 if((target===""||target===null)&&phase>1){const first=rows.find(x=>Number(x.innings||x.number)===1)||rows[0];const runs=first?.runs??first?.total?.runs;if(first&&Number.isFinite(Number(runs)))target=Number(runs)+1}
 const tossObj=d.toss&&typeof d.toss==="object"?d.toss:{};
 let tossWinner=text(d.toss_winner??d.tossWinner??tossObj.winner),tossDecision=text(d.toss_decision??d.tossDecision??tossObj.decision);
 const tossText=typeof d.toss==="string"?d.toss:"";
 if(!tossWinner&&tossText){const m=tossText.match(/^(.+?)\\s+won the toss/i);if(m)tossWinner=m[1].trim()}
 if(!tossDecision&&tossText){const m=tossText.match(/(?:elected to|chose to|opted to)\\s+(bat|field|bowl)/i);if(m)tossDecision=m[1].toLowerCase()}
 if(/^batting$/i.test(tossDecision))tossDecision="bat";if(/^bowling$/i.test(tossDecision)||/^bowl$/i.test(tossDecision))tossDecision="field";
 return {team1Score:s1,team2Score:s2,battingTeam:batting,inningsNumber:phase,target:String(target??""),tossWinner,tossDecision,venue:text(d.venue),status:text(d.status_text??d.status??d.state),updatedAt:text(d.updated_at??d.updatedAt),raw:d};
}
const api={normalize};
if(typeof module!=="undefined"&&module.exports)module.exports=api;
root.LineGuruLiveState=api;
})(typeof window!=="undefined"?window:globalThis);
