/*
============================================
; Title: Assignment 5.3 Pug Templates
; Author: Peter Itskovich
; Date: 27 May 2020
; Modified By: Becca Buechle
; Description: Pug Templates
;===========================================
*/

//prints header for assignment
const header = require('../../buechle-header.js');
console.log (header.display("Rebecca", "Buechle", "5.3_Pug_Templates"));

// require statements
var express = require("express");
var http = require("http");
var pug = require("pug");
var path = require("path");

//apps
var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "pug");

//routes
app.get("/", function(request, response){
    
    response.render("index", {

        message:"Someone told me, Only those who care about you, can hear you when you're quiet."

    });
});

//starting server on port 
http.createServer(app).listen(8080, function(){
    console.log("Application started on port 8080!");

});