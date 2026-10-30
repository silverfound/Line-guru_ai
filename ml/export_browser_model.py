#!/usr/bin/env python3
"""Export the previously trained Team-Aware LightGBM model for browser inference."""
import argparse, base64, gzip, json
from pathlib import Path
import joblib

def main():
    ap=argparse.ArgumentParser()
    ap.add_argument("--model", required=True)
    ap.add_argument("--output", required=True)
    ap.add_argument("--history", required=True)
    args=ap.parse_args()
    obj=joblib.load(args.model)
    booster=obj["model"].booster_
    dump=booster.dump_model()
    history=json.loads(Path(args.history).read_text(encoding="utf-8"))
    payload={
      "version":"TeamAware-2026.10-v2",
      "history":history,
      "features":obj["features"],
      "categorical":obj["categorical"],
      "categories":dict(zip(obj["categorical"], booster.pandas_categorical)),
      "objective":dump["objective"],
      "trees":[t["tree_structure"] for t in dump["tree_info"]]
    }
    packed=base64.b64encode(gzip.compress(json.dumps(payload,separators=(",",":")).encode(),compresslevel=9)).decode()
    js="""/* Generated from the validated Team-Aware pre-match artifact. Do not edit manually. */
(function(){
'use strict';
const DATA='"""+packed+"""';
let modelPromise;
function load(){
 if(!modelPromise) modelPromise=(async()=>{
  if(typeof DecompressionStream==='undefined') throw new Error('This browser does not support gzip model loading.');
  const bytes=Uint8Array.from(atob(DATA),c=>c.charCodeAt(0));
  const stream=new Blob([bytes]).stream().pipeThrough(new DecompressionStream('gzip'));
  return JSON.parse(await new Response(stream).text());
 })();
 return modelPromise;
}
function sigmoid(x){return 1/(1+Math.exp(-x));}
function treeValue(node,row,categories){
 while(node.left_child){
  const f=node.split_feature, name=row.__features[f], value=row[name];
  let goLeft;
  if(node.decision_type && node.decision_type.includes('==')){
   const cats=categories[name]||[], idx=cats.indexOf(value);
   goLeft=idx>=0 ? node.threshold.split('||').map(Number).includes(idx) : Boolean(node.default_left);
  }else{
   if(value===null || value===undefined || value===""){
    goLeft=Boolean(node.default_left);
   }else{
    const n=Number(value);
    goLeft=Number.isFinite(n) ? (node.decision_type.includes('<=' ) ? n<=node.threshold : n<node.threshold) : Boolean(node.default_left);
   }
  }
  node=goLeft?node.left_child:node.right_child;
 }
 return node.leaf_value;
}
async function predict(input){
 const m=await load(), row={};
 const history=m.history||{}, fmt=(String(input.format||"").toUpperCase()==="IT20"?"T20":String(input.format||"").toUpperCase());
 const gender=String(input.gender||"unknown").toLowerCase();
 const team1Key=[gender,fmt,input.team1].join("|"), team2Key=[gender,fmt,input.team2].join("|");
 const pairKey=[gender,fmt,input.team1,input.team2].join("|");
 const venueKey=[gender,fmt,input.venue||"UNKNOWN"].join("|");
 const h1=history.teams?.[team1Key]||{}, h2=history.teams?.[team2Key]||{};
 const hh=history.h2h?.[pairKey]||{}, vh=history.venues?.[venueKey]||{};
 const choose=(provided,fallback)=>provided===undefined||provided===null||provided===""?fallback:provided;
 const map={
  format:fmt, gender,
  team1:input.team1, team2:input.team2, venue:input.venue,
  competition:input.competition,
  team1_strength_prior20:choose(input.team1Strength,h1.strength),
  team2_strength_prior20:choose(input.team2Strength,h2.strength),
  team1_form_prior10:choose(input.team1Form,h1.form),
  team2_form_prior10:choose(input.team2Form,h2.form),
  h2h_team1_win_prior10:choose(input.h2hTeam1Win,hh.team1Win),
  venue_first_innings_avg_prior30:choose(input.venueAverage,vh.average),
  team1_prior_matches:choose(input.team1PriorMatches,h1.matches),
  team2_prior_matches:choose(input.team2PriorMatches,h2.matches),
  h2h_prior_matches:choose(input.h2hPriorMatches,hh.matches),
  venue_prior_matches:choose(input.venuePriorMatches,vh.matches)
 };
 const missing=new Set();
 for(const f of m.features){
  let v=map[f];
  if(m.categorical.includes(f)){
   const levels=m.categories[f]||[];
   if(v===undefined||v===null||!levels.includes(v)){missing.add(f);v=null;}
  }else if(v===undefined||v===null||!Number.isFinite(Number(v))){v=null;missing.add(f);}
  row[f]=v;
 }
 row.__features=m.features;
 let raw=0;
 for(const t of m.trees) raw+=treeValue(t,row,m.categories);
 const p=sigmoid(raw);
 return {team1Win:p*100,team2Win:(1-p)*100,modelVersion:m.version,modelType:'Team-Aware pre-match',featureCoverage:{available:m.features.length-missing.size,total:m.features.length,missing:Array.from(missing)}};
}
window.TeamAwarePreMatch={load,predict};
})();\n"""
    Path(args.output).write_text(js,encoding="utf-8")
    print(f"Exported {len(js)} bytes from existing artifact.")
if __name__=="__main__": main()
