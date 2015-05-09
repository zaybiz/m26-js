/// <reference path="../typings/mocha/mocha.d.ts" />
/// <reference path="../typings/chai/chai.d.ts" />
/// <reference path="../lib/m26.d.ts" />

import chai = require('chai');
import m26  = require('../lib/m26');

var expect = chai.expect;
var M26Constants   = m26.M26Constants;
var M26ElapsedTime = m26.M26ElapsedTime;

describe('Class M26ElapsedTime:', () => {

  describe('constructor and conversion', () => {

    //it('constructor should assume miles', (done) => {
    //  var d = new M26ElapsedTime(26.2);
    //  expect(d.value).to.be.closeTo(26.2, 0.0000000001);
    //  expect(d.as_miles()).to.be.closeTo(26.2, 0.0000000001);
    //  expect(d.as_kilometers()).to.be.closeTo(42.1648128, 0.0000000001);
    //  expect(d.as_yards()).to.be.closeTo(46112.0, 0.0000000001);
    //  done();
    //});


  });

  describe('add and subtract', () => {

    //it('should add', (done) => {
    //  var d1 = new M26ElapsedTime(26.2);
    //  var d2 = new M26ElapsedTime(4.8);
    //  var d3 = d1.add(d2);
    //  expect(d3.value).to.be.closeTo(31.0, 0.0000000001);
    //  expect(d3.as_miles()).to.be.closeTo(31.0, 0.0000000001);
    //  expect(d3.as_kilometers()).to.be.closeTo(49.889664, 0.0000000001);
    //  done();
    //});

  });

});
