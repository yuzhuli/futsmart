from __future__ import print_function # Python 2/3 compatibility
import boto3

# botoCli = boto3.session.Session(profile_name='dynamodb-full-access')
# dynamodb = botoCli.resource('dynamodb', region_name='us-west-2')

botoCli = boto3.session.Session(profile_name='dynamodb-docker-user')
dynamodb = botoCli.resource('dynamodb', region_name='us-west-2', endpoint_url="http://localhost:8000")


# Create table for Indices
indices_table = dynamodb.create_table(
    TableName='Indices',
    KeySchema=[
        {
            'AttributeName': 'type',
            'KeyType': 'HASH'  #Partition key
        }
    ],
    AttributeDefinitions=[
        {
            'AttributeName': 'type',
            'AttributeType': 'S'
        },
    ],
    ProvisionedThroughput={
        'ReadCapacityUnits': 10,
        'WriteCapacityUnits': 10
    }
)


# Create table for TrendyPlayers
dynamodb.create_table(
    TableName='TrendyPlayers',
    KeySchema=[
        {
            'AttributeName': 'type',
            'KeyType': 'HASH'  #Partition key
        }
    ],
    AttributeDefinitions=[
        {
            'AttributeName': 'type',
            'AttributeType': 'S'
        },
    ],
    ProvisionedThroughput={
        'ReadCapacityUnits': 10,
        'WriteCapacityUnits': 10
    }
)


# Create table for PlayerNoSortKey
# dynamodb.create_table(
#     TableName='PlayerNoSortKey',
#     KeySchema=[
#         {
#             'AttributeName': 'id',
#             'KeyType': 'HASH'  #Partition key
#         }
#     ],
#     AttributeDefinitions=[
#         {
#             'AttributeName': 'id',
#             'AttributeType': 'S'
#         },
#     ],
#     ProvisionedThroughput={
#         'ReadCapacityUnits': 20,
#         'WriteCapacityUnits': 20
#     }
# )

# print("Table status:", dynamodb.Table('Indices').table_status)
# print("Count of items in Indices Table: ", dynamodb.Table('Indices').item_count)

# print("Table status:", dynamodb.Table('TrendyPlayers').table_status)
# print("Count of items in Indices Table: ", dynamodb.Table('TrendyPlayers').item_count)

# print("Table status:", dynamodb.Table('PlayerNoSortKey').table_status)
# print("Count of items in Indices Table: ", dynamodb.Table('PlayerNoSortKey').item_count)

# Delete tabes
# gold_indices_table = dynamodb.Table('GoldIndices')
# icon_indices_table = dynamodb.Table('IconIndices')
# gold_indices_table.delete()
# icon_indices_table.delete()
# dynamodb.Table('Player').delete()
