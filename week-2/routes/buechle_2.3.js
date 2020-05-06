/*
============================================
; Title: Assignment 2.3 Routes
; Author: Professor Itskovich
; Date: 04 May 2020
; Modified By: Becca Buechle
; Description: Practice with Routes
;===========================================
*/

//prints header for assignment 
const header = require('../../buechle-header.js');
console.log (header.display("Rebecca", "Buechle", "2.3_Routes"));

var express = require("express");

var http = require("http");

var app = express();

app.get("/", function(request, response){
    response.end("welcome to the homepage!");
});

app.get("/about", function(request, response){
    response.end("Welcome to the about page!");
});

app.get("/contact", function(request, response){
    response.end("Welcome to the contact page!");
});

app.use(function(request, response){
    response.statusCode = 404;
    response.end("404");
});

http.createServer(app).listen(8080);