// require statements
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var helmet = require("helmet");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var csrf = require("csurf");
var ejsLint = require('ejs-lint');
var Employee = require('./models/employee');

// initialize express
var app = express();

// setup csrf protection
var csrfProtection = csrf({cookie: true});

// database connection string to MongoDB 
var conn = "mongodb+srv://rbuechle:Seattle06@cluster0-japve.mongodb.net/test?retryWrites=true&w=majority"

mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error: "));
db.once("open", function(){
    console.log("Application connected to MongoDB Atlas")
});

// set statements
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

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

// http calls
app.get("/", function (req, res){
  res.render("index",{
      message: "Home Page"
  });
});

app.get("/list.ejs", function (request, response) {
  Employee.find({}, function(error, employee) {
    if (error) throw error;
    response.render("list", {
      title: "Employees List",
      employee: employee
    });
  });
});

app.get("/new.ejs", function(req, res) {
  res.render('new', {
    message: 'Add a New Employee'
  });
});

app.get("/view/:queryName.ejs", function (request, response) {
  var queryName = request.params.queryName;
  Employee.find({"lastName": queryName}, function(error, employees) {

    if (error) throw error;
      console.log(employees);
    if (employees.length > 0) {
      response.render("view", {
        title: "Employee Record",
        employee: employees
      })
    }
      else {
        response.redirect("/list.ejs")
      }
  });
});

app.post("/process", function(request, response) {
  // console.log(request.body.txtName);
  if (!request.body.txtFirstName || !request.body.txtLastName) {
      response.status(400).send("Missing Required Field");
    return;
  }

 // get the request’s form data
 var firstName = request.body.txtFirstName;
 var lastName = request.body.txtLastName;

// create a employee model
var employee = new Employee({
  firstName: firstName,
  lastName: lastName
});
    
// save
employee.save(function (error) {
  if (error) throw error;
    console.log(firstName + " saved successfully!");
  });
  response.redirect("/");
});

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

//start server
app.set("port", process.env.PORT || 8080);
http.createServer(app).listen(app.get("port"), function() { console.log("Application started on port"  + app.get("port")) });