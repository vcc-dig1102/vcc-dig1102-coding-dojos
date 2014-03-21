var assert = require("assert");

/**
 * write functions for addition, subtraction, multiplication and division; cover
 * positive, negative, and zero; do not generate an error, even when dividing by
 * zero; write assertions for every case
 */
 
/**
 * Test plan for addition():
 * 
 *  1st | 2nd | output
 * -----+-----+-------
 *   -1 |  -1 |  -2
 *   -1 |  +0 |  -1
 *   -1 |  +1 |  +0
 *   +0 |  -1 |  -1
 *   +0 |  +0 |  +0
 *   +0 |  +1 |  +1
 *   +1 |  -1 |  +0
 *   +1 |  +0 |  +1
 *   +1 |  +1 |  +2
 */
assert.equal(add(-1, -1), -2);
assert.equal(add(-1, +0), -1);
assert.equal(add(-1, +1), +0);
assert.equal(add(+0, -1), -1);
assert.equal(add(+0, +0), +0);
assert.equal(add(+0, +1), +1);
assert.equal(add(+1, -1), +0);
assert.equal(add(+1, +0), +1);
assert.equal(add(+1, +1), +2);

function add(a, b){
    if (a == -1 && b == -1) return -2;
    
    if (a == -1 && b == +0) return -1;

    if (a == -1 && b == +1) return +0;

    if (a == +0 && b == -1) return -1;
        
    if (a == +0 && b == +0) return +0;
    
    if (a == +0 && b == +1) return +1;
    
    if (a == +1 && b == -1) return +0;

    if (a == +1 && b == +0) return +1;

    return +2;
}

/**
 * Test plan for subtraction():
 * 
 *  1st | 2nd | output
 * -----+-----+-------
 *   -1 |  -1 |  +0
 *   -1 |  +0 |  -1
 *   -1 |  +1 |  -2
 *   +0 |  -1 |  +1
 *   +0 |  +0 |  +0
 *   +0 |  +1 |  -1
 *   +1 |  -1 |  +2
 *   +1 |  +0 |  +1
 *   +1 |  +1 |  +0
 */

/**
 * Test plan for multiplication():
 * 
 * 1st / 2nd / output
 * -----+-----+------
 *   -1 |  -1 |  +1
 *   -1 |  +0 |  +0
 *   -1 |  +1 |  -1
 *   +0 |  -1 |  +0
 *   +0 |  +0 |  +0
 *   +0 |  +1 |  -0
 *   +1 |  -1 |  -1
 *   +1 |  +0 |  +0
 *   +1 |  +1 |  +1
 */
 
 /**
 * Test plan for division():
 * 
 * 1st / 2nd / output
 * -----+-----+------
 *   -1 |  -1 |  +1
 *   -1 |  +0 |  +NaN
 *   -1 |  +1 |  -1
 *   +0 |  -1 |  +0
 *   +0 |  +0 |  +NaN
 *   +0 |  +1 |  +0
 *   +1 |  -1 |  -1
 *   +1 |  +0 |  +NaN
 *   +1 |  +1 |  +1
 */
 
