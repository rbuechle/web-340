/*
============================================
; Title: Assignment 2.4 Views
; Author: Professor Itskovich
; Date: 04 May 2020
; Modified By: Becca Buechle
; Description: Practice with Routes
;===========================================
*/

//prints header for assignment 
const header = require('../../buechle-header.js');
console.log (header.display("Rebecca", "Buechle", "2.4_Views"));

var http = require("http");

var express = require("express");

var path = require("path");

var app = express();

// Tells Express the views are in the 'views' directory
app.set("views", path.resolve(__dirname, "views"));

//Tells Express to use the EJS view engine
app.set("view engine", "ejs"); 

app.get("/", function(request, response) {
  response.render("index.ejs", { 
    firstName: "Becca",
    lastName: "Buechle",
    address: "1 Pine Street"
  });
});

http.createServer(app).listen(8080, function(){
    console.log("EJS-Views app started on port 8080.");
});

 