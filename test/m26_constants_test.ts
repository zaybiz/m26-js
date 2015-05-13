/// <reference path="../typings/mocha/mocha.d.ts" />
/// <reference path="../typings/chai/chai.d.ts" />
/// <reference path="../lib/m26-js.d.ts" />

import chai = require('chai');
import fs   = require('fs');
import m26  = require('../lib/m26-js');

var expect = chai.expect;
var M26Constants = m26.M26Constants;

describe('Class M26Constants:', () => {

  describe('version', () => {

    it('defines VERSION', (done) => {
      expect(M26Constants.VERSION).to.be.eql('0.3.2');
      done();
    });

    it('VERSION matches package.json version', (done) => {
      var json = fs.readFileSync('package.json', 'utf-8').toString();
      var pkg  = JSON.parse(json);
      expect(M26Constants.VERSION).to.be.eql(pkg.version);
      done();
    });

  });

  describe('units of measure', () => {

    it('defines UOM_MILES', (done) => {
      expect(M26Constants.UOM_MILES).to.be.eql('m');
      done();
    });

    it('defines UOM_KILOMETERS', (done) => {
      expect(M26Constants.UOM_KILOMETERS).to.be.eql('k');
      done();
    });

    it('defines UOM_YARDS', (done) => {
      expect(M26Constants.UOM_YARDS).to.be.eql('y');
      done();
    });

    it('defines UNITS_OF_MEASURE', (done) => {
      var units : string[] = 'm,k,y'.split(',');
      expect(M26Constants.UNITS_OF_MEASURE).to.be.eql(units);
      done();
    });

  });

  describe('unit conversion values', () => {

    it('defines KILOMETERS_PER_MILE', (done) => {
      expect(M26Constants.KILOMETERS_PER_MILE).to.be.closeTo(1.609344, 0.0000000001);
      done();
    });

    it('defines MILES_PER_KILOMETER', (done) => {
      expect(M26Constants.MILES_PER_KILOMETER).to.be.closeTo(0.621371192237334, 0.0000000001);
      done();
    });

    it('defines YARDS_PER_KILOMETER', (done) => {
      expect(M26Constants.YARDS_PER_KILOMETER).to.be.closeTo(1093.6132983377076, 0.0000000001);
      done();
    });

    it('defines FEET_PER_KILOMETER', (done) => {
      expect(M26Constants.FEET_PER_KILOMETER).to.be.closeTo(3280.839895013123, 0.0000000001);
      done();
    });

    it('defines FEET_PER_METER', (done) => {
      expect(M26Constants.FEET_PER_METER).to.be.closeTo(3.280839895013123, 0.0000000001);
      done();
    });

    it('defines YARDS_PER_MILE', (done) => {
      expect(M26Constants.YARDS_PER_MILE).to.be.closeTo(1760.0, 0.0000000001);
      done();
    });

    it('defines SECONDS_PER_HOUR', (done) => {
      expect(M26Constants.SECONDS_PER_HOUR).to.be.closeTo(3600.0, 0.0000000001);
      done();
    });

  });

});
