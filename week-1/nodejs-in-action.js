/*
============================================
; Title: Assignment 1.5 Modules 
; Author: Professor Itskovich
; Date: 4/26/2020 
; Modified By: Becca Buechle
; Description: Node.js Server Request
;===========================================
*/

//prints header for assignment 
const header = require('../buechle-header.js');
console.log (header.display("Rebecca", "Buechle", "1.5_serverRequest" ));
console.log("\n");

var http = require("http");

function processRequest(req, res) {

var body = "It takes real skills to choke on air, fall up stairs and to trip over nothing. I have those skills.";

    var contentLength = body.length;

    res.writeHead(200, {

        'Content-Length': contentLength,

        'Content-Type': 'text/plain'

    });

    res.end(body);

};

var s = http.createServer(processRequest);

s.listen(8080);