var assert = require("assert");

//assert(1 + 1 == 1, '1 + 1 does not equal 1');
//assert.equal(1, 1 + 1, '1 + 1 does not equal 1');

/**
 * four functions with two parameters:
 * - addition
 * - subtraction
 * - multiplication
 * - division
 * 
 * Must accept positive and negative Numbers (int or 
 * float) AND zero. Must not make an error!
 */
 
/**
 * testing addition():
 * one | two | out
 * ====+=====+====
 *  +1 | +1  | +2
 *  +1 | +0  | +1
 *  +1 | -1  | +0
 *  -1 | +1  | +0
 *  -1 | +0  | -1
 *  -1 | -1  | -2
 *  +0 | +1  | +1
 *  +0 | +0  | +0
 *  +0 | -1  | -1
 */

//This is an addition function
var addition = function(a, b) {
     return (a+b);
}

//This is a subtraction function
var sub = function(a, b) {
     return (a-b);
}

//These are addition tests
assert.equal(2,addition(1,1));
assert.equal(1,addition(1,0));
assert.equal(0,addition(1,-1));
assert.equal(0,addition(-1,1));
assert.equal(-1,addition(-1,0));
assert.equal(-2,addition(-1,-1));

//This is a subtraction test
assert.equal(0,sub(1,1));
assert.equal(1,sub(1,0));
assert.equal(2,sub(1,-1));
assert.equal(-1,sub(0,1));
assert.equal(0,sub(0,0));

assert.equal(0,multi(0,1));





