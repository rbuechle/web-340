/*
============================================
; Title: Assignment 5.2 EJS Templates
; Author: Peter Itskovich 
; Date: 27 May 2020
; Modified By: Becca Buechle
; Description: EJS Templates
;===========================================
*/

//prints header for assignment 
const header = require('../../buechle-header.js');
console.log (header.display("Rebecca", "Buechle", "5.2_EJS_Templates"));

//requires these
var express = require("express");
var http = require("http");
var path = require("path");

// app functions
app=express();
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

//names array
var dogs=[
    "Jack",
    "Max",
    "Sammy",
    "Riley",
];

//routes
app.get("/", function(req, res){
    res.render("index",{
        names: dogs
    })
});

http.createServer(app).listen(8080, function(){
    console.log("application started on port 8080");
});

