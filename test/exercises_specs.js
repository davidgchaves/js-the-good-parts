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

/*
 * Ex7: Write a function that takes a binary function
 *      and make it callable with two invocations
 */
describe('applyf', function() {
  it('curries the given binary function', function() {
    expect(ex.applyf(ex.add)(3)(4)).to.be.equal(7);
    expect(ex.applyf(ex.mul)(5)(6)).to.be.equal(30);
  });
});

/*
 * Ex8: Write a function that takes a function and an argument
 *      and returns a function that can supply a 2nd argument
 */
describe('curry', function() {
  it('partially applies the given function to the given argument', function() {
    expect(ex.curry(ex.add, 3)(4)).to.be.equal(7);
    expect(ex.curry(ex.mul, 5)(6)).to.be.equal(30);
  });
});

/*
 * Ex9: Without writing any new functions,
 *      show three ways to create the inc function
 */
describe('inc', function() {
  it('adds 1 to the given number', function() {
    expect(ex.inc1(5)).to.be.eq(6);
    expect(ex.inc2(5)).to.be.eq(6);
    expect(ex.inc3(5)).to.be.eq(6);
  });
});

/*
 * Ex10: Write methodize, a function that converts
 *       a binary function to a method
 */
describe('methodize', function() {
  it('converts a binary function to a method', function() {
    Number.prototype.add = ex.methodize(ex.add);
    expect((3).add(4)).to.be.equal(7);
  });
});

