// require statements
var express = require("express");
var http = require("http");
var logger = require("morgan");
var helmet = require("helmet");
var path = require("path");
var mongoose = require("mongoose");

// initialize express
var app = express();

// use statements
app.use(logger("short"));
app.use(helmet.xssFilter());
app.use(express.static(path.join(__dirname + '/public')))

// set statements
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

// http calls
app.get("/", function (req, res){
    res.render("index",{
        message: "Home Page"
    });
});


var Employee = require('./models/employee');

// database connection string to MongoDB 
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


//start server
http.createServer(app).listen(8080, function(){
    console.log("Application started on port 8080");
});