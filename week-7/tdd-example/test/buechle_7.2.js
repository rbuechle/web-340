/*
============================================
; Title: 7.2 TDD in Action
; Author:  Peter Itskovich
; Date: 06 June 2020
; Modified By: Becca Buechle
; Description: Practice with TDD 
;===========================================
*/

var assert = require("assert");

describe("String#split", function() {

    it("should return an array of fruits", function() {

        assert(Array.isArray('Apple,Orange,Mango'.split(',')));

    });

});

function getFruits(str) {

  return str.split(',');

 }

 module.exports = getFruits;