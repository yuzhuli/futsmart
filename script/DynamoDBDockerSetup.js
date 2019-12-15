var AWS = require('aws-sdk');

// Config AWS client to DynamoDB
// specify the credentail profile to use
const credentials = new AWS.SharedIniFileCredentials({profile: 'dynamodb-docker-user'});
AWS.config.credentials = credentials;
AWS.config.update({
    region: "us-west-2",
    endpoint: "http://localhost:8000"
});
var dynamodb = new AWS.DynamoDB();  
var docClient = new AWS.DynamoDB.DocumentClient();

// create table for Player
// const params = {
//     TableName : "Player",
//     KeySchema: [       
//         { AttributeName: "id", KeyType: "HASH"},  //Partition key
//         { AttributeName: "name", KeyType: "RANGE" }  //Sort key
//     ],
//     AttributeDefinitions: [       
//         { AttributeName: "id", AttributeType: "S" },
//         { AttributeName: "name", AttributeType: "S" }
//     ],
//     ProvisionedThroughput: {       
//         ReadCapacityUnits: 10, 
//         WriteCapacityUnits: 10
//     }
// };

// dynamodb.createTable(params, function(err, data) {
//     if (err) {
//         console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
//     } else {
//         console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
//     }
// });

// create table for Indices
const params = {
    TableName : "Indices",
    KeySchema: [       
        { AttributeName: "timestamp", KeyType: "HASH"},  //Partition key
    ],
    AttributeDefinitions: [       
        { AttributeName: "id", AttributeType: "N" },
    ],
    ProvisionedThroughput: {       
        ReadCapacityUnits: 10, 
        WriteCapacityUnits: 10
    }
};

dynamodb.createTable(params, function(err, data) {
    if (err) {
        console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
    }
});

// Load one player
const onePlayerParams = {
    TableName: "Player",
    Item: {
        "id": "a",
        "name": "a player",
        "nation": "a nation",
        "club": "a club"
    }
}

docClient.put(onePlayerParams, function(err, data) {
    if (err) {
        console.error("Unable to add player", ". Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("PutItem succeeded");
    }
 });