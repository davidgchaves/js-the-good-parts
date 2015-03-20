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

//  identityf :: a -> a
var identityf = function(x) {
  return function() { return x; };
};

//  addf :: Number -> Number -> Number
var addf = function(x) {
  return function(y) { return x + y; };
};

var applyf = function(f) {
  return function(x) {
    return function(y) {
      return f(x,y);
    };
  };
};

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

