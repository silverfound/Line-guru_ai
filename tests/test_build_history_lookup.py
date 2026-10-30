import unittest
import pandas as pd

from ml.build_history_lookup import build_history, build_prior_snapshots


class RuntimeHistoryLeakageTests(unittest.TestCase):
    def rows(self):
        return pd.DataFrame([
            {"match_id":"m1","date":"2024-01-01","gender":"male","format":"T20",
             "team1":"Alpha","team2":"Beta","winner":"Alpha","venue":"Ground",
             "first_innings_runs":160},
            {"match_id":"m2","date":"2024-01-01","gender":"male","format":"T20",
             "team1":"Alpha","team2":"Beta","winner":"Beta","venue":"Ground",
             "first_innings_runs":170},
            {"match_id":"m3","date":"2024-01-02","gender":"male","format":"T20",
             "team1":"Alpha","team2":"Beta","winner":"Beta","venue":"Ground",
             "first_innings_runs":150},
        ])

    def test_same_day_matches_share_identical_prior_history(self):
        snapshots = {x["match_id"]: x for x in build_prior_snapshots(self.rows())}
        for key in ("team1_prior_matches", "team2_prior_matches",
                    "h2h_prior_matches", "venue_prior_matches"):
            self.assertEqual(snapshots["m1"][key], 0)
            self.assertEqual(snapshots["m2"][key], 0)

    def test_following_day_sees_all_completed_matches_from_prior_day(self):
        snapshots = {x["match_id"]: x for x in build_prior_snapshots(self.rows())}
        self.assertEqual(snapshots["m3"]["team1_prior_matches"], 2)
        self.assertEqual(snapshots["m3"]["team2_prior_matches"], 2)
        self.assertEqual(snapshots["m3"]["h2h_prior_matches"], 2)
        self.assertEqual(snapshots["m3"]["venue_prior_matches"], 2)
        self.assertEqual(snapshots["m3"]["h2h_team1_win_prior10"], 0.5)
        self.assertEqual(snapshots["m3"]["venue_first_innings_avg_prior30"], 165.0)

    def test_runtime_lookup_still_exports_compact_model_schema(self):
        history = build_history(self.rows())
        self.assertEqual(history["version"], 2)
        self.assertEqual(history["teams"]["male|T20|Alpha"]["matches"], 3)
        self.assertEqual(history["h2h"]["male|T20|Alpha|Beta"]["matches"], 3)
        self.assertEqual(history["venues"]["male|T20|Ground"]["matches"], 3)


if __name__ == "__main__":
    unittest.main()
