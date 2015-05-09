var chai = require('chai');
var m26 = require('../lib/m26');
var expect = chai.expect;
var M26Age = m26.M26Age;
describe('User Model Unit Tests:', function () {
    describe('2 + 4', function () {
        it('should be 6', function (done) {
            expect(2 + 4).to.equals(6);
            done();
        });
        it('should not be 7', function (done) {
            expect(2 + 4).to.not.equals(7);
            done();
        });
    });
});
describe('Class M26Age:', function () {
    describe('constructor', function () {
        it('should cast a string to a number', function (done) {
            var a = new M26Age('55.5');
            expect(a.val()).to.be.closeTo(55.5, 0.0000000001);
        });
    });
});
//# sourceMappingURL=m26_age_test.js.map