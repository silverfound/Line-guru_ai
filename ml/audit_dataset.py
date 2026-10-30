import json, sys
from pathlib import Path
import pandas as pd
DATA=Path("ml/data/matches_with_features.csv")
FEATURES=["format","gender","team1","team2","venue","competition","team1_strength_prior20","team2_strength_prior20","team1_form_prior10","team2_form_prior10","h2h_team1_win_prior10","venue_first_innings_avg_prior30","team1_prior_matches","team2_prior_matches","h2h_prior_matches","venue_prior_matches","toss_won_by_first_batting","toss_bat_first"]
FORBIDDEN={"winner","team1_win","first_innings_runs","second_innings_runs","match_id","date","split"}
if __name__=="__main__":
 if not DATA.exists():
  print(json.dumps({"dataset_present":False,"warning":"Prepared CSV absent; full-data audit skipped."},indent=2)); sys.exit(0)
 d=pd.read_csv(DATA)
 required=set(FEATURES+["winner","team1_win","date","split","match_id"])
 missing=sorted(required-set(d.columns))
 if missing: sys.exit("Missing columns: "+", ".join(missing))
 if d.match_id.duplicated().any(): sys.exit("Duplicate match IDs")
 dates=pd.to_datetime(d.date,errors="coerce")
 if dates.isna().any(): sys.exit("Invalid dates")
 tr=set(dates[d.split.eq("train")].dt.date); te=set(dates[d.split.eq("test")].dt.date)
 if not tr or not te or tr&te or max(tr)>=min(te): sys.exit("Chronological split/date leakage")
 if FORBIDDEN.intersection(FEATURES): sys.exit("Target/identifier leakage in feature list")
 print(json.dumps({"dataset_present":True,"checks":["unique IDs","valid dates","strict chronological split","no date overlap","no target/identifier in declared features"],"rows":len(d),"train":int(d.split.eq("train").sum()),"test":int(d.split.eq("test").sum()),"train_end":str(max(tr)),"test_start":str(min(te))},indent=2))
