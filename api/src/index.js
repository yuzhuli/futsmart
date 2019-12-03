const express = require('express');
// const path = require('path');
const cors = require('cors');
const redis = require('redis');

const app = express();
app.use(cors());
app.use('/static', express.static('public'));
// const bodyParser = require('body-parser');

const client = redis.createClient({
    // host: 'redis-server',
    host: '127.0.0.1',
    port: 6379,
});

client.on('error', (err) => {
    console.log("Connetion Error: " + err)
});

const {promisify} = require('util');
const getAsync = promisify(client.get).bind(client);

// Serve the static files from the React app
// app.use(express.static(path.join(__dirname, 'client/build')));

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

const port = process.env.PORT || 3001;
const host = '0.0.0.0';
app.listen(port, host);


