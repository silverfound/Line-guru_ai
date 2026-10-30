#!/usr/bin/env python3
"""Create leakage-safe runtime historical lookups from completed Cricsheet matches.

All matches on the same calendar date receive the same prior history. Results
from that date are added only after every match on the date has been evaluated.
"""
import argparse, json
from collections import defaultdict, deque
from pathlib import Path
import pandas as pd


def fmt_key(value):
    value = str(value).upper()
    return "T20" if value in ("T20", "IT20") else value


def build_history(df):
    """Return team, H2H and venue summaries using strictly earlier dates."""
    df = df.copy()
    df["date"] = pd.to_datetime(df["date"], errors="coerce")
    df = df.dropna(subset=["date"]).sort_values(["date", "match_id"])

    team_results = defaultdict(lambda: deque(maxlen=20))
    team_form = defaultdict(lambda: deque(maxlen=10))
    h2h_results = defaultdict(lambda: deque(maxlen=10))
    venue_scores = defaultdict(lambda: deque(maxlen=30))

    # Stage each date: build all rows from the old state, then apply outcomes.
    for _, day in df.groupby(df["date"].dt.date, sort=True):
        pending = []
        for row in day.to_dict("records"):
            gender = str(row.get("gender") or "unknown").lower()
            fmt = fmt_key(row.get("format"))
            t1, t2 = str(row["team1"]), str(row["team2"])
            winner = str(row["winner"])
            venue = str(row.get("venue") or "UNKNOWN")
            key1, key2 = (gender, fmt, t1), (gender, fmt, t2)
            pair = (gender, fmt, t1, t2)
            prior1, prior2 = list(team_results[key1]), list(team_results[key2])
            form1, form2 = list(team_form[key1]), list(team_form[key2])
            h2h = list(h2h_results[pair])
            scores = list(venue_scores[(gender, fmt, venue)])
            pending.append({
                "gender": gender, "format": fmt, "team1": t1, "team2": t2,
                "winner": winner, "venue": venue,
                "team1_strength": sum(prior1) / len(prior1) if prior1 else None,
                "team2_strength": sum(prior2) / len(prior2) if prior2 else None,
                "team1_form": sum(form1) / len(form1) if form1 else None,
                "team2_form": sum(form2) / len(form2) if form2 else None,
                "h2h_team1_win": sum(h2h) / len(h2h) if h2h else None,
                "venue_average": sum(scores) / len(scores) if scores else None,
                "team1_matches": len(prior1), "team2_matches": len(prior2),
                "h2h_matches": len(h2h), "venue_matches": len(scores),
                "first_innings_runs": row.get("first_innings_runs"),
            })

        for row in pending:
            gender, fmt = row["gender"], row["format"]
            t1, t2, winner = row["team1"], row["team2"], row["winner"]
            key1, key2 = (gender, fmt, t1), (gender, fmt, t2)
            pair = (gender, fmt, t1, t2)
            team_results[key1].append(int(winner == t1))
            team_results[key2].append(int(winner == t2))
            team_form[key1].append(int(winner == t1))
            team_form[key2].append(int(winner == t2))
            h2h_results[pair].append(int(winner == t1))
            score = row["first_innings_runs"]
            if pd.notna(score):
                venue_scores[(gender, fmt, row["venue"])].append(float(score))

    result = {"version": 2, "source": "Cricsheet completed matches",
              "history_policy": "strictly earlier calendar dates only",
              "teams": {}, "h2h": {}, "venues": {}}
    for (gender, fmt, team), values in team_results.items():
        form = list(team_form[(gender, fmt, team)])
        result["teams"]["|".join((gender, fmt, team))] = {
            "strength": sum(values) / len(values) if values else None,
            "form": sum(form) / len(form) if form else None,
            "matches": len(values),
        }
    for (gender, fmt, t1, t2), values in h2h_results.items():
        result["h2h"]["|".join((gender, fmt, t1, t2))] = {
            "team1Win": sum(values) / len(values) if values else None,
            "matches": len(values),
        }
    for (gender, fmt, venue), values in venue_scores.items():
        result["venues"]["|".join((gender, fmt, venue))] = {
            "average": sum(values) / len(values) if values else None,
            "matches": len(values),
        }
    return result


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--input", default="ml/data/matches.csv")
    ap.add_argument("--output", default="ml/data/pre-match-history.json")
    args = ap.parse_args()
    df = pd.read_csv(args.input)
    result = build_history(df)
    output = Path(args.output)
    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_text(json.dumps(result, separators=(",", ":")), encoding="utf-8")
    print(json.dumps({"teams": len(result["teams"]), "h2h_pairs": len(result["h2h"]),
                      "venues": len(result["venues"]), "output": str(output),
                      "history_policy": result["history_policy"]}))


if __name__ == "__main__":
    main()
