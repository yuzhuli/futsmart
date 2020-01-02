import json
import decimal

with open("/Users/LiYuzhu/Dropbox/fifa-assist/fifaassist_players.json") as json_file:
    players = json.load(json_file, parse_float=decimal.Decimal)
    print(players[100])