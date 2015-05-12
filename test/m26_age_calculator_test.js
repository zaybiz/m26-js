/// <reference path="../typings/mocha/mocha.d.ts" />
/// <reference path="../typings/chai/chai.d.ts" />
/// <reference path="../lib/m26-js.d.ts" />
var chai = require('chai');
var m26 = require('../lib/m26-js');
var expect = chai.expect;
var M26Age = m26.M26Age;
var M26AgeCalculator = m26.M26AgeCalculator;
describe('Class M26AgeCalculator:', function () {
    describe('constants', function () {
        it('should implement milliseconds_per_year()', function (done) {
            var c = new M26AgeCalculator();
            expect(c.milliseconds_per_year()).to.be.eql(31557600000);
            done();
        });
    });
    describe('calculation', function () {
        it('should implement calculate()', function (done) {
            var c = new M26AgeCalculator();
            var a1 = c.calculate('1960-10-01', null);
            var a2 = c.calculate(undefined, '2013-11-01');
            var a3 = c.calculate('1960-10-01', '2013-11-01');
            expect(a1.val()).to.be.eql(-1);
            expect(a2.val()).to.be.eql(-1);
            expect(a3.val()).to.be.closeTo(53.08418891170431, 0.0000000001);
            done();
        });
    });
});
