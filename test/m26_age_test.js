/// <reference path="../typings/mocha/mocha.d.ts" />
/// <reference path="../typings/chai/chai.d.ts" />
// See http://dinozafirakos.com/2014/07/21/testing-with-mocha-chai-and-typescript/
//
// $ tsc -d --module commonjs test/m26_age_test.ts
// $ mocha
var chai = require('chai');
var m26test;
(function (m26test) {
    var expect = chai.expect;
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
})(m26test || (m26test = {}));
