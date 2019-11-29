const express = require('express');
// const path = require('path');
const cors = require('cors');
const redis = require('redis');

const app = express();
app.use(cors());
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
app.get('/indices', (req, res) => {
    const categories = ['goldSeven', 'goldAll', 'iconSeven', 'iconAll', 'informSeven', 'informAll'];
    const indices = {};
    const promises = []
    categories.map(category => {
        const promise = getAsync(category);
        promises.push(promise);
    });

    Promise.all(promises).then(results => {
        for (var i = 0; i < categories.length; i ++) {
            indices[categories[i]] = results[i];
        }
        console.log('handled all indices');
        res.json(indices);
    });
});


const port = process.env.PORT || 3001;
const host = '0.0.0.0';
app.listen(port, host);


