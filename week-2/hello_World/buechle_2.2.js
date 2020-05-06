/*
============================================
; Title: Assignment 
; Author: Professor Itskovich
; Date: 04 May 2020
; Modified By: Becca Buechle
; Description: Hello World with Express
;===========================================
*/

//prints header for assignment 
const header = require('../../buechle-header.js');
console.log (header.display("Rebecca", "Buechle", "2.2_helloWorld_express"));



//requiring the express module
var express = require("express");

//allows node to transfer data over HTTP
var http = require("http");

//starts the new express app
var app = express();

app.use(function(request, response) {

    console.log("In comes a request to:" + request.url);
    response.end("Hello World");

});

//starts the server on port 8080
http.createServer(app).listen(8080);