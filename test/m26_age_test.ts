/// <reference path="../typings/mocha/mocha.d.ts" />
/// <reference path="../typings/chai/chai.d.ts" />

/// <reference path="../lib/m26.d.ts" />
/// <reference path="../lib/m26_constants.d.ts" />
/// <reference path="../lib/m26_age.d.ts" />
/// <reference path="../lib/m26_distance.d.ts" />
/// <reference path="../lib/m26_elapsed_time.d.ts" />
/// <reference path="../lib/m26_speed.d.ts" />
/// <reference path="../lib/m26_structs.d.ts" />

// See http://dinozafirakos.com/2014/07/21/testing-with-mocha-chai-and-typescript/
//
// $ tsc -d --module commonjs test/m26_age_test.ts
// $ mocha

import chai = require('chai');
import m26  = require('../lib/m26');

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
