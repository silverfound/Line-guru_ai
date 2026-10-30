#!/usr/bin/env python3
"""Build leakage-safe, team-oriented cricket match data from a Cricsheet JSON ZIP.

Team 1 is the alphabetically stable team identity, NOT the side batting first.
This makes the target usable for a genuine pre-match prediction before the toss.
Historical features use completed matches strictly earlier than the current date.
"""
from __future__ import annotations
import argparse, json, zipfile
from collections import defaultdict, deque
from pathlib import Path
import pandas as pd

SUPPORTED = {"T20", "IT20", "ODI"}
DLS_WORDS = ("D/L", "DLS", "Duckworth", "revised", "VJD")


def innings_total(innings):
    total = wickets = legal_balls = 0
    for over in (innings or {}).get("overs", []):
        for delivery in over.get("deliveries", []):
            runs = delivery.get("runs", {})
            total += int(runs.get("total", 0) or 0)
            if delivery.get("wickets"):
                wickets += len(delivery["wickets"])
            extras = delivery.get("extras", {}) or {}
            if not any(k in extras for k in ("wides", "noballs")):
                legal_balls += 1
    return total, wickets, legal_balls


def parse_match(name, raw):
    info = raw.get("info", {})
    match_type = str(info.get("match_type", "")).upper()
    if match_type not in SUPPORTED:
        return None
    teams = info.get("teams") or []
    outcome = info.get("outcome") or {}
    winner = outcome.get("winner")
    if len(teams) != 2 or winner not in teams:
        return None
    method = str(outcome.get("method", ""))
    if any(word.lower() in method.lower() for word in DLS_WORDS):
        return None
    innings = raw.get("innings") or []
    if len(innings) < 2:
        return None
    if outcome.get("by") is None and outcome.get("method"):
        return None
    totals = [innings_total(x) for x in innings]
    if not totals or totals[0][2] == 0:
        return None
    date = (info.get("dates") or [None])[0]
    if not date:
        return None
    toss = info.get("toss") or {}
    event = info.get("event") or {}
    team1, team2 = sorted(teams)
    first_batting_team = innings[0].get("team")
    if first_batting_team not in teams:
        return None
    return {
        "match_id": Path(name).stem,
        "date": date,
        "format": match_type,
        "gender": info.get("gender", "unknown"),
        "team1": team1,
        "team2": team2,
        "first_batting_team": first_batting_team,
        "second_batting_team": team2 if first_batting_team == team1 else team1,
        "winner": winner,
        "team1_win": int(winner == team1),
        "toss_winner": toss.get("winner"),
        "toss_decision": toss.get("decision"),
        "team1_bats_first": int(first_batting_team == team1),
        "venue": info.get("venue"),
        "city": info.get("city"),
        "competition": event.get("name"),
        "season": info.get("season"),
        "team_type": info.get("team_type"),
        "first_innings_runs": totals[0][0],
        "first_innings_wickets": totals[0][1],
        "first_innings_balls": totals[0][2],
        "second_innings_runs": totals[1][0] if len(totals) > 1 else None,
        "innings_count": len(innings),
    }


def add_historical_features(df):
    """Prior-only features; all matches on a date share the same prior history."""
    df = df.sort_values(["date", "match_id"]).reset_index(drop=True).copy()
    team_results = defaultdict(lambda: deque(maxlen=20))
    team_form = defaultdict(lambda: deque(maxlen=10))
    h2h = defaultdict(lambda: deque(maxlen=10))
    venue_scores = defaultdict(lambda: deque(maxlen=30))
    rows = []
    for _, day in df.groupby(df["date"].dt.date, sort=True):
        pending = []
        for row in day.to_dict("records"):
            gender, fmt = row.get("gender", "unknown"), row["format"]
            a = (gender, fmt, row["team1"])
            b = (gender, fmt, row["team2"])
            venue = (gender, fmt, row.get("venue") or "UNKNOWN")
            pair = tuple(sorted((a, b)))
            ra, rb = list(team_results[a]), list(team_results[b])
            fa, fb = list(team_form[a]), list(team_form[b])
            hh, vs = list(h2h[pair]), list(venue_scores[venue])
            row.update({
                "team1_strength_prior20": sum(ra) / len(ra) if ra else None,
                "team2_strength_prior20": sum(rb) / len(rb) if rb else None,
                "team1_form_prior10": sum(fa) / len(fa) if fa else None,
                "team2_form_prior10": sum(fb) / len(fb) if fb else None,
                "h2h_team1_win_prior10": ((sum(hh) if a == pair[0] else len(hh)-sum(hh)) / len(hh)) if hh else None,
                "venue_first_innings_avg_prior30": sum(vs) / len(vs) if vs else None,
                "team1_prior_matches": len(ra), "team2_prior_matches": len(rb),
                "h2h_prior_matches": len(hh), "venue_prior_matches": len(vs),
            })
            rows.append(row)
            pending.append(row)
        for row in pending:
            gender, fmt = row.get("gender", "unknown"), row["format"]
            a = (gender, fmt, row["team1"])
            b = (gender, fmt, row["team2"])
            venue = (gender, fmt, row.get("venue") or "UNKNOWN")
            pair = tuple(sorted((a, b)))
            team_results[a].append(int(row["winner"] == row["team1"]))
            team_results[b].append(int(row["winner"] == row["team2"]))
            team_form[a].append(int(row["winner"] == row["team1"]))
            team_form[b].append(int(row["winner"] == row["team2"]))
            h2h[pair].append(int(row["winner"] == pair[0][2]))
            venue_scores[venue].append(int(row["first_innings_runs"]))
    return pd.DataFrame(rows)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--zip", required=True, help="Path to Cricsheet all_json.zip")
    ap.add_argument("--out-dir", default="ml/data")
    args = ap.parse_args()
    out = Path(args.out_dir)
    out.mkdir(parents=True, exist_ok=True)
    records, errors = [], 0
    with zipfile.ZipFile(args.zip) as archive:
        for name in archive.namelist():
            if not name.lower().endswith(".json") or name.endswith("/"):
                continue
            try:
                parsed = parse_match(name, json.loads(archive.read(name)))
                if parsed:
                    records.append(parsed)
            except (ValueError, KeyError, TypeError, UnicodeDecodeError):
                errors += 1
    if not records:
        raise SystemExit("No supported completed matches found; check the ZIP format.")
    matches = pd.DataFrame(records).drop_duplicates("match_id")
    matches["date"] = pd.to_datetime(matches["date"], errors="coerce")
    matches = matches.dropna(subset=["date"]).sort_values(["date", "match_id"])
    featured = add_historical_features(matches)
    dates = sorted(featured["date"].dt.date.unique())
    cut = max(1, int(len(dates) * 0.8))
    cutoff = dates[min(cut, len(dates)-1)]
    featured["split"] = featured["date"].dt.date.map(lambda d: "train" if d < cutoff else "test")
    featured.to_csv(out / "matches_with_features.csv", index=False)
    matches.to_csv(out / "matches.csv", index=False)
    summary = {
        "parsed_matches": int(len(matches)), "feature_rows": int(len(featured)),
        "parse_errors": errors, "formats": matches["format"].value_counts().to_dict(),
        "genders": matches["gender"].value_counts().to_dict(),
        "competitions": int(matches["competition"].nunique()),
        "venues": int(matches["venue"].nunique()),
        "train_matches": int((featured["split"] == "train").sum()),
        "test_matches": int((featured["split"] == "test").sum()),
        "test_start_date": str(cutoff), "team_orientation": "stable alphabetical team1/team2; independent of toss",
        "historical_features_are_prior_only": True,
    }
    (out / "dataset-summary.json").write_text(json.dumps(summary, indent=2), encoding="utf-8")
    print(json.dumps(summary, indent=2))


if __name__ == "__main__":
    main()
