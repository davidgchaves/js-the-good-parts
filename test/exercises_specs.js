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

describe('mul', function() {
  it('returns the product of two numbers', function() {
    expect(ex.mul(3,4)).to.be.equal(12);
  });
});

/*
 * Ex5: Write a function identityf that takes an argument
 *      and returns a function that returns that argument
 */
describe('identityf', function() {
  it('returns a function that returns the given argument', function() {
    expect(ex.identityf(3)()).to.be.equal(3);
  });
});

/*
 * Ex6: Write a function that adds from two invocations
 */
describe('addf', function() {
  it('adds two numbers one at a time (curry)', function() {
    expect(ex.addf(3)(4)).to.be.equal(7);
  });
});

