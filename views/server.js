// require dependencies
var express = require("express");
var mongoose = require("mongoose");
var expressHandlebars = require("express-handlebars");
var bodyParser = ("body-parser");

// set port 
var PORT = process.env.Port || 3000:

var app = express();

// set up router 
var router = express.Router();

// set public folder 
app.use(express.static(_dirname + "/public"));

// Connect Handlebars to our app 
app.engine("handlebars", expressHandlebars({
    defaultLayout: "main"
}));

// Use bodyParser
app.use(bodyParser.urlencoded({
    extended: false
}));


app.use(router);

var db = process.env.MONGODB_uri || "mongodb://localhost/mongoHeadlines";

mongoose.connect(db, function(error){
    if (error) {
        console.log(error);
    }
    else {
        console.log("mongoose connection is successful");
    }
});

// listen on the port 
app.listen(PORT, function(){
    console.log("Listening on port:" + PORT);
});