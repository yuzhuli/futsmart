const express = require('express');
const path = require('path');
const cors = require('cors');
const redis = require('redis');

const app = express();
app.use(cors());
// const bodyParser = require('body-parser');

const client = redis.createClient({
    host: 'redis-server',
    // host: '127.0.0.1',
    port: 6379,
});

client.on('error', (err) => {
    console.log("Connetion Error: " + err)
});

const goldSevenStr = [
        ['Mon1', 10],
        ['test', 5],
        ['Mon2', 30],
        ['test', 5],
        ['Tue1', 20],
        ['test', 5],
        ['Tue2', 60],
        ['test', 5],
        ['Wed1', 30],
        ['test', 5],
        ['Wed2', 40],
        ['test', 5],
        ['Thurs1', 40],
        ['test', 5],
        ['Thurs2', 50],
        ['test', 5],
        ['Fri1', 50],
        ['test', 5],
        ['Fri2', 40],
        ['test', 5],
        ['Sat1', 60],
        ['test', 5],
        ['Sat2', 30],
        ['test', 5],
        ['Sun1', 20],
        ['test', 5],
        ['Sun2', 40],
        ['test', 5],
    ].toString();
    
    const goldAllStr = [
        ['Jan', 10],
        ['test', 5],
        ['Feb', 20],
        ['test', 5],
        ['Mar', 30],
        ['test', 5],
        ['Apr', 40],
        ['test', 5],
        ['May', 50],
        ['test', 5],
        ['Jun', 60],
        ['test', 5],
        ['Jul', 30],
        ['test', 5],
        ['Aug', 40],
        ['test', 5],
        ['Sep', 50],
        ['test', 5],
        ['Oct', 20],
        ['test', 5],
        ['Nov', 10],
        ['test', 5],
        ['Dec', 25]
    ].toString();
    
    
    const iconSevenStr = [
        ['Mon1', 60],
        ['test', 5],
        ['Mon2', 40],
        ['test', 5],
        ['Tue1', 40],
        ['test', 5],
        ['Tue2', 30],
        ['test', 5],
        ['Wed1', 50],
        ['test', 5],
        ['Wed2', 40],
        ['test', 5],
        ['Thurs1', 20],
        ['test', 5],
        ['Thurs2', 60],
        ['test', 5],
        ['Fri1', 50],
        ['test', 5],
        ['Fri2', 45],
        ['test', 5],
        ['Sat1', 55],
        ['test', 5],
        ['Sat2', 35],
        ['test', 5],
        ['Sun1', 30],
        ['test', 5],
        ['Sun2', 35],
        ['test', 5],
    ].toString();
    
    const iconAllStr = [
        ['Jan', 25],
        ['test', 5],
        ['Feb', 30],
        ['test', 5],
        ['Mar', 30],
        ['test', 5],
        ['Apr', 40],
        ['test', 5],
        ['May', 50],
        ['test', 5],
        ['Jun', 55],
        ['test', 5],
        ['Jul', 30],
        ['test', 5],
        ['Aug', 45],
        ['test', 5],
        ['Sep', 40],
        ['test', 5],
        ['Oct', 60],
        ['test', 5],
        ['Nov', 40],
        ['test', 5],
        ['Dec', 35]
    ].toString();
    
    const informSevenStr = [
        ['Mon1', 10],
        ['test', 30],
        ['Mon2', 30],
        ['test', 30],
        ['Tue1', 20],
        ['test', 30],
        ['Tue2', 60],
        ['test', 30],
        ['Wed1', 30],
        ['test', 30],
        ['Wed2', 40],
        ['test', 30],
        ['Thurs1', 40],
        ['test', 30],
        ['Thurs2', 50],
        ['test', 20],
        ['Fri1', 50],
        ['test', 20],
        ['Fri2', 40],
        ['test', 20],
        ['Sat1', 60],
        ['test', 20],
        ['Sat2', 30],
        ['test', 20],
        ['Sun1', 20],
        ['test', 20],
        ['Sun2', 40],
        ['test', 20],
    ].toString();
    
    const informAllStr = [
        ['Jan', 10],
        ['test', 40],
        ['Feb', 20],
        ['test', 40],
        ['Mar', 30],
        ['test', 40],
        ['Apr', 40],
        ['test', 40],
        ['May', 50],
        ['test', 40],
        ['Jun', 60],
        ['test', 40],
        ['Jul', 30],
        ['test', 20],
        ['Aug', 40],
        ['test', 20],
        ['Sep', 50],
        ['test', 20],
        ['Oct', 20],
        ['test', 20],
        ['Nov', 10],
        ['test', 20],
        ['Dec', 25]
    ].toString();
    

client.set('goldSeven', goldSevenStr);
client.set('goldAll', goldAllStr);

client.set('iconSeven', iconSevenStr);
client.set('iconAll', iconAllStr);

client.set('informSeven', informSevenStr);
client.set('informAll', informAllStr);


// Serve the static files from the React app
// app.use(express.static(path.join(__dirname, 'client/build')));

// An api endpoint that returns a short list of items
app.get('/index', (req, res) => {
    const indices = {}
    client.get('goldSeven', (error, goldSeven) => {
        if (goldSeven) {
            indices['goldSeven'] = goldSeven;
        } else {
            console.log('Error: ', error);
        }
    });

    client.get('goldAll', (error, goldAll) => {
        if (goldAll) {
            indices['goldAll'] = goldAll;
        } else {
            console.log('Error: ', error);
        }
    });

    client.get('iconSeven', (error, iconSeven) => {
        if (iconSeven) {
            indices['iconSeven'] = iconSeven;
        } else {
            console.log('Error: ', error);
        }
    });

    client.get('iconAll', (error, iconAll) => {
        if (iconAll) {
            indices['iconAll'] = iconAll;
        } else {
            console.log('Error: ', error);
        }
    });


});

// app.get('/index/gold', (req, res) => {

//     if (req.query.type == 'sevendays') {
//         client.get('goldSeven', (error, sevenDaysIndices) => {
//             if (sevenDaysIndices) {
//                 res.json(sevenDaysIndices);
//             } else if (sevenDaysIndices == null) {
//                 console.log('return null');
//             } else {
//                 console.log(error);
//                 res.json(error);
//             }
//         });
//     }
//     if (req.query.type == 'all') {
//         client.get('goldAll', (error, allIndices) => {
//             if (allIndices) {
//                 res.json(allIndices);
//             } else {
//                 console.log(error);
//                 res.json(error);
//             }
//         });
//     }
// });

// app.get('/index/icon', (req, res) => {
//     if (req.query.type == 'sevendays') {
//         client.get('iconSeven', (error, sevenDaysIndices) => {
//             if (sevenDaysIndices) {
//                 res.json(sevenDaysIndices);
//             } else {
//                 console.log(error);
//                 res.json(error);
//             }
//         });
//     }
//     if (req.query.type == 'all') {
//         client.get('iconAll', (error, allIndices) => {
//             if (allIndices) {
//                 res.json(allIndices);
//             } else {
//                 console.log(error);
//                 res.json(error);
//             }
//         });
//     }
// });

app.get('/index/inform', (req, res) => {
    if (req.query.type == 'sevendays') {
        client.get('informSeven', (error, sevenDaysIndices) => {
            if (sevenDaysIndices) {
                res.json(sevenDaysIndices);
            } else {
                console.log(error);
                res.json(error);
            }
        });
    }
    if (req.query.type == 'all') {
        client.get('informAll', (error, allIndices) => {
            if (allIndices) {
                res.json(allIndices);
            } else {
                console.log(error);
                res.json(error);
            }
        });
    }
});

const port = process.env.PORT || 3001;
const host = '0.0.0.0';
app.listen(port, host);
