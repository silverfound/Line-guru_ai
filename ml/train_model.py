#!/usr/bin/env python3
"""Train and evaluate a team-aware LightGBM baseline on prepared Cricsheet data."""
import argparse
import json
from pathlib import Path

import joblib
import lightgbm as lgb
import pandas as pd
from sklearn.metrics import accuracy_score, brier_score_loss, log_loss, roc_auc_score

CATEGORICAL = ["format", "gender", "team1", "team2", "venue", "competition"]
NUMERIC = [
    "team1_strength_prior20", "team2_strength_prior20",
    "team1_form_prior10", "team2_form_prior10",
    "h2h_team1_win_prior10", "venue_first_innings_avg_prior30",
    "team1_prior_matches", "team2_prior_matches",
    "h2h_prior_matches", "venue_prior_matches",
    "toss_won_by_first_batting", "toss_bat_first",
]


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--input", default="ml/data/matches_with_features.csv")
    ap.add_argument("--out-dir", default="ml/output")
    args = ap.parse_args()
    data = pd.read_csv(args.input)
    data["toss_won_by_first_batting"] = data.apply(
        lambda r: None if pd.isna(r.get("toss_winner")) else float(r["toss_winner"] == r["team1"]), axis=1
    )
    data["toss_bat_first"] = data["toss_decision"].map({"bat": 1.0, "field": 0.0})
    for col in CATEGORICAL:
        data[col] = data[col].fillna("UNKNOWN").astype("category")
    features = CATEGORICAL + NUMERIC
    train, test = data["split"].eq("train"), data["split"].eq("test")
    if not train.any() or not test.any():
        raise SystemExit("Both chronological train and test rows are required.")
    model = lgb.LGBMClassifier(
        n_estimators=650, learning_rate=0.025, num_leaves=31,
        min_child_samples=45, subsample=0.85, colsample_bytree=0.85,
        reg_lambda=3.0, verbosity=-1, random_state=42,
    )
    model.fit(data.loc[train, features], data.loc[train, "team1_win"], categorical_feature=CATEGORICAL)
    probabilities = model.predict_proba(data.loc[test, features])[:, 1]
    truth = data.loc[test, "team1_win"]
    metrics = {
        "model": "LightGBM team-aware experimental baseline",
        "target": "whether the first-batting team wins",
        "train_matches": int(train.sum()),
        "test_matches": int(test.sum()),
        "accuracy": float(accuracy_score(truth, probabilities >= 0.5)),
        "log_loss": float(log_loss(truth, probabilities)),
        "roc_auc": float(roc_auc_score(truth, probabilities)),
        "brier": float(brier_score_loss(truth, probabilities)),
        "features": features,
        "warning": "Experimental only; do not deploy without comparison to a baseline and format/competition-specific validation.",
    }
    out = Path(args.out_dir)
    out.mkdir(parents=True, exist_ok=True)
    (out / "metrics.json").write_text(json.dumps(metrics, indent=2), encoding="utf-8")
    joblib.dump({"model": model, "features": features, "categorical": CATEGORICAL}, out / "team-aware-model.joblib")
    print(json.dumps(metrics, indent=2))


if __name__ == "__main__":
    main()
