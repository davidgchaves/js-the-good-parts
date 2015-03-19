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

exports.identity  = identity;
exports.identityf = identityf;
exports.add       = add;
exports.addf      = addf;
exports.mul       = mul;

