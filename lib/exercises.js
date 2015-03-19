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

exports.identity  = identity;
exports.identityf = identityf;
exports.add       = add;
exports.mul       = mul;

