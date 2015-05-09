/// <reference path="../typings/mocha/mocha.d.ts" />
/// <reference path="../typings/chai/chai.d.ts" />
/// <reference path="../lib/m26.d.ts" />

import chai = require('chai');
import m26  = require('../lib/m26');

var expect = chai.expect;
var M26Constants   = m26.M26Constants;
var M26Distance    = m26.M26Distance;
var M26ElapsedTime = m26.M26ElapsedTime;
var M26Speed       = m26.M26Speed;

describe('Class M26Speed:', () => {

  describe('construction and calculation', () => {

    it('calculates a 2-mile walk, with round numbers', (done) => {
      var d = new M26Distance(2.0);
      var t = new M26ElapsedTime('30:00');
      var s = new M26Speed(d, t);

      expect(s.mph()).to.be.closeTo(4.0, 0.0000000001);
      expect(s.kph()).to.be.closeTo(6.437376, 0.0000000001);
      expect(s.yph()).to.be.closeTo(7040, 0.0000000001);
      expect(s.seconds_per_mile()).to.be.closeTo(900, 0.0000000001);
      expect(s.pace_per_mile()).to.be.eql('15:00');

      //d = new Distance(2.0)
      //t = new ElapsedTime('30:00')
      //s = new Speed(d, t)
      //expect(s.mph()).isWithin(0.000001, 4)
      //expect(s.kph()).isWithin(0.000001, 6.437376)
      //expect(s.yph()).isWithin(0.000001, 7040)
      //expect(s.seconds_per_mile()).isWithin(0.000001, 900)
      //expect(s.pace_per_mile()).toBe('15:00')

      done();
    });

  });

  describe('add and subtract', () => {

    //it('should add', (done) => {
    //  var d1 = new M26Speed(26.2);
    //  var d2 = new M26Speed(4.8);
    //  var d3 = d1.add(d2);
    //  expect(d3.value).to.be.closeTo(31.0, 0.0000000001);
    //  expect(d3.as_miles()).to.be.closeTo(31.0, 0.0000000001);
    //  expect(d3.as_kilometers()).to.be.closeTo(49.889664, 0.0000000001);
    //  done();
    //});


  });

});
