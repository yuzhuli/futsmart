#
#  Load json file to DynamoDB

import boto3
import json
import decimal
import sys

# botoCli = boto3.session.Session(profile_name='dynamodb-full-access')
# dynamodb = botoCli.resource('dynamodb', region_name='us-west-2')

botoCli = boto3.session.Session(profile_name='dynamodb-docker-user')
dynamodb = botoCli.resource('dynamodb', region_name='us-west-2', endpoint_url='http://localhost:8000')


# Load data to Indices
# print("loading to Indices")
# indices_table = dynamodb.Table('Indices')
# files = [
#     ('/Users/LiYuzhu/Dropbox/fifa-assist/gold_indices_all.json', 'gold_indices_all'),
#     ('/Users/LiYuzhu/Dropbox/fifa-assist/icon_indices_all.json', 'icon_indices_all'),
# ]
# counter = 0
# for path, type_name in files:
#     with open(path) as json_file:
#         value = json_file.read()
#         entry = {}
#         entry['type'] = type_name
#         entry['value'] = value
#         indices_table.put_item(Item=entry)
#         print('completed: ', counter)
#         counter += 1
# print("Count of items in Indices Table: ", indices_table.item_count)
        
# Load data to TrendyPlayers
# print("Loading to TrendyPlayers")
# trendy_players_table = dynamodb.Table('TrendyPlayers')
# files = [
#     ('/Users/LiYuzhu/Dropbox/fifa-assist/top_increasing_gold.json', 'top_increasing_gold'),
#     ('/Users/LiYuzhu/Dropbox/fifa-assist/top_decreasing_gold.json', 'top_decreasing_gold'),
#     ('/Users/LiYuzhu/Dropbox/fifa-assist/top_increasing_icon.json', 'top_increasing_icon'),
#     ('/Users/LiYuzhu/Dropbox/fifa-assist/top_decreasing_icon.json', 'top_decreasing_icon'),
# ]
# counter = 0
# for path, type_name in files:
#     with open(path) as json_file:
#         value = json_file.read()
#         entry = {}
#         entry['type'] = type_name
#         entry['players'] = value
#         trendy_players_table.put_item(Item=entry)
#         print('completed: ', counter)
#         counter += 1
# print("Count of items in TrendyPlayers Table: ", trendy_players_table.item_count)

# Load data to PlayerNoSortKey
# print("Loading to PlayerV2")
# player_table = dynamodb.Table('PlayerV2')
# with open("/Users/LiYuzhu/Dropbox/fifa-assist/fifaassist_players.json") as json_file:
#     players = json.load(json_file, parse_float=decimal.Decimal)
#     counter = 0
#     size = len(players)
#     for player in players:
#         entry = {}
#         for key in player:
#             if player[key] == "":
#                 continue
#             if key == "_id":
#                 entry["id"] = str(player["_id"]["$oid"])
#             elif key == "updated_at":
#                 entry["updated_at"] = str(player["updated_at"]["$date"])
#             else:
#                 if type(player[key]) is int or type(player[key]) is float:
#                     entry[key.lower()] = player[key]
#                 else:
#                     entry[key.lower()] = str(player[key])
#         player_table.put_item(Item=entry)
#         print("Completed: ", counter, " in ", size)
#         counter += 1
# print("Count of items in PlayerNoSortKey Table: ", player_table.item_count)

# Load data to SearchIndex
print("Loading to PlayerSearchReverseIndex")
player_table = dynamodb.Table('PlayerSearchReverseIndex')
with open("search_indexing.json") as json_file:
    all_indexing = json.load(json_file, parse_float=decimal.Decimal)
    counter = 0
    size = len(all_indexing)
    for key in all_indexing:
        entry = {}
        entry["keyword"] = key
        entry_size = min(len(all_indexing), 10)
        entry["players"] = all_indexing[key][:entry_size]
        player_table.put_item(Item=entry)
        print("Completed: ", counter, " in ", size)
        counter += 1