import json
import decimal
from operator import itemgetter

def create_indexing(player, indexing_results):
    resources = {}
    resources["id"] = player["_id"]["$oid"]
    resources["name"] = player["Name"]
    resources["rating"] = player["rating"]

    # Handle missing nation img 
    if "nation_img_url" in player:
        resources["nation_img_url"] = player["nation_img_url"]
    else:
        resources["nation_img_url"] = "https://futsmart-images-bucket.s3-us-west-2.amazonaws.com/club/112658.png"

    # Handle missing club img
    if "club_img_url" in player:
        resources["club_img_url"] = player["club_img_url"]
    else:
        resources["club_img_url"] = "https://futsmart-images-bucket.s3-us-west-2.amazonaws.com/club/112658.png"

    # Handle missing player img
    if "player_img_url" in player:
        resources["player_img_url"] =  player["player_img_url"]
    else:
        resources["player_img_url"] = "https://i.imgur.com/GkpxUmb.jpg"

    name = resources["name"]
    key_set = set()
    for length in range(3, len(name) + 1):
        for i in range(0, len(name) - length + 1):
            key = name[i: i + length]
            key_set.add(key)
    
    for key in key_set:
        if key in indexing_results:
            indexing_results[key].append(resources)
        else:
            indexing_results[key] = [resources]

def generate_indexing_json(players):
    indexing_results = {}
    count = 1
    for player in players:
        create_indexing(player, indexing_results)
        print(count)
        count += 1
    for key in indexing_results:
        indexing_results[key] = sorted(indexing_results[key], key=itemgetter("rating"), reverse=True)
    for key in indexing_results:
        indexing_results[key] = sorted(indexing_results[key], key=itemgetter("name"))
    with open("search_indexing.json", "w") as output_file:
        json.dump(indexing_results, output_file)

# players = [
#     {
#         "_id": {"$oid": 0},
#         "Name": "abcde",
#         "rating": 10
#     },
#     {
#         "_id": {"$oid": 1},
#         "Name": "bcde",
#         "rating": 20
#     },
#     {
#         "_id": {"$oid": 2},
#         "Name": "abcde",
#         "rating": 30
#     },
# ]

with open("/Users/LiYuzhu/Dropbox/fifa-assist/fifaassist_players.json") as json_file:
    players = json.load(json_file, parse_float=decimal.Decimal)

generate_indexing_json(players)
