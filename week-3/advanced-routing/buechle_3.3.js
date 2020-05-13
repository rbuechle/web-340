/*
============================================
; Title: Assignment 3.3 Advanced Routing
; Author: Professor Itskovich
; Date: 04 May 2020
; Modified By: Becca Buechle
; Description: Advanced Routing Practice 
;===========================================
*/

//prints header for assignment 
const header = require('../../buechle-header.js');
console.log (header.display("Rebecca", "Buechle", "3.3_Advanced_Routing"));



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

app.get("/:employeeId", function(request, response) {
    var employeeId = parseInt(request.params.employeeId, 10);
    response.render("index", {
        employeeId: employeeId
    })
});

http.createServer(app).listen(8080, function() {
    console.log("Application stated on port 8080");
});

