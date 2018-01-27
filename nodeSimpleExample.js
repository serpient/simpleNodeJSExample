// MONGODB_URI => mongodb://heroku_rvlt8l4c:2khaoveg93q4afkl21cvtlo7g5@ds117148.mlab.com:17148/heroku_rvlt8l4c

var MongoClient = require('mongodb').MongoClient;

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

MongoClient.connect(uri, function (err, client) {
    if (err) throw err;
    console.log("Successfully connected to server");

    const testDB = client.db('test');
    console.log(testDB);
    testDB.insertMany(seedData);
    // testDB.forEach(function(doc) {
    //     console.log(doc.text);
    // });
    client.close(function (err) {
        if (err) throw err;
    });


    console.log("Inserted and printed new data");
})