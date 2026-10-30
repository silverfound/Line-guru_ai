#!/usr/bin/env python3
"""Same-holdout comparison: non-team baseline vs Team-Aware models.

All models use the identical chronological train/test rows. The primary comparison
is pre-match (no toss/live state): baseline context features vs team identities,
prior form/strength, H2H and venue history. The post-toss model is reported
separately and is not compared against the pre-match baseline.
"""
import argparse, json
from pathlib import Path
import joblib
import lightgbm as lgb
import pandas as pd
from sklearn.metrics import accuracy_score, brier_score_loss, log_loss, roc_auc_score

# Shared context-only baseline: deliberately excludes team identity and all
# team-history features. Same rows, target, split, estimator and seed.
BASELINE_FEATURES = ["format", "gender", "venue", "competition"]
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


def make_model():
    return lgb.LGBMClassifier(
        objective="binary", n_estimators=700, learning_rate=0.02,
        num_leaves=23, max_depth=-1, min_child_samples=50,
        subsample=0.85, subsample_freq=1, colsample_bytree=0.85,
        reg_lambda=5.0, reg_alpha=0.2, verbosity=-1, random_state=42,
    )


def score_slice(y, p):
    result = {
        "matches": int(len(y)),
        "accuracy": float(accuracy_score(y, p >= 0.5)),
        "log_loss": float(log_loss(y, p, labels=[0, 1])),
        "brier": float(brier_score_loss(y, p)),
    }
    result["roc_auc"] = float(roc_auc_score(y, p)) if len(set(y)) == 2 else None
    return result


def evaluate(model, data, features, mask):
    probs = model.predict_proba(data.loc[mask, features])[:, 1]
    y = data.loc[mask, "team1_win"].astype(int)
    metrics = {"overall": score_slice(y, probs), "by_format": {}, "by_gender": {}}
    for group_col, target in [("format", "by_format"), ("gender", "by_gender")]:
        subset = data.loc[mask, [group_col, "team1_win"]].copy()
        subset["probability"] = probs
        for group, part in subset.groupby(group_col, dropna=False):
            metrics[target][str(group)] = score_slice(
                part["team1_win"].astype(int), part["probability"].to_numpy()
            )
    return metrics


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
    if not data.loc[train, "date"].max() < data.loc[test, "date"].min():
        raise SystemExit("Chronological split is invalid: train overlaps test dates.")

    out = Path(args.out_dir)
    out.mkdir(parents=True, exist_ok=True)
    all_metrics = {
        "target": "team1_win; team1/team2 have stable alphabetical identity, not batting order",
        "split": "one identical chronological split for all models",
        "train_matches": int(train.sum()),
        "test_matches": int(test.sum()),
        "test_start_date": str(data.loc[test, "date"].min()),
        "primary_comparison": "same test rows: context-only pre-match baseline vs Team-Aware pre-match",
        "baseline_pre_match": {"features": BASELINE_FEATURES},
        "pre_match": {"features": PRE_MATCH_FEATURES},
        "post_toss": {"features": POST_TOSS_FEATURES},
    }

    # Baseline and Team-Aware use exactly the same train/test rows and estimator.
    baseline = make_model()
    baseline.fit(data.loc[train, BASELINE_FEATURES], data.loc[train, "team1_win"],
                 categorical_feature=BASELINE_FEATURES)
    baseline_metrics = evaluate(baseline, data, BASELINE_FEATURES, test)
    all_metrics["baseline_pre_match"] = baseline_metrics
    joblib.dump({"model": baseline, "features": BASELINE_FEATURES,
                 "categorical": BASELINE_FEATURES, "model_type": "baseline-pre-match"},
                out / "baseline-pre-match.joblib")

    for name, features, mask in [
        ("team-aware-pre-match", PRE_MATCH_FEATURES, test),
        ("team-aware-post-toss", POST_TOSS_FEATURES, test & data["toss_winner"].notna()),
    ]:
        model = make_model()
        model.fit(data.loc[train, features], data.loc[train, "team1_win"],
                  categorical_feature=[c for c in CATEGORICAL if c in features])
        metrics = evaluate(model, data, features, mask)
        all_metrics[name] = metrics
        joblib.dump({"model": model, "features": features, "categorical": CATEGORICAL,
                     "model_type": name, "team_orientation": "stable alphabetical team1/team2"},
                    out / (name + ".joblib"))

    base = all_metrics["baseline_pre_match"]["overall"]
    aware = all_metrics["team-aware-pre-match"]["overall"]
    all_metrics["same_holdout_comparison"] = {
        "same_test_rows": base["matches"] == aware["matches"],
        "test_rows": base["matches"],
        "accuracy_delta_team_aware_minus_baseline": aware["accuracy"] - base["accuracy"],
        "log_loss_delta_team_aware_minus_baseline": aware["log_loss"] - base["log_loss"],
        "brier_delta_team_aware_minus_baseline": aware["brier"] - base["brier"],
        "roc_auc_delta_team_aware_minus_baseline": (
            aware["roc_auc"] - base["roc_auc"]
            if aware["roc_auc"] is not None and base["roc_auc"] is not None else None
        ),
        "interpretation": "Positive accuracy/AUC and negative log-loss/Brier deltas favor Team-Aware.",
    }
    if not all_metrics["same_holdout_comparison"]["same_test_rows"]:
        raise SystemExit("Comparison failed: baseline and Team-Aware test row counts differ.")
    (out / "team-aware-metrics.json").write_text(json.dumps(all_metrics, indent=2), encoding="utf-8")
    print(json.dumps(all_metrics, indent=2))


if __name__ == "__main__":
    main()
