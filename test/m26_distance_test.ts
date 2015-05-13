/// <reference path="../typings/mocha/mocha.d.ts" />
/// <reference path="../typings/chai/chai.d.ts" />
/// <reference path="../lib/m26-js.d.ts" />

import chai = require('chai');
import m26  = require('../lib/m26-js');

var expect = chai.expect;
var M26Constants = m26.M26Constants;
var M26Distance  = m26.M26Distance;

describe('Class M26Distance:', () => {

  describe('constructor and conversion', () => {

    it('constructor should assume miles', (done) => {
      var d = new M26Distance(26.2);
      expect(d.value).to.be.closeTo(26.2, 0.0000000001);
      expect(d.as_miles()).to.be.closeTo(26.2, 0.0000000001);
      expect(d.as_kilometers()).to.be.closeTo(42.1648128, 0.0000000001);
      expect(d.as_yards()).to.be.closeTo(46112.0, 0.0000000001);
      done();
    });

    it('constructor should be coerced to miles', (done) => {
      var d = new M26Distance(99, 'parsec');
      expect(d.value).to.be.closeTo(99.0, 0.0000000001);
      expect(d.as_miles()).to.be.closeTo(99.0, 0.0000000001);
      expect(d.uom).to.be.eql(M26Constants.UOM_MILES);
      done();
    });

    it('constructor, with miles', (done) => {
      var d = new M26Distance(26.2, M26Constants.UOM_MILES);
      expect(d.value).to.be.closeTo(26.2, 0.0000000001);
      expect(d.as_miles()).to.be.closeTo(26.2, 0.0000000001);
      expect(d.as_kilometers()).to.be.closeTo(42.1648128, 0.0000000001);
      expect(d.as_yards()).to.be.closeTo(46112.0, 0.0000000001);
      done();
    });

    it('constructor, with kilometers', (done) => {
      var d = new M26Distance(10.0, M26Constants.UOM_KILOMETERS);
      expect(d.value).to.be.closeTo(10.0, 0.0000000001);
      expect(d.as_miles()).to.be.closeTo(6.2137119223733395, 0.0000000001);
      expect(d.as_kilometers()).to.be.closeTo(10.0, 0.0000000001);
      expect(d.as_yards()).to.be.closeTo(10936.132983377078, 0.0000000001);
      done();
    });

    it('constructor, with yards', (done) => {
      var d = new M26Distance(1800.0, M26Constants.UOM_YARDS);
      expect(d.value).to.be.closeTo(1800.0, 0.0000000001);
      expect(d.as_miles()).to.be.closeTo(1.0227272727272727, 0.0000000001);
      expect(d.as_kilometers()).to.be.closeTo(1.64592, 0.0000000001);
      expect(d.as_yards()).to.be.closeTo(1800.0, 0.0000000001);
      done();
    });

  });

  describe('add and subtract', () => {

    it('should add', (done) => {
      var d1 = new M26Distance(26.2);
      var d2 = new M26Distance(4.8);
      var d3 = d1.add(d2);
      var d4 = d1.add(null);

      expect(d3.value).to.be.closeTo(31.0, 0.0000000001);
      expect(d3.as_miles()).to.be.closeTo(31.0, 0.0000000001);
      expect(d3.as_kilometers()).to.be.closeTo(49.889664, 0.0000000001);
      expect(d4.value).to.be.closeTo(26.2, 0.0000000001);
      done();
    });

    it('should subtract', (done) => {
      var d1 = new M26Distance(31.0);
      var d2 = new M26Distance(4.8);
      var d3 = d1.subtract(d2);
      var d4 = d1.subtract(undefined);

      expect(d3.value).to.be.closeTo(26.2, 0.0000000001);
      expect(d3.as_miles()).to.be.closeTo(26.2, 0.0000000001);
      expect(d3.as_kilometers()).to.be.closeTo(42.1648128, 0.0000000001);
      expect(d4.value).to.be.closeTo(31.0, 0.0000000001);
      done();
    });

  });

});
