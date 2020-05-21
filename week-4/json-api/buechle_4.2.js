/*
============================================
; Title: Assignment 4.2 JSON APIs
; Author: Professor Itskovich
; Date: 20 May 2020
; Modified By: Becca Buechle
; Description: 4.2 JSON APIs 
;===========================================
*/


//prints header for assignment 
const header = require('../../buechle-header.js');
console.log (header.display("Rebecca", "Buechle", "4.3_JSON_APIs"));

var express = require("express");

var http = require("http");

var app = express();

//customer get
app.get("/customer/:id", function (request, response){
    
    var id = parseInt(request.params.id, 10);
    
    response.json({
        firstName: "Becca",
        lastName: "Buechle",
        employeeId: 1234
    });
});
//starts server on port 8080
http.createServer(app).listen(8080, function(){
    console.log("Application started on port 8080");
});