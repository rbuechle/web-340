/*
============================================
; Title: 7.3 – Mocha and Chai
; Author:  Peter Itskovich
; Date: 06 June 2020
; Modified By: Becca Buechle
; Description: Practice with Mocha and Chai
;===========================================
*/



var fruits = require("../buechle-fruits");

var chai = require("chai");

var assert = chai.assert;

//tests
describe("fruits", function() {
  it("should return an array of fruits", function() {
    var f = fruits("Apple,Orange,Mango");
    assert(Array.isArray(f));
  });
});