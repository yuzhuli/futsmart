
#
#  Load json file to DynamoDB
#
# from __future__ import print_function 
import boto3
import json
import decimal
import sys

botoCli = boto3.session.Session(profile_name='dynamodb-full-access')
dynamodb = botoCli.resource('dynamodb', region_name='us-west-2')

table = dynamodb.Table('Player')

with open(sys.argv[1]) as json_file:
    players = json.load(json_file, parse_float = decimal.Decimal)
    for player in players:
        entry = {}
        for key in player:
            if player[key] == "":
                continue
            if key == "_id":
                entry["id"] = str(player["_id"]["$oid"])
            elif key == "updated_at":
                entry["updated_at"] = str(player["updated_at"]["$date"])
            else:
                if type(player[key]) is int or type(player[key]) is float:
                    print('int or float')
                    entry[key.lower()] = player[key]
                else:
                    entry[key.lower()] = str(player[key])
        table.put_item(Item=entry)

