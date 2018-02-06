// https://www.tutorialspoint.com/nodejs/nodejs_express_framework.htm

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// uploads files = https://github.com/expressjs/multer
var multer = require('multer');
// fs = file save
var fs = require("fs");


// uses public folder to find any multimedia links
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/tmp/'}).single('photo'));

app.get('/index.htm', function(req,res) {
    res.sendFile(__dirname + "/" + "index.htm");
})
// uploading files
app.post('/file_upload', function(req, res, next) {
    console.log(req.file.originalname);
    //console.log(req.file.path);
    // var file = __dirname + "/" + req.file.name;

    // fs.readFile(req.file.path, function(err, data) {
    //     fs.writeFile(file, data, function(err) {
    //         if (err) {
    //             console.log(err);
    //         } else {
    //             response = {
    //                 message:"File uploaded successfully",
    //                 filename:req.file.originalname
    //             };
    //         }
    //         console.log(response);
    //         res.end(JSON.stringify(response));
    //     });
    // });
});


// POST METHOD

// Create application/x-www-form-urlencoded parser
//var urlencodedParser = bodyParser.urlencoded({extended: false})

// app.get('/index.htm', function(req,res) {
//     res.sendFile(__dirname + "/" + "index.htm");
// })

// app.post('/process_post', urlencodedParser, function(req, res) {
//     //Prepare output in JSON format
//     response = {
//         first_name:req.body.first_name,
//         last_name:req.body.last_name
//     }
//     console.log(response);
//     res.end(JSON.stringify(response));
// })




// GET METHOD

// app.get('/index.htm', function(req, res) {
//     res.sendFile(__dirname + "/" + "index.htm");
// })

// app.get('/process_get', function(req,res) {
//     // Prepare output in JSON format
//     response = {
//         first_name:req.query.first_name,
//         last_name:req.query.last_name
//     };
//     console.log(response);
//     res.end(JSON.stringify(response));
// })




// app.get('/', function (req, res) {
//     console.log("Got a GET request for the homepage");
//     res.send('Hello GET');
// });

// app.post('/', function (req, res) {
//     console.log("Got a POST request for the homepage");
//     res.send('Hello POST');
// })

// app.delete('/del_user', function (req, res) {
//     console.log("Got a DELETE request for /del_user");
//     res.send("Hello DELETE");
// });

// app.get('/list_user', function (req, res) {
//     console.log("Got a GET request for /list_user");
//     res.send("Page Listing");
// })

// app.get('/ab*cd', function (req, res) {
//     console.log("Got a GET request for /ab*cd");
//     res.send("Page Pattern Match");
// })

var server = app.listen(8081, function() {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})
