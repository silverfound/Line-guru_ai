import unittest
from ml.build_player_database import parse_player_match

class PlayerDatabaseTests(unittest.TestCase):
    def sample(self):
        return {
            "info": {"match_type":"T20","gender":"male","dates":["2025-01-01"],
                     "teams":["A","B"],"venue":"Ground","event":{"name":"League"},
                     "players":{"A":["Batter","Runner"],"B":["Bowler"]}},
            "innings":[{"team":"A","overs":[{"over":0,"deliveries":[
                {"batter":"Batter","bowler":"Bowler","non_striker":"Runner",
                 "runs":{"batter":4,"total":4}},
                {"batter":"Batter","bowler":"Bowler","non_striker":"Runner",
                 "runs":{"batter":0,"total":1},"extras":{"wides":1}},
                {"batter":"Batter","bowler":"Bowler","non_striker":"Runner",
                 "runs":{"batter":6,"total":6},
                 "wickets":[{"kind":"caught","player_out":"Batter"}]}
            ]}]}]
        }
    def test_batting_and_bowling_stats_exclude_wide_from_balls_faced(self):
        rows={r["player"]:r for r in parse_player_match("match.json",self.sample())}
        batter=rows["Batter"]; bowler=rows["Bowler"]
        self.assertEqual((batter["runs"],batter["balls_faced"],batter["fours"],batter["sixes"]),(10,2,1,1))
        self.assertEqual(batter["dismissals"],1)
        self.assertEqual(bowler["legal_balls_bowled"],2)
        self.assertEqual(bowler["wickets"],1)
        self.assertEqual(bowler["runs_conceded"],11)
        self.assertEqual(bowler["economy"],33.0)
    def test_unsupported_and_incomplete_matches_are_skipped(self):
        raw=self.sample(); raw["info"]["match_type"]="Test"
        self.assertEqual(parse_player_match("x.json",raw),[])
        raw=self.sample(); raw["info"]["dates"]=[]
        self.assertEqual(parse_player_match("x.json",raw),[])
    def test_run_out_does_not_credit_bowler(self):
        raw=self.sample()
        raw["innings"][0]["overs"][0]["deliveries"][2]["wickets"][0]["kind"]="run out"
        rows={r["player"]:r for r in parse_player_match("match.json",raw)}
        self.assertEqual(rows["Bowler"]["wickets"],0)
        self.assertEqual(rows["Batter"]["dismissals"],1)

if __name__ == "__main__":
    unittest.main()
