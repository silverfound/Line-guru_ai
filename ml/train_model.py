#!/usr/bin/env python3
"""Train genuine pre-match Team-Aware and optional post-toss models.

The pre-match model deliberately excludes toss and all live-match state.
The post-toss model is a separate companion artifact, never a replacement.
"""
import argparse, json
from pathlib import Path
import joblib
import lightgbm as lgb
import pandas as pd
from sklearn.metrics import accuracy_score, brier_score_loss, log_loss, roc_auc_score

CATEGORICAL = ["format", "gender", "team1", "team2", "venue", "competition"]
HISTORY = [
    "team1_strength_prior20", "team2_strength_prior20",
    "team1_form_prior10", "team2_form_prior10",
    "h2h_team1_win_prior10", "venue_first_innings_avg_prior30",
    "team1_prior_matches", "team2_prior_matches",
    "h2h_prior_matches", "venue_prior_matches",
]
PRE_MATCH_FEATURES = CATEGORICAL + HISTORY
POST_TOSS_FEATURES = PRE_MATCH_FEATURES + ["toss_won_by_team1", "team1_bats_first"]


def score_slice(y, p):
    result = {
        "matches": int(len(y)),
        "accuracy": float(accuracy_score(y, p >= 0.5)),
        "log_loss": float(log_loss(y, p, labels=[0, 1])),
        "brier": float(brier_score_loss(y, p)),
    }
    result["roc_auc"] = float(roc_auc_score(y, p)) if len(set(y)) == 2 else None
    return result


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--input", default="ml/data/matches_with_features.csv")
    ap.add_argument("--out-dir", default="ml/output")
    args = ap.parse_args()
    data = pd.read_csv(args.input)
    required = set(PRE_MATCH_FEATURES + ["team1_win", "split", "toss_winner", "team1_bats_first"])
    missing = sorted(required - set(data.columns))
    if missing:
        raise SystemExit("Missing required columns: " + ", ".join(missing))
    data["toss_won_by_team1"] = (data["toss_winner"] == data["team1"]).astype(float)
    data.loc[data["toss_winner"].isna(), "toss_won_by_team1"] = float("nan")
    for col in CATEGORICAL:
        data[col] = data[col].fillna("UNKNOWN").astype("category")
    train, test = data["split"].eq("train"), data["split"].eq("test")
    if not train.any() or not test.any():
        raise SystemExit("Both chronological train and test rows are required.")
    out = Path(args.out_dir)
    out.mkdir(parents=True, exist_ok=True)
    all_metrics = {
        "target": "team1_win; team1/team2 have stable alphabetical identity, not batting order",
        "split": "chronological by match date",
        "pre_match": {"features": PRE_MATCH_FEATURES},
        "post_toss": {"features": POST_TOSS_FEATURES},
        "warning": "Research artifacts only. Do not deploy until independently compared with production on the same untouched test set.",
    }
    for name, features, mask in [
        ("team-aware-pre-match", PRE_MATCH_FEATURES, test),
        ("team-aware-post-toss", POST_TOSS_FEATURES, test & data["toss_winner"].notna()),
    ]:
        fit_features = features
        model = lgb.LGBMClassifier(
            objective="binary", n_estimators=700, learning_rate=0.02,
            num_leaves=23, max_depth=-1, min_child_samples=50,
            subsample=0.85, subsample_freq=1, colsample_bytree=0.85,
            reg_lambda=5.0, reg_alpha=0.2, verbosity=-1, random_state=42,
        )
        model.fit(data.loc[train, fit_features], data.loc[train, "team1_win"],
                  categorical_feature=CATEGORICAL)
        probs = model.predict_proba(data.loc[mask, fit_features])[:, 1]
        y = data.loc[mask, "team1_win"].astype(int)
        metrics = {"overall": score_slice(y, probs), "by_format": {}, "by_gender": {}}
        for group_col, target in [("format", "by_format"), ("gender", "by_gender")]:
            subset = data.loc[mask, [group_col, "team1_win"]].copy()
            subset["probability"] = probs
            for group, part in subset.groupby(group_col, dropna=False):
                metrics[target][str(group)] = score_slice(part["team1_win"].astype(int), part["probability"].to_numpy())
        all_metrics[name] = metrics
        joblib.dump({"model": model, "features": fit_features, "categorical": CATEGORICAL,
                     "model_type": name, "team_orientation": "stable alphabetical team1/team2"},
                    out / (name + ".joblib"))
    (out / "team-aware-metrics.json").write_text(json.dumps(all_metrics, indent=2), encoding="utf-8")
    print(json.dumps(all_metrics, indent=2))


if __name__ == "__main__":
    main()
