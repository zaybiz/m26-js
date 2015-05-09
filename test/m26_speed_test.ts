/// <reference path="../typings/mocha/mocha.d.ts" />
/// <reference path="../typings/chai/chai.d.ts" />
/// <reference path="../lib/m26.d.ts" />

import chai = require('chai');
import m26  = require('../lib/m26');

var expect = chai.expect;
var M26Constants   = m26.M26Constants;
var M26Age         = m26.M26Age;
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
      done();
    });

    it('calculates a marathon, with fractional pace_per_mile', (done) => {
      var d = new M26Distance(26.2);
      var t = new M26ElapsedTime('3:47:30');
      var s = new M26Speed(d, t);

      expect(s.mph()).to.be.closeTo(6.90989010989011, 0.0000000001);
      expect(s.kph()).to.be.closeTo(11.120390189010989, 0.0000000001);
      expect(s.yph()).to.be.closeTo(12161.4065934066, 0.0000000001);
      expect(s.seconds_per_mile()).to.be.closeTo(520.992366412214, 0.0000000001);
      expect(s.pace_per_mile()).to.be.eql('8:40.99');
      done();
    });

  });

  describe('age grading', () => {

    it('age-grades a given marathon time to several ages', (done) => {
      var d  = new M26Distance(26.2);
      var t  = new M26ElapsedTime('3:47:30');
      var s1 = new M26Speed(d, t);
      var a1 = new M26Age(42.5);
      var a2 = new M26Age(43.5);
      var a3 = new M26Age(57.1);
      var s2 = s1.age_graded(a1, a2);
      var s3 = s1.age_graded(a1, a3);

      expect(s1.mph()).to.be.closeTo(6.90989010989011,  0.0000000001);
      expect(s2.mph()).to.be.closeTo(6.870961151524531, 0.0000000001);
      expect(s3.mph()).to.be.closeTo(6.341527317752669, 0.0000000001);
      done();
    });

  });

  describe('time projection', () => {

    it('projected_time using a simple linear formula', (done) => {
      var d1  = new M26Distance(10.0);
      var t  = new M26ElapsedTime('1:30:00');
      var s  = new M26Speed(d1, t);
      expect(s.seconds_per_mile()).to.be.closeTo(540,  0.0000000001);
      expect(s.pace_per_mile()).to.be.eql('9:00');

      var d2  = new M26Distance(20.0);
      var hhmmss = s.projected_time(d2);
      expect(hhmmss).to.be.eql('03:00:00');
      done();
    });

    it('projected_time using the exponential riegel formula', (done) => {
      var d1  = new M26Distance(10.0);
      var t  = new M26ElapsedTime('1:30:00');
      var s  = new M26Speed(d1, t);
      expect(s.seconds_per_mile()).to.be.closeTo(540,  0.0000000001);
      expect(s.pace_per_mile()).to.be.eql('9:00');

      var d2  = new M26Distance(20.0);
      var hhmmss = s.projected_time(d2, 'riegel');
      var match_idx = hhmmss.indexOf('03:07:38')
      expect(match_idx).to.be.eql(0);
      done();
    });

  });

});
