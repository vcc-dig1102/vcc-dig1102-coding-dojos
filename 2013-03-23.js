var assert=require("assert");

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
 
 //Adding addition function
function addition (a, b) {

     return (a + b);
}
 
 //This is the first attempt at a failing addition test.
assert (addition (1, 1) == 2, '1 + 1 equals 2');
 //First red condition
 
 assert(addition(+1,+0)===+1,'1+0 equals 1');
 assert(addition(+1,-1)===+0,'1+-1 equals 0');
 assert(addition(-1,+1)===+0,'-1+1 equals 0');
 assert(addition(-1,+0)===-1,'-1+0 equal -1');
 assert(addition(-1, -1)  === -2, '-1 + -1 = -2');
 assert(addition(0, +1) === 1, '0 and 1 is 1');
 assert(addition(0, 0) === 0, '0 + 0 equals 0');
 assert(addition(0, -1) === -1, '0 + -1 equals -1');
 
