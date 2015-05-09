var chai = require('chai');
var m26 = require('../lib/m26');
var expect = chai.expect;
var M26Age = m26.M26Age;
describe('Class M26Age:', function () {
    describe('constructor', function () {
        it('constructor should receive a string arg', function (done) {
            var a = new M26Age('55.5');
            expect(a.val()).to.be.closeTo(55.5, 0.0000000001);
            done();
        });
        it('constructor should receive a number arg', function (done) {
            var a = new M26Age(39.9);
            expect(a.val()).to.be.closeTo(39.9, 0.0000000001);
            done();
        });
        it('constructor should handle null and undefined', function (done) {
            var n = new M26Age(null);
            var u = new M26Age(undefined);
            expect(n.val()).to.be.closeTo(0.0, 0.0000000001);
            expect(u.val()).to.be.closeTo(0.0, 0.0000000001);
            done();
        });
    });
    describe('adding and subtracting', function () {
        it('should add two ages', function (done) {
            var a16 = new M26Age('16.9');
            var a57 = new M26Age('57.1');
            var sum = a57.add(a16);
            expect(sum).to.be.closeTo(74.0, 0.0000000001);
            done();
        });
        it('should subtract one age from another', function (done) {
            var a16 = new M26Age('16.9');
            var a57 = new M26Age('57.1');
            var diff = a57.subtract(a16);
            expect(diff).to.be.closeTo(40.2, 0.0000000001);
            done();
        });
    });
    describe('max pulse calculation', function () {
        it('should implement max_pulse()', function (done) {
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
});
//# sourceMappingURL=m26_age_test.js.map