var chai = require('chai');
var m26 = require('../lib/m26');
var expect = chai.expect;
var M26Constants = m26.M26Constants;
var M26Distance = m26.M26Distance;
var M26ElapsedTime = m26.M26ElapsedTime;
var M26Speed = m26.M26Speed;
describe('Class M26Speed:', function () {
    describe('construction and calculation', function () {
        it('calculates a 2-mile walk, with round numbers', function (done) {
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
        it('calculates a marathon, with fractional pace_per_mile', function (done) {
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
    describe('add and subtract', function () {
    });
});
//# sourceMappingURL=m26_speed_test.js.map