/// <reference path="../typings/mocha/mocha.d.ts" />
/// <reference path="../typings/chai/chai.d.ts" />

// See http://dinozafirakos.com/2014/07/21/testing-with-mocha-chai-and-typescript/
//
// $ tsc -d --module commonjs test/m26_age_test.ts
// $ mocha

import chai = require('chai');

module m26test {

  var expect = chai.expect;

  describe('User Model Unit Tests:', () => {

      describe('2 + 4', () => {
          it('should be 6', (done) => {
              expect(2 + 4).to.equals(6);
              done();
          });

          it('should not be 7', (done) => {
              expect(2 + 4).to.not.equals(7);
              done();
          });
      });
  });
}
