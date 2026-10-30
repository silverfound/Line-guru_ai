# Line Guru AI — trained cricket models

This first browser-deployable ML release uses three compact LightGBM models trained from the supplied Cricsheet-format ball-by-ball archive.

## Models
- **First-innings result classifier:** estimates the chance that the side batting first eventually wins, from format and current first-innings state.
- **Live chase classifier:** estimates the chasing side's win probability from target, runs, wickets, balls used/remaining, current run rate, required run rate, and format.
- **First-innings score regressor:** estimates the completed first-innings total from format, current runs, wickets, and balls used/remaining.

The models are embedded as gzip-compressed JSON in `ml-predictor.js` and evaluated locally in the browser. No API key or prediction server is required.

## Training and validation
- Historical archive: 12,561 completed male/unspecified-gender T20, T20I and ODI matches.
- Validation: chronological 80/20 train/test split by match date; all snapshots from a match stay on the same side of the split.
- DLS/revised-target matches are excluded from the training set.
- Test cricket is not supported by this first model release.

## Held-out results
- Live chase classifier: 81.4% accuracy, 0.396 log loss, 0.904 ROC AUC overall.
- Mid-innings chase subset: 83.4% T20 accuracy; 76.9% ODI accuracy.
- First-innings result classifier: 65.7% accuracy, 0.616 log loss, 0.720 ROC AUC.
- First-innings score regressor: MAE 26.0 runs, RMSE 35.1 runs.

These are historical holdout results, not guarantees of future accuracy. Snapshot-level metrics can be affected by the distribution of match states and should not be interpreted as the probability of a prediction being correct in an individual match.

## Current limitations
The first release uses match state and format. It does **not yet** incorporate team identity/strength, rolling team form, head-to-head, venue effects, toss decision, player availability, or automatically imported live scores. The app asks users to enter match state manually. Those features are planned for a later model version.
