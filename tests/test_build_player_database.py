import unittest
from ml.build_player_database import match_player_rows, summarize, build_prior_player_snapshots

class PlayerDatabaseTests(unittest.TestCase):
    def sample(self):
        return {"info":{"match_type":"T20","gender":"female","teams":["Alpha","Beta"],
          "dates":["2025-01-01"],"venue":"Test Ground","event":{"name":"Test League"}},
          "innings":[
            {"team":"Alpha","overs":[{"over":0,"deliveries":[
              {"batter":"A Batter","bowler":"B Bowler","non_striker":"A Partner","runs":{"batter":4,"total":4},"extras":{}},
              {"batter":"A Batter","bowler":"B Bowler","non_striker":"A Partner","runs":{"batter":1,"total":1},"extras":{}},
              {"batter":"A Partner","bowler":"B Bowler","non_striker":"A Batter","runs":{"batter":0,"total":1},"extras":{"wides":1}},
              {"batter":"A Partner","bowler":"B Bowler","non_striker":"A Batter","runs":{"batter":0,"total":0},"extras":{},"wickets":[{"player_out":"A Partner","kind":"bowled"}]}
            ]}]},
            {"team":"Beta","overs":[{"over":0,"deliveries":[
              {"batter":"B Batter","bowler":"A Bowler","non_striker":"B Partner","runs":{"batter":6,"total":6},"extras":{}}
            ]}]}
          ]}
    def test_batting_bowling_gender(self):
        rows=match_player_rows("sample.json",self.sample())
        p={(r["player"],r["team"]):r for r in rows}
        self.assertEqual(p[("A Batter","Alpha")]["runs"],5)
        self.assertEqual(p[("A Batter","Alpha")]["balls_faced"],2)
        self.assertEqual(p[("A Batter","Alpha")]["fours"],1)
        self.assertEqual(p[("B Bowler","Beta")]["balls_bowled"],3)
        self.assertEqual(p[("B Bowler","Beta")]["runs_conceded"],6)
        self.assertEqual(p[("B Bowler","Beta")]["wickets"],1)
        self.assertEqual(p[("A Batter","Alpha")]["gender"],"female")
    def test_recent_form(self):
        p=next(x for x in summarize(match_player_rows("sample.json",self.sample())) if x["player"]=="A Batter")
        self.assertEqual(p["matches"],1); self.assertEqual(p["last5"]["runs"],5)
        self.assertEqual(p["strike_rate"],250.0)
    def test_prior_player_snapshots_exclude_same_day_and_include_earlier_dates(self):
        first = match_player_rows("first.json", self.sample())
        same_day_data = self.sample()
        same_day_data["info"]["dates"] = ["2025-01-01"]
        same_day = match_player_rows("same-day.json", same_day_data)
        next_day_data = self.sample()
        next_day_data["info"]["dates"] = ["2025-01-02"]
        next_day = match_player_rows("next-day.json", next_day_data)
        snapshots = build_prior_player_snapshots(first + same_day + next_day)
        indexed = {(x["match_id"], x["player"]): x for x in snapshots}
        self.assertEqual(indexed[("first", "A Batter")]["prior_matches"], 0)
        self.assertEqual(indexed[("same-day", "A Batter")]["prior_matches"], 0)
        prior = indexed[("next-day", "A Batter")]
        self.assertEqual(prior["prior_matches"], 2)
        self.assertEqual(prior["last5"]["runs"], 10)
        self.assertEqual(prior["last_match_date"], "2025-01-01")

    def test_test_cricket_ignored(self):
        d=self.sample(); d["info"]["match_type"]="TEST"
        self.assertEqual(match_player_rows("test.json",d),[])
if __name__=="__main__": unittest.main()
