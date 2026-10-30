import unittest
from ml.build_player_database import match_player_rows, summarize

class PlayerDatabaseTests(unittest.TestCase):
    def sample(self):
        return {
            "info": {"match_type":"T20","gender":"male","dates":["2025-01-01"],
                     "teams":["A","B"],"venue":"Ground","event":{"name":"League"}},
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
    def test_batting_and_bowling_stats(self):
        rows={r["player"]:r for r in match_player_rows("match.json",self.sample())}
        batter=rows["Batter"]; bowler=rows["Bowler"]
        self.assertEqual((batter["runs"],batter["balls_faced"],batter["fours"],batter["sixes"]),(10,2,1,1))
        self.assertEqual(batter["outs"],1)
        self.assertEqual(bowler["balls_bowled"],2)
        self.assertEqual(bowler["wickets"],1)
        self.assertEqual(bowler["runs_conceded"],11)
        self.assertEqual(bowler["bowling_innings"],1)
    def test_unsupported_and_incomplete_matches_are_skipped(self):
        raw=self.sample(); raw["info"]["match_type"]="Test"
        self.assertEqual(match_player_rows("x.json",raw),[])
        raw=self.sample(); raw["info"]["dates"]=[]
        self.assertEqual(match_player_rows("x.json",raw),[])
    def test_run_out_does_not_credit_bowler(self):
        raw=self.sample()
        raw["innings"][0]["overs"][0]["deliveries"][2]["wickets"][0]["kind"]="run out"
        rows={r["player"]:r for r in match_player_rows("match.json",raw)}
        self.assertEqual(rows["Bowler"]["wickets"],0)
        self.assertEqual(rows["Batter"]["outs"],1)
    def test_last_five_and_ten_form_are_recent_match_windows(self):
        rows=[]
        for i in range(12):
            rows.append({"gender":"male","format":"T20","team":"A","player":"P",
                         "date":f"2025-01-{i+1:02d}","match_id":str(i),
                         "matches":1,"batting_innings":1,"runs":i+1,"balls_faced":10,
                         "outs":1,"fours":0,"sixes":0,"bowling_innings":0,
                         "balls_bowled":0,"runs_conceded":0,"wickets":0})
        profile=summarize(rows)[0]
        self.assertEqual(profile["last5"]["runs"],sum(range(8,13)))
        self.assertEqual(profile["last10"]["matches"],10)
        self.assertEqual(profile["last10"]["runs"],sum(range(3,13)))

if __name__ == "__main__":
    unittest.main()
