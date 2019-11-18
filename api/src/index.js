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



const port = process.env.PORT || 3001;
app.listen(port);
