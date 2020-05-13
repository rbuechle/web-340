/*
============================================
; Title: Assignment 3.2 Morgan Logging
; Author: Professor Itskovich
; Date: 04 May 2020
; Modified By: Becca Buechle
; Description: Practice with Logging
;===========================================
*/

//prints header for assignment 
const header = require('../../buechle-header.js');
console.log (header.display("Rebecca", "Buechle", "3.2_Logging"));

var express = require("express");

var http = require("http");

var path = require("path");

var logger = require("morgan");

var app = express();

//tells express the views are in the views dir. 
app.set("views", path.resolve(__dirname, "views")); 

//tells express to use EJS view engine
app.set("view engine", "ejs");

app.use(logger("short"));

app.get("/", function (request, response){
    response.render("index", {
        message:"Learning About Morgan Logging"
          
    });
});

http.createServer(app).listen(8080, function(){
    console.log("Application started on port 8080");
});

