// require statements
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var mongoose = require("mongoose");
var helmet = require("helmet");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var csrf = require("csurf");
var Employee = require('./models/employee');

// setup csrf protection
var csrfProtection = csrf({cookie: true});

// initialize express
var app = express();

// use statements
app.use(logger("short"));
app.use(helmet.xssFilter());
app.use(express.static(path.join(__dirname + '/public')))
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());
app.use(csrfProtection);
app.use(function(request, response, next) {
    var token = request.csrfToken();
    response.cookie('XSRF-TOKEN', token);
    response.locals.csrfToken = token;
    next();
});

// set statements
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

// http calls
app.get("/", function (req, res){
    res.render("index",{
        message: "Home Page"
    });
});

app.get('/new', function(req, res) {
    res.render('new', {
      message: 'New Emp Page'
    });
  });

  var employee = new Employee({
    firstName: "Becca",
    lastName: "Buechle"
  });

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