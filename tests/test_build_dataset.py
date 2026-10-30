import unittest
import pandas as pd

from ml.build_dataset import add_historical_features


class HistoricalFeatureOrientationTests(unittest.TestCase):
    def test_reversed_team_order_keeps_h2h_and_form_from_team1_perspective(self):
        matches = pd.DataFrame([
            {
                "match_id": "m1", "date": "2024-01-01", "gender": "male",
                "format": "T20", "team1": "Alpha", "team2": "Beta",
                "winner": "Alpha", "venue": "Ground", "first_innings_runs": 160,
            },
            {
                "match_id": "m2", "date": "2024-01-02", "gender": "male",
                "format": "T20", "team1": "Beta", "team2": "Alpha",
                "winner": "Alpha", "venue": "Ground", "first_innings_runs": 170,
            },
            {
                "match_id": "m3", "date": "2024-01-03", "gender": "male",
                "format": "T20", "team1": "Alpha", "team2": "Beta",
                "winner": "Beta", "venue": "Ground", "first_innings_runs": 150,
            },
        ])
        matches["date"] = pd.to_datetime(matches["date"])

        result = add_historical_features(matches).set_index("match_id")

        self.assertTrue(pd.isna(result.loc["m1", "h2h_team1_win_prior10"]))
        self.assertEqual(result.loc["m2", "h2h_team1_win_prior10"], 0.0)
        self.assertEqual(result.loc["m2", "team1_form_prior10"], 0.0)
        self.assertEqual(result.loc["m2", "team2_form_prior10"], 1.0)
        self.assertEqual(result.loc["m3", "h2h_team1_win_prior10"], 1.0)
        self.assertEqual(result.loc["m3", "team1_strength_prior20"], 1.0)
        self.assertEqual(result.loc["m3", "team2_strength_prior20"], 0.0)

    def test_same_day_matches_do_not_update_each_others_history(self):
        matches = pd.DataFrame([
            {
                "match_id": "m1", "date": "2024-01-01", "gender": "male",
                "format": "T20", "team1": "Alpha", "team2": "Beta",
                "winner": "Alpha", "venue": "Ground", "first_innings_runs": 160,
            },
            {
                "match_id": "m2", "date": "2024-01-01", "gender": "male",
                "format": "T20", "team1": "Beta", "team2": "Alpha",
                "winner": "Alpha", "venue": "Ground", "first_innings_runs": 170,
            },
        ])
        matches["date"] = pd.to_datetime(matches["date"])

        result = add_historical_features(matches)

        self.assertTrue(result["h2h_prior_matches"].eq(0).all())
        self.assertTrue(result["team1_prior_matches"].eq(0).all())
        self.assertTrue(result["team2_prior_matches"].eq(0).all())


if __name__ == "__main__":
    unittest.main()
