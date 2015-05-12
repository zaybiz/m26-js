/// <reference path="../typings/mocha/mocha.d.ts" />
/// <reference path="../typings/chai/chai.d.ts" />
/// <reference path="../lib/m26.d.ts" />

import chai = require('chai');
import m26  = require('../lib/m26');

var expect = chai.expect;
var M26Age = m26.M26Age;

describe('Class M26Age:', () => {

  describe('constructor', () => {

    it('constructor should receive a string arg', (done) => {
      var a = new M26Age('55.5');
      expect(a.val()).to.be.closeTo(55.5, 0.0000000001);
      done();
    });

    it('constructor should receive a number arg', (done) => {
      var a = new M26Age(39.9);
      expect(a.val()).to.be.closeTo(39.9, 0.0000000001);
      done();
    });

    it('constructor should handle null and undefined', (done) => {
      var n = new M26Age(null);
      var u = new M26Age(undefined);
      expect(n.val()).to.be.closeTo(0.0, 0.0000000001);
      expect(u.val()).to.be.closeTo(0.0, 0.0000000001);
      done();
    });
  });

  describe('adding and subtracting', () => {

    it('should add two ages', (done) => {
      var a16 = new M26Age('16.9');
      var a57 = new M26Age('57.1');
      var sum = a57.add(a16);
      expect(sum).to.be.closeTo(74.0, 0.0000000001);
      done();
    });

    it('should subtract one age from another', (done) => {
      var a16 = new M26Age('16.9');
      var a57 = new M26Age('57.1');
      var diff = a57.subtract(a16);
      expect(diff).to.be.closeTo(40.2, 0.0000000001);
      done();
    });
  });

  describe('max pulse calculation', () => {

    it('should implement max_pulse()', (done) => {
      var a16 = new M26Age(16);
      var a20 = new M26Age('20');
      var a21 = new M26Age(21);
      var a36 = new M26Age(36);
      var a57 = new M26Age('57');
      expect(a16.max_pulse()).to.be.closeTo(200.0, 0.0000000001);
      expect(a20.max_pulse()).to.be.closeTo(200.0, 0.0000000001);
      expect(a21.max_pulse()).to.be.closeTo(199.0, 0.0000000001);
      expect(a36.max_pulse()).to.be.closeTo(184.0, 0.0000000001);
      expect(a57.max_pulse()).to.be.closeTo(163.0, 0.0000000001);
      done();
    });
  });

  describe('heartbeat/pulse training zones', () => {

    it('should implement training_zones()', (done) => {
      var a57   = new M26Age('57.1');
      var zones = a57.training_zones();
      var z1  = zones[0];
      var z5  = zones[4];
      var max = a57.max_pulse();
      expect(max).to.be.closeTo(162.9, 0.00000001);

      expect(z1['zone']).to.be.eql(1);
      expect(z1['pulse']).to.be.eql(155);
      expect(z1['age']).to.be.closeTo(57.1, 0.00000001);
      expect(z1['pct_max']).to.be.closeTo(0.95, 0.00000001);
      expect(z1['max']).to.be.closeTo(162.9, 0.00000001);

      expect(z5['zone']).to.be.eql(5);
      expect(z5['pulse']).to.be.eql(122);
      expect(z5['age']).to.be.closeTo(57.1, 0.00000001);
      expect(z5['pct_max']).to.be.closeTo(0.75, 0.00000001);
      expect(z5['max']).to.be.closeTo(162.9, 0.00000001);
      done();
    });
  });

});



// expect(z1.zone).toBe(1)
// expect(z1.pulse).toBe(155)
// expect(z1.age).isWithin(0.001, 57.1)
// expect(z1.pct_max).isWithin(0.001, 0.95)
// expect(z1.max).isWithin(0.001, 162.9)
//
// expect(z5.zone).toBe(5)
// expect(z5.pulse).toBe(122)
// expect(z5.age).isWithin(0.001, 57.1)
// expect(z5.pct_max).isWithin(0.001, 0.75)
// expect(z5.max).isWithin(0.001, 162.9)
