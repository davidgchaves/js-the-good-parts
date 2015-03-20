'use strict';

//  identity :: a -> a
var identity = function(x) {
  return x;
};

//  add :: Number -> Number -> Number
var add = function(x,y) {
  return x + y;
};

//  mul :: Number -> Number -> Number
var mul = function(x,y) {
  return x * y;
};

// Sometimes it's really hard to express types in javascript.
// Take identityf as an example:
// The returned function doesn't receive any argument,
// at least explicitly (function()),
// but in practice it is receving 'x' (indirectly).
// So, which is the right way to express this fact?
//  identityf :: a -> (none -> a)  (EXPLICIT)
// or maybe
//  identityf :: a -> (a -> a)     (IMPLICIT)
var identityf = function(x) {
  return function() { return identity(x); };
};

// Similar problem as with identityf, but since the curry is more evident here,
// I think I go with addf :: Number -> (Number -> Number)
// addf receives a Number and produces a function
// which receives another Number and finally returns yet another Number
//  addf :: Number -> (Number -> Number)
var addf = function(x) {
  return function(y) { return add(x,y); };
};

// What's the deal, here?
// applyf receives a function f
//  f :: Number -> Number -> Number
// which in turn produces another (anonymous) function (let's call it g)
//  g :: Number -> h
// which in turn produces yet another (anonymous) function (let's call it h)
//  h :: Number -> Number
// So
//  applyf :: (Number a) => (a -> a -> a) -> (a -> (a -> a))
var applyf = function(f) {
  return function(x) {
    return function(y) {
      return f(x,y);
    };
  };
};

// Quite similar to applyf, but now curry receives a function f and a Number x
//  f :: Number -> Number -> Number
//  x :: Number
// and produces an (anonymous) function (let's call it g)
//  g :: Number -> Number
// So
//  curry :: (Number a) => (a -> a -> a) -> a -> (a -> a)
var curry = function(f,x) {
  return function(y) {
    return f(x,y);
  };
};

//  inc :: Number -> Number
var inc1 = curry(add, 1);
var inc2 = applyf(add) (1);
var inc3 = addf(1);

// Using methodize:
//  Number.prototype.add = methodize(add)
//  (3).add(4)
//    - f    -> add
//    - this -> 3
//    - y    -> 4
//  methodize :: (Number a) => (a -> a -> a) -> (a -> a)
var methodize = function(f) {
  return function(y) { return f(this, y); };
};

// Using demethodize:
//  demethodize(Number.prototype.add)(5,6)
//    - f    -> Number.prototype.add
//    - that -> 5
//    - y    -> 6
//  demethodize :: (Number a) => (a -> a -> a) -> (a -> a -> a)
var demethodize = function(f) {
  return function(that, y) { return f.call(that, y); };
};

//  twice :: (Number a) => (a -> a -> a) -> a -> a
var twice = function(f) {
  return function(x) { return f(x,x); };
};

//  composeu :: (Number a) => (a -> a) -> (a -> a) -> a
var composeu = function(f,g) {
  return function(x) { return g(f(x)); };
};

//  composeb :: (Number a) => (a -> a -> a) -> (a -> a -> a) -> a
var composeb = function(f,g) {
  return function(x,y,z) { return g(f(x,y), z); };
};

exports.identity  = identity;
exports.identityf = identityf;
exports.add       = add;
exports.addf      = addf;
exports.mul       = mul;
exports.applyf    = applyf;
exports.curry     = curry;
exports.inc1      = inc1;
exports.inc2      = inc2;
exports.inc3      = inc3;
exports.methodize = methodize;
exports.demethodize = demethodize;
exports.twice     = twice;
exports.composeu  = composeu;
exports.composeb  = composeb;

