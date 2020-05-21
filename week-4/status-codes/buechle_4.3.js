/*
============================================
; Title: Assignment 4.3 – HTTP Status Codes
; Author: Professor Itskovich
; Date: 20 May 2020
; Modified By: Becca Buechle
; Description: 4.3 – HTTP Status Codes
;===========================================
*/

//prints header for assignment 
const header = require('../../buechle-header.js');
console.log (header.display("Rebecca", "Buechle", "4.3_HTTP_Status_Codes"));




var express = require("express");

var http = require("http");

var app = express();

//get request for 404
app.get("/not-found", function(request, response){
    response.status(404);
    response.json({
        error: "Resource not found"
    })
});

//get request for 200
app.get("/ok", function(request, response){
    response.status(200);
    response.json({
        message: "Error 200 - Response Successful."
    })
});

//get request for 501
app.get("/not-implemented", function(request, response){
    response.status(501);
    response.json({
        error: "Error 501 - Not Implemented."
    })
});

//server starts on port 8080
http.createServer(app).listen(8080, function(){
    console.log("application started on port 8080.");
});