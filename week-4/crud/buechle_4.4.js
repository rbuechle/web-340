/*
============================================
; Title: Assignment 4.4 cURL
; Author: Professor Krasso
; Date: 20 May 2020
; Modified By: Becca Buechle
; Description: 4.4 cURL
;===========================================
*/

//prints header for assignment
const header = require('../../buechle-header.js');
console.log (header.display("Rebecca", "Buechle", "4.4_cURL"));



var express = require("express");

var http = require("http");

var app = express();


//get request
app.get("/", function (request, response){
    response.send("API invoked as an HTTP GET request")
});

//put request
app.put("/", function(request, response) {
    response.send("API invoked as an HTTP PUT request.");
});

//post request
app.post("/", function(request, response) {
    response.send("API invoked as an HTTP POST request");
});

//delete request
app.delete("/", function(request, response) {
    response.send("API invoked as an HTTP DELETE request");
});

//server starts on port 8080
http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080");
});
