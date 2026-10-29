# Line Guru AI — Cricket Statistics Prediction

This branch removes the astrology/Abjad/planetary prediction flow and preserves the existing team and captain database from `script.js`.

## Included
- Urdu team and league team dropdown database preserved from the previous version.
- Captain autofill based on the selected team and format where records exist.
- Cricket-format selection (T20, ODI, Test).
- Match-winner estimate using explicitly entered recent-form percentages and toss/pitch inputs.
- Score projection from current runs, overs, wickets, pitch type, and optional venue average.
- Chase estimate using current run rate, required run rate, remaining balls, wickets, and entered form.
- Responsive UI based on the existing stylesheet.

## Important limitations
- This is a transparent rule-based prototype, **not a trained machine-learning model**.
- Live scores and historical match statistics are **not connected yet**. The UI clearly labels this.
- Team/captain records were preserved as they were; they may be outdated and should be checked against current official squads.
- Predictions are estimates, not guarantees.

## Next implementation step
Connect a licensed cricket-data provider through a backend service, then build and evaluate a model using historical match data. Keep provider API keys on the backend, never in browser JavaScript or an APK.
