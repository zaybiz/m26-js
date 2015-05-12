/// <reference path="../typings/mocha/mocha.d.ts" />
/// <reference path="../typings/chai/chai.d.ts" />
/// <reference path="../lib/m26-js.d.ts" />
var chai = require('chai');
var m26 = require('../lib/m26-js');
var expect = chai.expect;
var M26Constants = m26.M26Constants;
var M26ElapsedTime = m26.M26ElapsedTime;
describe('Class M26ElapsedTime:', function () {
    describe('constructors', function () {
        it('constructor with a number of seconds', function (done) {
            var t = new M26ElapsedTime(3665);
            expect(t.as_hhmmss()).to.be.eql('01:01:05');
            expect(t.secs).to.be.closeTo(3665.0, 0.000001);
            expect(t.hours()).to.be.closeTo(1.0180555555555555, 0.000001);
            done();
        });
        it('constructor with a hh:mm:ss string', function (done) {
            var t = new M26ElapsedTime('3:47:30');
            expect(t.as_hhmmss()).to.be.eql('03:47:30');
            expect(t.hh).to.be.closeTo(3, 0.000001);
            expect(t.mm).to.be.closeTo(47, 0.000001);
            expect(t.ss).to.be.closeTo(30, 0.000001);
            done();
        });
        it('constructor with a mm:ss string', function (done) {
            var t = new M26ElapsedTime('01:57');
            expect(t.as_hhmmss()).to.be.eql('00:01:57');
            expect(t.hh).to.be.closeTo(0, 0.000001);
            expect(t.mm).to.be.closeTo(1, 0.000001);
            expect(t.ss).to.be.closeTo(57, 0.000001);
            expect(t.secs).to.be.closeTo(117.0, 0.000001);
            done();
        });
        it('constructor with a ss string', function (done) {
            var t = new M26ElapsedTime('  13  ');
            expect(t.as_hhmmss()).to.be.eql('00:00:13');
            expect(t.hh).to.be.closeTo(0, 0.000001);
            expect(t.mm).to.be.closeTo(0, 0.000001);
            expect(t.ss).to.be.closeTo(13, 0.000001);
            expect(t.secs).to.be.closeTo(13.0, 0.000001);
            done();
        });
    });
});
