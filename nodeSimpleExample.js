// MONGODB_URI => mongodb://heroku_rvlt8l4c:2khaoveg93q4afkl21cvtlo7g5@ds117148.mlab.com:17148/heroku_rvlt8l4c
var MongoClient = require('mongodb').MongoClient;
const util = require('util');
var Db = require('mongodb').Db;
// Create seed data
var seedData = [
    {
        text: "Hello World"
    },
    {
        text: "My name is Francesca"
    }
]

var uri = 'mongodb://heroku_rvlt8l4c:2khaoveg93q4afkl21cvtlo7g5@ds117148.mlab.com:17148/heroku_rvlt8l4c';
const dbName = 'heroku_rvlt8l4c';

MongoClient.connect(uri, function (err, client) {
    if (err) throw err;
    console.log("Successfully connected to server");

    var db = client.db(dbName);

    db.collection('hello').insert(seedData);

    db.collection('hello').find().forEach( function(doc) {
        console.log(doc.text);
    });

    client.close(function (err) {
        if (err) throw err;
    });


    console.log("Inserted and printed new data");
})


