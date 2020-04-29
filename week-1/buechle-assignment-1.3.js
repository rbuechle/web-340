/*
============================================
; Title: Assignment 1.3 Modules 
; Author: Professor Itskovich
; Date: 4/26/2020 
; Modified By: Becca Buechle
; Description: Modules Practice
;===========================================
*/

//prints header for assignment 
const header = require('../buechle-header.js');
console.log (header.display("Rebecca", "Buechle", "1.3_Modules" ));
console.log("\n");

var url = require("url");

var parsedURL = url.parse("https://github.com/rbuechle?name=Becca");

console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);