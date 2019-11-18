const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const bodyParser = require('body-parser');
app.use(cors());

// Serve the static files from the React app
// app.use(express.static(path.join(__dirname, 'client/build')));

// An api endpoint that returns a short list of items
// app.get('/api/getList', (req,res) => {
//     var list = ["item1", "item2", "item3"];
//     res.json(list);
//     console.log('Sent list of items');
// });

app.get('/index/gold', (req, res) => {
    var sevenDaysIndices = [
        ['Mon1', 10],
        ['test', 5],
        ['Mon2', 30],
        ['test', 5],
        ['Tue1', 20],
        ['test', 5],
        ['Tue2', 60],
        ['test', 5],
        ['Wed1', 30],
        ['test', 5],
        ['Wed2', 40],
        ['test', 5],
        ['Thurs1', 40],
        ['test', 5],
        ['Thurs2', 50],
        ['test', 5],
        ['Fri1', 50],
        ['test', 5],
        ['Fri2', 40],
        ['test', 5],
        ['Sat1', 60],
        ['test', 5],
        ['Sat2', 30],
        ['test', 5],
        ['Sun1', 20],
        ['test', 5],
        ['Sun2', 40],
        ['test', 5],
    ];
    const allIndices = [
        ['Jan', 10],
        ['test', 5],
        ['Feb', 20],
        ['test', 5],
        ['Mar', 30],
        ['test', 5],
        ['Apr', 40],
        ['test', 5],
        ['May', 50],
        ['test', 5],
        ['Jun', 60],
        ['test', 5],
        ['Jul', 30],
        ['test', 5],
        ['Aug', 40],
        ['test', 5],
        ['Sep', 50],
        ['test', 5],
        ['Oct', 20],
        ['test', 5],
        ['Nov', 10],
        ['test', 5],
        ['Dec', 25]
    ];
    if (req.query.type == 'sevendays') {
        res.json(sevenDaysIndices);
    }
    if (req.query.type == 'all') {
        res.json(allIndices);
    }
});

app.get('/index/icon', (req, res) => {
    var sevenDaysIndices = [
        ['Mon1', 60],
        ['test', 5],
        ['Mon2', 40],
        ['test', 5],
        ['Tue1', 40],
        ['test', 5],
        ['Tue2', 30],
        ['test', 5],
        ['Wed1', 50],
        ['test', 5],
        ['Wed2', 40],
        ['test', 5],
        ['Thurs1', 20],
        ['test', 5],
        ['Thurs2', 60],
        ['test', 5],
        ['Fri1', 50],
        ['test', 5],
        ['Fri2', 45],
        ['test', 5],
        ['Sat1', 55],
        ['test', 5],
        ['Sat2', 35],
        ['test', 5],
        ['Sun1', 30],
        ['test', 5],
        ['Sun2', 35],
        ['test', 5],
    ];
    const allIndices = [
        ['Jan', 25],
        ['test', 5],
        ['Feb', 30],
        ['test', 5],
        ['Mar', 30],
        ['test', 5],
        ['Apr', 40],
        ['test', 5],
        ['May', 50],
        ['test', 5],
        ['Jun', 55],
        ['test', 5],
        ['Jul', 30],
        ['test', 5],
        ['Aug', 45],
        ['test', 5],
        ['Sep', 40],
        ['test', 5],
        ['Oct', 60],
        ['test', 5],
        ['Nov', 40],
        ['test', 5],
        ['Dec', 35]
    ];
    if (req.query.type == 'sevendays') {
        res.json(sevenDaysIndices);
    }
    if (req.query.type == 'all') {
        res.json(allIndices);
    }
});

app.get('/index/inform', (req, res) => {
    var sevenDaysIndices = [
        ['Mon1', 10],
        ['test', 30],
        ['Mon2', 30],
        ['test', 30],
        ['Tue1', 20],
        ['test', 30],
        ['Tue2', 60],
        ['test', 30],
        ['Wed1', 30],
        ['test', 30],
        ['Wed2', 40],
        ['test', 30],
        ['Thurs1', 40],
        ['test', 30],
        ['Thurs2', 50],
        ['test', 20],
        ['Fri1', 50],
        ['test', 20],
        ['Fri2', 40],
        ['test', 20],
        ['Sat1', 60],
        ['test', 20],
        ['Sat2', 30],
        ['test', 20],
        ['Sun1', 20],
        ['test', 20],
        ['Sun2', 40],
        ['test', 20],
    ];
    const allIndices = [
        ['Jan', 10],
        ['test', 40],
        ['Feb', 20],
        ['test', 40],
        ['Mar', 30],
        ['test', 40],
        ['Apr', 40],
        ['test', 40],
        ['May', 50],
        ['test', 40],
        ['Jun', 60],
        ['test', 40],
        ['Jul', 30],
        ['test', 20],
        ['Aug', 40],
        ['test', 20],
        ['Sep', 50],
        ['test', 20],
        ['Oct', 20],
        ['test', 20],
        ['Nov', 10],
        ['test', 20],
        ['Dec', 25]
    ];
    if (req.query.type == 'sevendays') {
        res.json(sevenDaysIndices);
    }
    if (req.query.type == 'all') {
        res.json(allIndices);
    }
});

const port = process.env.PORT || 3001;
app.listen(port);
