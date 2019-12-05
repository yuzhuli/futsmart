const express = require('express');
const cors = require('cors');
const redis = require('redis');
const {promisify} = require('util');
const ObjectID = require('mongodb').ObjectID;
const {MongoDBConnection} = require('./MongoDBConnection');

const app = express();

// Solve CORS Issue
app.use(cors());

// Serve the static files from the React app
// const path = require('path');
// app.use(express.static(path.join(__dirname, 'client/build')));
app.use('/static', express.static('public'));

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

// An api endpoint that returns a short list of items
app.get('/api/indices', (req, res) => {
    const categories = ['gold_indices_all', 'icon_indices_all'];
    const indices = {};
    const promises = []
    categories.map(category => {
        const promise = getAsync(category);
        promises.push(promise);
    });

    Promise.all(promises).then(results => {
        for (var i = 0; i < results.length; i ++) {
            if (results[i]) {
                indices[categories[i]] = JSON.parse(results[i]);
            } else {
                throw new Error('Missing indices for: ' + categories[i]);
            }
        }
        res.json(indices);
    })
    .catch(err => {
        throw new Error(err.toString());
    });
});

app.get('/api/trendy_players', (req, res) => {
    const categories = ['top_increasing_gold', 'top_decreasing_gold', 'top_increasing_icon', 'top_decreasing_icon'];
    const players = {};
    const promises = [];
    categories.map(category => {
        const promise = getAsync(category);
        promises.push(promise);
    });

    Promise.all(promises).then(results => {
        for (var i = 0; i < results.length; i++) {
            if (results[i]) {
                players[categories[i]] = JSON.parse(results[i]);
            } else {
                throw new Error('Missing indices for: ' + categories[i]);
            }
        }
        res.json(players);
    })
    .catch(err => {
        throw new Error(err.toString());
    });
});

app.get('/api/profile/:playerID', (req, res) => {
    const playerID = req.params.playerID;
    if (!ObjectID.isValid(playerID)) {
        throw new Error('Invalid player id');
    }

    MongoDBConnection.getClient((err, mongoClient) => {
        if (err) {
            res.sendStatus(500);
            // TODO: add logging
        }
        mongoClient.db('fifaassist').collection('players').findOne({_id: ObjectID(playerID)}, (err, item) => {
            if (err !== null || item === null) {
                res.sendStatus(404);
            } else {
                res.json(item);
            }
        });
    });
});


const port = process.env.PORT || 3001;
const host = '0.0.0.0';
app.listen(port, host);


