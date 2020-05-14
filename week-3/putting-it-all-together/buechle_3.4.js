/*
============================================
; Title: Assignment 3.4 Putting it all together
; Author: Professor Itskovich
; Date: 04 May 2020
; Modified By: Becca Buechle
; Description: Putting it all together 
;===========================================
*/

//prints header for assignment 
const header = require('../../buechle-header.js');
console.log (header.display("Rebecca", "Buechle", "3.4_Putting_It_All_Together"));



var express = require("express");

var http = require("http");

var path = require("path");

var logger = require("morgan");

var app =express();

//tells express the views are in the views dir. 
app.set("views", path.resolve(__dirname, "views"));

//tells express to use EJS view engine
app.set("view engine", "ejs");

app.use(logger("short"));

//looking for home/index page responds with message
app.get("/", function(request,response){
    response.render("index",{
        message: "Home Page"
    });
});

//looking for about page responds with message
app.get("/about", function(request,response){
    response.render("about", {
        message: "About Page"
    });
});

//looking for contact page responds with message
app.get("/contact", function(request,response){
    response.render("contact", {
        message: "Contact Us"
    });
});

//looking for products page responds with message
app.get("/products", function(request,response){
    response.render("products", {
        message: "Products Page"
    });
});

//starts server on port 8080
http.createServer(app).listen(8080, function(){
    console.log("Application started on port 8080");
});
