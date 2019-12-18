// const { MongoClient } = require('mongodb');

// class MongoDBConnection {
//     static getClient(callback) {
//         if (this.client) {
//             callback(null, this.client);
//         } else {
//             MongoClient.connect(this.url, this.options, (err, client) => {
//                 this.client = client;
//                 callback(err, client);
//             });
//         }
//     }
// }

// MongoDBConnection.client = null;
// MongoDBConnection.url = 'mongodb://localhost:27017';
// MongoDBConnection.options = {useUnifiedTopology: true};

// exports.MongoDBConnection = MongoDBConnection;