const express = require('express');
var AWS = require('aws-sdk');

const app = express();

// Config AWS client to DynamoDB
// specify the credentail profile to use
// const credentials = new AWS.SharedIniFileCredentials({profile: 'dynamodb-docker-user'});
// AWS.config.credentials = credentials;
AWS.config.update({
    region: "us-west-2",
    // endpoint: "http://localhost:8000"
});
var docClient = new AWS.DynamoDB.DocumentClient();


// Serve the static files from the React app

// app.use(express.static(path.join(__dirname, 'client/build')));
app.use('/static', express.static('public'));

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


app.get('/api/player/:playerID', (req, res) => {
    const playerID = req.params.playerID;
    const table = "PlayerV2";
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
        res.json(data["Item"]);
    });
});

const port = process.env.API_SERVER_PORT || 3001;
const host = '0.0.0.0';
app.listen(port, host);


