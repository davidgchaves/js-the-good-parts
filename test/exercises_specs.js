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

/*
 * Ex4: Write two binary functions add and mul that
 *      take two numbers and return their sum and product
 */
describe('add', function() {
  it('returns the sum of two numbers', function() {
    expect(ex.add(3,4)).to.be.equal(7);
  });
});

