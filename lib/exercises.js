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

