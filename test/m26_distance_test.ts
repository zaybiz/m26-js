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
var M26Distance  = m26.M26Distance;

describe('Class M26Distance:', () => {

  describe('constructor', () => {

    it('constructor should receive a string arg', (done) => {
      var a = new M26Distance('55.5');
      expect(a.val()).to.be.closeTo(55.5, 0.0000000001);
      done();
    });

    it('constructor should receive a number arg', (done) => {
      var a = new M26Distance(39.9);
      expect(a.val()).to.be.closeTo(39.9, 0.0000000001);
      done();
    });

    it('constructor should handle null and undefined', (done) => {
      var n = new M26Distance(null);
      var u = new M26Distance(undefined);
      expect(n.val()).to.be.closeTo(0.0, 0.0000000001);
      expect(u.val()).to.be.closeTo(0.0, 0.0000000001);
      done();
    });
  });

  describe('adding and subtracting', () => {

    it('should add two ages', (done) => {
      var a16 = new M26Distance('16.9');
      var a57 = new M26Distance('57.1');
      var sum = a57.add(a16);
      expect(sum).to.be.closeTo(74.0, 0.0000000001);
      done();
    });

    it('should subtract one age from another', (done) => {
      var a16 = new M26Distance('16.9');
      var a57 = new M26Distance('57.1');
      var diff = a57.subtract(a16);
      expect(diff).to.be.closeTo(40.2, 0.0000000001);
      done();
    });
  });



});

