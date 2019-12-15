
#
#  Load json file to DynamoDB
#
# from __future__ import print_function 
import boto3
import json
import decimal
import sys

botoCli = boto3.session.Session(profile_name='dynamodb-docker-user')
dynamodb = botoCli.resource('dynamodb', region_name='us-west-2', endpoint_url='http://localhost:8000')

# Load data to Indices
# indices_table = dynamodb.Table('Indices')
# with open(sys.argv[1]) as json_file:
#     content = json_file.read()
#     entry = {}
#     entry['type'] = 'gold_indices_all'
#     entry['indices'] = content
#     indices_table.put_item(Item=entry)

# with open(sys.argv[2]) as json_file:
#     entry = {}
#     content = json_file.read()
#     entry['type'] = 'icon_indices_all'
#     entry['indices'] = content
#     indices_table.put_item(Item=entry)


# Load data to TrendyPlayers
trendy_players_table = dynamodb.Table('TrendyPlayers')
with open(sys.argv[1]) as json_file:
    content = json_file.read()
    entry = {}
    entry['type'] = 'top_decreasing_icon'
    entry['players'] = content
    trendy_players_table.put_item(Item=entry)

# for file in sys.argv[1]:
#     with open(file) as json_file:
#         content = json_file.read()
#         entry = {}


print("Count of items in Indices Table: ", trendy_players_table.item_count)
# indices_table = dynamodb.Table('Indices')
# with open(sys.argv[1]) as json_file:
#     gold_indices = json.load(json_file, parse_float = decimal.Decimal)
#     current = 0
#     count_of_indices = len(gold_indices)
#     for index in gold_indices:
#         gold_indices_table.put_item(Item=index)
#         print(current, ": ", count_of_indices)
#         current += 1
