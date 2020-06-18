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
      message: 'Add a New Employee'
    });
  });

  var employee = new Employee({
    firstName: "Becca",
    lastName: "Buechle"
  });


  app.post(‘/process’, function (req, res) {
    console.log(req.body.txtFirstName, req.body.txtLastName);
    if (!req.body.txtFirstName) {
      res.status(400).send(“Entries must have a name”);
      return;
    }
    // get the request’s form data
    var firstName = req.body.txtFirstName;
    var lastName = req.body.txtLastName;
    console.log(firstName, lastName);
    // create a employee model
    var employee = new Employee({
      firstName: firstName,
      lastName: lastName
    });
    // save
    employee.save(function (error) {
      if (error) throw error;
      console.log(firstName + ” saved successfully!“);
    });
    res.redirect(‘/’);
  });
  




// database connection string to MongoDB 
var conn = "mongodb+srv://rbuechle:Seattle06@cluster0-japve.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(conn, {
    promiseLibrary: require('bluebird'),
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  }).then(() => {
    console.log('Connection to the database instance was successful');
  }).catch(err => {
    console.log(`MongoDB Error: ${err.message}`);
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