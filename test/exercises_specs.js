'use strict';

var chai   = require('chai'),
    expect = chai.expect;

var ex = require('../lib/exercises.js');

/*
 * Ex3: Write an identity function that
 *      takes an argument and returns the same argument
 */
describe('identity', function() {
  it('returns the given argument', function() {
    expect(ex.identity(3)).to.be.equal(3);
  });
});

