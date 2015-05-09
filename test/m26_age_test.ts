/// <reference path="../typings/mocha/mocha.d.ts" />
/// <reference path="../typings/chai/chai.d.ts" />
/// <reference path="../lib/m26.d.ts" />

// See http://dinozafirakos.com/2014/07/21/testing-with-mocha-chai-and-typescript/
//
// $ tsc -d --module commonjs test/m26_age_test.ts
// $ mocha

import chai = require('chai');
import m26  = require('../lib/m26');

var expect = chai.expect;
var M26Age  = m26.M26Age;

describe('User Model Unit Tests:', () => {

    describe('2 + 4', () => {
        it('should be 6', (done) => {
            expect(2 + 4).to.equals(6);
            done();
        });

        it('should not be 7', (done) => {
            expect(2 + 4).to.not.equals(7);
            done();
        });
    });
});

describe('Class M26Age:', () => {

  describe('constructor', () => {
    it ('should cast a string to a number', (done) => {
      var a = new M26Age('55.5');
      expect(a.val()).to.be.closeTo(55.5, 0.0000000001);
      done();
    });

  });
});
