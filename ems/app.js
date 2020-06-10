var express = require("express");
var http = require("http");
var mongoose = require("mongoose");
var path = require("path");
var logger = require("morgan");
var app = express();
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


app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("short"));
app.use(express.static(path.join(__dirname + '/public')))

app.get("/", function (req, res){
    res.render("index",{
        title: "Home Page"
    });
});

//start server
http.createServer(app).listen(8080, function(){
    console.log("Application started on port 8080");
});

// model
var employee = new Employee({
    firstName: "Becca",
    lastName: "Buechle"
});