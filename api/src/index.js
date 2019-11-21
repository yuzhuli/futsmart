const express = require('express');
const path = require('path');
const cors = require('cors');
const redis = require('redis');

const app = express();
app.use(cors());
// const bodyParser = require('body-parser');

const client = redis.createClient({
    host: 'redis-server',
    port: 6379,
});

client.on('error', (err) => {
    console.log("Error: " + err)
});

// client.set('iconSeven', iconSevenStr);
// client.set('iconAll', iconAllStr);

// client.set('informSeven', informSevenStr);
// client.set('informAll', informAllStr);


// Serve the static files from the React app
// app.use(express.static(path.join(__dirname, 'client/build')));

// An api endpoint that returns a short list of items
app.get('/index/gold', (req, res) => {

    if (req.query.type == 'sevendays') {
        client.get('goldSeven', (error, sevenDaysIndices) => {
            if (sevenDaysIndices) {
                res.json(sevenDaysIndices);
            } else {
                console.log(error);
                res.json('error');
            }
        });
    }
    if (req.query.type == 'all') {
        client.get('goldAll', (error, allIndices) => {
            if (allIndices) {
                res.json(allIndices);
            } else {
                console.log(error);
                res.json('error');
            }
        });
    }
});

app.get('/index/icon', (req, res) => {
    if (req.query.type == 'sevendays') {
        client.get('iconSeven', (error, sevenDaysIndices) => {
            if (sevenDaysIndices) {
                res.json(sevenDaysIndices);
            } else {
                console.log(error);
                res.json('error');
            }
        });
    }
    if (req.query.type == 'all') {
        client.get('iconAll', (error, allIndices) => {
            if (allIndices) {
                res.json(allIndices);
            } else {
                console.log(error);
                res.json('error');
            }
        });
    }
});

app.get('/index/inform', (req, res) => {
    if (req.query.type == 'sevendays') {
        client.get('informSeven', (error, sevenDaysIndices) => {
            if (sevenDaysIndices) {
                res.json(sevenDaysIndices);
            } else {
                console.log(error);
                res.json('error');
            }
        });
    }
    if (req.query.type == 'all') {
        client.get('informAll', (error, allIndices) => {
            if (allIndices) {
                res.json(allIndices);
            } else {
                console.log(error);
                res.json('error');
            }
        });
    }
});

const port = process.env.PORT || 3001;
const host = '0.0.0.0'
app.listen(port, host);
