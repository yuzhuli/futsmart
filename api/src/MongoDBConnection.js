const { MongoClient } = require('mongodb');

class MongoDBConnection {
    static getClient(callback) {
        if (this.client) {
            callback(null, client);
        } else {
            MongoClient.connect(this.url, this.options, (err, client) => {
                MongoDBConnection.client = client;
                callback(err, client);
            });
        }
    }
}

MongoDBConnection.client = null;
MongoDBConnection.url = 'mongodb://localhost:27017';
MongoDBConnection.options = {};

exports.MongoDBConnection = MongoDBConnection;