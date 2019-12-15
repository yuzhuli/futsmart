const express = require('express');
const cors = require('cors');
const redis = require('redis');
const path = require('path');
const {promisify} = require('util');
const ObjectID = require('mongodb').ObjectID;
const {MongoDBConnection} = require('./MongoDBConnection');
var AWS = require('aws-sdk');

const app = express();

// Solve CORS Issue
app.use(cors());

// const bodyParser = require('body-parser');

// Connect to Redis
const client = redis.createClient({
    // host: 'redis-server',
    host: '127.0.0.1',
    port: 6379,
});
client.on('error', (err) => {
    console.log("Connetion Error: " + err)
});

// Promisify Redis get functions
const getAsync = promisify(client.get).bind(client);

// Config AWS client to DynamoDB
// specify the credentail profile to use
const credentials = new AWS.SharedIniFileCredentials({profile: 'dynamodb-docker-user'});
AWS.config.credentials = credentials;
AWS.config.update({
    region: "us-west-2",
    endpoint: "http://localhost:8000"
});
var docClient = new AWS.DynamoDB.DocumentClient();


// Serve the static files from the React app

// app.use(express.static(path.join(__dirname, 'client/build')));
app.use('/static', express.static('public'));

// An api endpoint that returns a short list of items
// app.get('/api/indices', (req, res) => {
//     const categories = ['gold_indices_all', 'icon_indices_all'];
//     const indices = {};
//     const promises = []
//     categories.forEach(category => {
//         const promise = getAsync(category);
//         promises.push(promise);
//     });

//     Promise.all(promises).then(results => {
//         for (var i = 0; i < results.length; i ++) {
//             if (results[i]) {
//                 indices[categories[i]] = JSON.parse(results[i]);
//             } else {
//                 console.log('Missing indices for: ' + categories[i]);
//                 res.sendStatus(500);
//                 return;
//             }
//         }
//         res.json(indices);
//     })
//     .catch(err => {
//         console.log(err.toString());
//         res.sendStatus(404);
//     });
// });

app.get('/api/indices', (req, res) => {
    const params = {
        RequestItems: {
            "Indices": {
                Keys: [
                    {
                        type: "gold_indices_all"
                    },
                    {
                        type: "icon_indices_all"
                    }
                ]
            }
        }
    };
    docClient.batchGet(params, (err, data) => {
        if (err) {
            console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
            res.sendStatus(404);
            return;
        }
        const response = {};
        const contents = data["Responses"]["Indices"];
        for (let i=0; i < contents.length; i++) {
            const content = contents[i];
            response[content["type"]] = JSON.parse(content["value"]);
        }
        res.json(response);
    });
});

// app.get('/api/trendy_players', (req, res) => {
//     const categories = ['top_increasing_gold', 'top_decreasing_gold', 'top_increasing_icon', 'top_decreasing_icon'];
//     const players = {};
//     const promises = [];
//     categories.forEach(category => {
//         const promise = getAsync(category);
//         promises.push(promise);
//     });

//     Promise.all(promises).then(results => {
//         for (var i = 0; i < results.length; i++) {
//             if (results[i]) {
//                 players[categories[i]] = JSON.parse(results[i]);
//             } else {
//                 console.log('Missing indices for: ' + categories[i]);
//                 res.sendStatus(500);
//                 return;
//             }
//         }
//         res.json(players);
//     })
//     .catch(err => {
//         console.log(err.toString());
//         res.sendStatus(404);
//     });
// });

app.get('/api/trendy_players', (req, res) => {
    const params = {
        RequestItems: {
            "TrendyPlayers": {
                Keys: [
                    {type: "top_increasing_gold"},
                    {type: "top_decreasing_gold"},
                    {type: "top_increasing_icon"},
                    {type: "top_decreasing_icon"},
                ]
            }
        }
    };
    docClient.batchGet(params, (err, data) => {
        if (err) {
            console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
            res.sendStatus(404);
            return;
        }
        const response = {};
        const contents = data["Responses"]["TrendyPlayers"];
        for (let i = 0; i < contents.length; i++) {
            const content = contents[i];
            response[content["type"]] = JSON.parse(content["players"]);
        }
        res.json(response);
    });
});

// app.get('/api/player/:playerID', (req, res) => {
//     const playerID = req.params.playerID;
//     if (!ObjectID.isValid(playerID)) {
//         console.log('Invalid player id')
//         res.sendStatus(500);
//         return
//     }
//     MongoDBConnection.getClient((err, mongoClient) => {
//         if (err) {
//             console.log('there is err connecting to database');
//             res.sendStatus(500);
//             return;
//         } 
//         if (mongoClient === null) {
//             res.sendStatus(500);
//             console.log('no client is returned');
//             return;
//         } 
//         mongoClient.db('fifaassist').collection('players').findOne({_id: ObjectID(playerID)}, (err, item) => {
//             if (err) {
//                 console.log('there is err querying the database');
//                 res.sendStatus(404);
//                 return;
//             } 
//             if (item === null) {
//                 console.log('cannot find the item')
//                 res.sendStatus(404);
//                 return;
//             }
//             res.json(item);
//         })
//     });
// });

app.get('/api/player/:playerID', (req, res) => {
    const playerID = req.params.playerID;
    const table = "PlayerNoSortKey";
    const params = {
        TableName: table,
        Key: {
            "id": playerID,
        }
    };
    docClient.get(params, (err, data) => {
        if (err) {
            console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
            res.sendStatus(404);
            return;
        }
        // return value format: {"Item": {dict of player info}}
        // res.json(data);
        res.json(data["Item"]);
    });
});

const port = process.env.API_SERVER_PORT || 3001;
const host = '0.0.0.0';
app.listen(port, host);


