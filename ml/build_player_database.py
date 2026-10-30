#!/usr/bin/env python3
"""Build source-backed player stats from Cricsheet JSON; research only."""
from __future__ import annotations
import argparse, json, zipfile
from collections import defaultdict
from pathlib import Path

SUPPORTED = {"T20", "IT20", "ODI"}
NON_BOWLER_WICKETS = {"run out", "retired hurt", "retired out", "obstructing the field", "timed out"}
NOT_DISMISSED = {"retired hurt", "obstructing the field"}

def n(v):
    try: return int(v or 0)
    except (TypeError, ValueError): return 0

def match_player_rows(name, raw):
    info = raw.get("info") or {}
    fmt = str(info.get("match_type") or "").upper()
    teams, dates = info.get("teams") or [], info.get("dates") or []
    if fmt not in SUPPORTED or len(teams) != 2 or not dates: return []
    date, gender = str(dates[0]), str(info.get("gender") or "unknown").lower()
    event = info.get("event") or {}
    competition = event.get("name") if isinstance(event, dict) else str(event or "")
    venue, stats = str(info.get("venue") or ""), {}
    def player(name, team):
        name = str(name or "").strip()
        if not name: return None
        key = (team or "", name)
        if key not in stats:
            stats[key] = {"player":name,"team":team or "","matches":0,"batting_innings":0,
              "runs":0,"balls_faced":0,"outs":0,"fours":0,"sixes":0,
              "bowling_innings":0,"balls_bowled":0,"runs_conceded":0,"wickets":0,
              "_bat_innings":set(),"_bowl_innings":set()}
        return stats[key]
    for innings in raw.get("innings") or []:
        bat_team = str(innings.get("team") or "")
        bowl_team = next((t for t in teams if t != bat_team), "")
        for over in innings.get("overs") or []:
            for d in over.get("deliveries") or []:
                batter, non, bowler = d.get("batter"), d.get("non_striker"), d.get("bowler")
                runs, extras = d.get("runs") or {}, d.get("extras") or {}
                br, total = n(runs.get("batter")), n(runs.get("total"))
                wides, noballs = n(extras.get("wides")), n(extras.get("noballs"))
                byes = n(extras.get("byes")) + n(extras.get("legbyes")) + n(extras.get("penalty"))
                bat, partner, bowl = player(batter,bat_team), player(non,bat_team), player(bowler,bowl_team)
                if bat:
                    bat["runs"] += br; bat["balls_faced"] += int(wides == 0)
                    bat["fours"] += int(br == 4); bat["sixes"] += int(br == 6)
                    bat["_bat_innings"].add(id(innings))
                if partner: partner["_bat_innings"].add(id(innings))
                if bowl:
                    bowl["balls_bowled"] += int(wides == 0 and noballs == 0)
                    bowl["runs_conceded"] += max(0,total-byes)
                    bowl["_bowl_innings"].add(id(innings))
                for w in d.get("wickets") or []:
                    kind = str(w.get("kind") or "").lower().replace("_"," ")
                    out = player(w.get("player_out"),bat_team)
                    if out and kind not in NOT_DISMISSED: out["outs"] += 1
                    if bowl and kind not in NON_BOWLER_WICKETS: bowl["wickets"] += 1
                    for f in w.get("fielders") or []:
                        if isinstance(f,dict): player(f.get("name"),bowl_team)
    rows=[]
    for v in stats.values():
        v["batting_innings"]=len(v.pop("_bat_innings"))
        v["bowling_innings"]=len(v.pop("_bowl_innings"))
        if v["batting_innings"] or v["bowling_innings"]:
            v["matches"]=1
            rows.append({"match_id":Path(name).stem,"date":date,"format":fmt,"gender":gender,
                         "competition":str(competition or ""),"venue":venue,**v})
    return rows

def summarize(rows):
    groups=defaultdict(list)
    for r in rows: groups[(r["gender"],r["format"],r["team"],r["player"])].append(r)
    result=[]
    for (gender,fmt,team,name), hist in sorted(groups.items()):
        hist.sort(key=lambda x:(x["date"],x["match_id"]))
        keys=("matches","batting_innings","runs","balls_faced","outs","fours","sixes",
              "bowling_innings","balls_bowled","runs_conceded","wickets")
        total={k:sum(n(x.get(k)) for x in hist) for k in keys}
        def form(items):
            runs=sum(x["runs"] for x in items); balls=sum(x["balls_faced"] for x in items)
            outs=sum(x["outs"] for x in items); wkts=sum(x["wickets"] for x in items)
            conceded=sum(x["runs_conceded"] for x in items)
            bowled=sum(x["balls_bowled"] for x in items)
            return {"matches":len(items),"runs":runs,"balls_faced":balls,"outs":outs,
              "batting_average":round(runs/outs,2) if outs else None,
              "strike_rate":round(100*runs/balls,2) if balls else None,
              "wickets":wkts,"runs_conceded":conceded,"balls_bowled":bowled,
              "economy":round(6*conceded/bowled,2) if bowled else None}
        result.append({"gender":gender,"format":fmt,"team":team,"player":name,**total,
          "batting_average":round(total["runs"]/total["outs"],2) if total["outs"] else None,
          "strike_rate":round(100*total["runs"]/total["balls_faced"],2) if total["balls_faced"] else None,
          "bowling_average":round(total["runs_conceded"]/total["wickets"],2) if total["wickets"] else None,
          "economy":round(6*total["runs_conceded"]/total["balls_bowled"],2) if total["balls_bowled"] else None,
          "last5":form(hist[-5:]),"last10":form(hist[-10:]),"last_match_date":hist[-1]["date"]})
    return result

def main():
    ap=argparse.ArgumentParser(); ap.add_argument("--zip",required=True); ap.add_argument("--out-dir",default="ml/data")
    args=ap.parse_args(); out=Path(args.out_dir); out.mkdir(parents=True,exist_ok=True)
    rows=[]; errors=0
    with zipfile.ZipFile(args.zip) as z:
        for name in z.namelist():
            if not name.lower().endswith(".json") or name.endswith("/"): continue
            try: rows.extend(match_player_rows(name,json.loads(z.read(name))))
            except (ValueError,KeyError,TypeError,UnicodeDecodeError): errors+=1
    if not rows: raise SystemExit("No player appearances found in supported Cricsheet matches.")
    players=summarize(rows)
    payload={"version":1,"source":"Cricsheet ball-by-ball archive","generated_from":"all_json.zip",
             "match_player_rows":len(rows),"player_profiles":len(players),"players":players}
    (out/"player-performance.json").write_text(json.dumps(payload,separators=(",",":"),ensure_ascii=False),encoding="utf-8")
    genders={g:sum(1 for p in players if p["gender"]==g) for g in sorted({p["gender"] for p in players})}
    formats={f:sum(1 for p in players if p["format"]==f) for f in sorted({p["format"] for p in players})}
    summary={"source":payload["source"],"supported_formats":sorted(SUPPORTED),"match_player_rows":len(rows),
      "player_profiles":len(players),"unique_players":len({p["player"] for p in players}),
      "genders":genders,"formats":formats,"parse_errors":errors,
      "limitations":["Only players with observed batting or bowling innings are included; fielding-only appearances are not counted.",
        "Cricsheet coverage varies by competition, gender and season.",
        "No future XI, player fitness, pitch report or live availability is inferred.",
        "This is a research artifact; production predictions remain unchanged."]}
    (out/"player-dataset-summary.json").write_text(json.dumps(summary,indent=2),encoding="utf-8")
    print(json.dumps(summary,indent=2))
if __name__=="__main__": main()
