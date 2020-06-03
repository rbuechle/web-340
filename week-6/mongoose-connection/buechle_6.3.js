//require
var express = require("express");
var http = require("http");
var logger = require("morgan");
var mongoose = require("mongoose");


var mongoDB = "mongodb+srv://rbuechle:Seattle06@cluster0-japve.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(mongoDB,{
    useMongoClient: true
});

mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error: "));
db.once("open", function(){
    console.log("Application connected to MongoDB Atlas")
});

var app = express();
app.use(logger("dev"));

http.createServer(app).listen(8080, function(){
    console.log("Application started and listening on port 8080");
});