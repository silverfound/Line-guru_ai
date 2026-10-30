# Stronger cricket model — reproducible data pipeline

This directory contains the first stage of the next model version. It does not
replace the currently deployed browser models.

## Prepare data (free)

1. Download the Cricsheet JSON archive (the `all_json.zip` archive).
2. Install Python 3.10+ and pandas:
   `python -m pip install pandas`
3. Run:
   `python ml/build_dataset.py --zip all_json.zip --out-dir ml/data`

Outputs (generated locally and intentionally not committed):
- `matches.csv`: completed match-level records.
- `matches_with_features.csv`: records plus prior-only team, form, head-to-head
  and venue features.
- `dataset-summary.json`: row counts, format coverage and chronological split.

## Leakage safeguards

For each match, gender- and format-specific team strength (last 20), form (last 10), head-to-head (last 10)
and venue first-innings average (last 30) are calculated from matches strictly
earlier in date order. The current match is added to history only after its
features are generated. Train/test separation is chronological by date, so
matches on the same date are assigned to the same side.

The initial data build retains completed men's and women's T20, IT20 and ODI
matches with a winner and at least two innings. Tests, ties/no-results, and
matches explicitly marked with a revised-target method are excluded. This is
a conservative baseline; league and competition coverage must be inspected
from the generated summary before deciding which competitions to include.

## Next stage

Train and compare a team-aware model against the existing baseline using the
same date split. Report accuracy, log loss, ROC AUC, Brier score and sample
counts by format and competition. Do not publish a new browser model unless
it beats the baseline on the untouched chronological test set and calibration
is acceptable. Toss is available only when supplied; unknown toss stays
unknown. Player availability and pitch labels are not fabricated.

## Existing production model

See [../ml-predictor.js](../ml-predictor.js) and [model-metrics.json](model-metrics.json).
The production predictor remains unchanged by this pipeline addition.
