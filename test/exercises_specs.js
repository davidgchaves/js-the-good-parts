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

/*
 * Ex11: Write demethodize, a function that converts
 *       a method to a binary function
 */
describe('demethodize', function() {
  it('converts a method to a binary function', function() {
    expect(ex.demethodize(Number.prototype.add)(5,6)).to.be.equal(11);
  });
});


/*
 * Ex12: Write twice, a function that takes a binary function and returns
 *       a unary function that passes its args to the binary function twice
 */
describe('twice', function() {
  it('executes the given binary function with the same argument', function() {
    expect(ex.twice(ex.add)(11)).to.be.equal(22);
    expect(ex.twice(ex.mul)(11)).to.be.equal(121);
  });
});

/*
 * Ex13: Write composeu, a function that takes two unary functions
 *       and returns a unary function that calls them both
 */
describe('composeu', function() {
  it('composes two unary functions', function() {
    var double = ex.twice(ex.add);
    var square = ex.twice(ex.mul);
    expect(ex.composeu(double,square)(3)).to.be.equal(36);
  });
});

/*
 * Ex14: Write composeb, a function that takes two binary functions
 *       and returns a function that calls them both
 */
describe('composeb', function() {
  it('composes two binary functions', function() {
    expect(ex.composeb(ex.add,ex.mul)(2,3,6)).to.be.equal(30);
  });
});

/*
 * Ex15: Write once, a function that allows another function
 *       to only be called once
 *       NOTE: the second time (checked in node repl) it throws a
 *             TypeError: Cannot read property 'apply' of null
 *             But, sadly, I'm unable to capture it in the example below
 *             when using Chai's throw
 */
describe('once', function() {
  it('only allows the given function to be called once', function() {
    var add_once = ex.once(ex.add);
    expect(add_once(3,4)).to.be.equal(7);
    //expect(add_once(3,4)).to.throw(TypeError);
  });
});

/*
 * Ex16: Write counterf, a function that returns two functions
 *       that implement an up/down counter
 */
describe('counterf', function() {
  it('creates an object with inc/dec functions', function() {
    var counter = ex.counterf(10);
    expect(counter.inc()).to.be.equal(11);
    expect(counter.dec()).to.be.equal(10);
    expect(counter.dec()).to.be.equal(9);
  });
});

/*
 * Ex17: Write revocable, a function that takes a nice function
 *       and returns:
 *        invoke function -> invokes the nice function
 *        revoke function -> denies future access to the nice function
 *       NOTE: after inc.revoke() (checked in node repl) it throws a
 *             TypeError: Cannot read property 'apply' of null
 *             But, sadly, I'm unable to capture it in the example below
 *             when using Chai's throw
 */
describe('revocable', function() {
  it('creates an object with invoke/revoke functions', function() {
    var inc = ex.revocable(ex.inc1);
    expect(inc.invoke(10)).to.be.equal(11);
    expect(inc.invoke(20)).to.be.equal(21);
    inc.revoke();
    //expect(inc.invoke(10)).to.throw();
  });
});

