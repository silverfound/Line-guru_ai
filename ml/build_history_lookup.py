#!/usr/bin/env python3
"""Create runtime historical lookups from completed Cricsheet matches only."""
import argparse, json
from collections import defaultdict, deque
from pathlib import Path
import pandas as pd

def fmt_key(value):
    value = str(value).upper()
    return "T20" if value in ("T20", "IT20") else value

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--input", default="ml/data/matches.csv")
    ap.add_argument("--output", default="ml/data/pre-match-history.json")
    args = ap.parse_args()
    df = pd.read_csv(args.input)
    df["date"] = pd.to_datetime(df["date"], errors="coerce")
    df = df.dropna(subset=["date"]).sort_values(["date", "match_id"])
    team_results = defaultdict(lambda: deque(maxlen=20))
    team_form = defaultdict(lambda: deque(maxlen=10))
    h2h_results = defaultdict(lambda: deque(maxlen=10))
    venue_scores = defaultdict(lambda: deque(maxlen=30))
    for row in df.to_dict("records"):
        gender = str(row.get("gender") or "unknown").lower()
        fmt = fmt_key(row.get("format"))
        t1, t2 = str(row["team1"]), str(row["team2"])
        winner = str(row["winner"])
        venue = str(row.get("venue") or "UNKNOWN")
        key1, key2 = (gender, fmt, t1), (gender, fmt, t2)
        pair = (gender, fmt, t1, t2)
        team_results[key1].append(int(winner == t1))
        team_results[key2].append(int(winner == t2))
        team_form[key1].append(int(winner == t1))
        team_form[key2].append(int(winner == t2))
        h2h_results[pair].append(int(winner == t1))
        score = row.get("first_innings_runs")
        if pd.notna(score):
            venue_scores[(gender, fmt, venue)].append(float(score))
    result = {"version": 1, "source": "Cricsheet completed matches", "teams": {}, "h2h": {}, "venues": {}}
    for key, values in team_results.items():
        gender, fmt, team = key
        form = list(team_form[key])
        result["teams"]["|".join(key)] = {
            "strength": sum(values) / len(values) if values else None,
            "form": sum(form) / len(form) if form else None,
            "matches": len(values),
        }
    for key, values in h2h_results.items():
        result["h2h"]["|".join(key)] = {
            "team1Win": sum(values) / len(values) if values else None,
            "matches": len(values),
        }
    for key, values in venue_scores.items():
        result["venues"]["|".join(key)] = {
            "average": sum(values) / len(values) if values else None,
            "matches": len(values),
        }
    output = Path(args.output)
    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_text(json.dumps(result, separators=(",", ":")), encoding="utf-8")
    print(json.dumps({"teams": len(result["teams"]), "h2h_pairs": len(result["h2h"]), "venues": len(result["venues"]), "output": str(output)}))

if __name__ == "__main__":
    main()
