var assert = require('assert'),
    calculator = require('./2014-03-28-code.js');

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
var tests = [
    [ -1, -1, +1 ],
    [ -1, +0, +0 ],
    [ -1, +1, -1 ],
    [ +0, -1, +0 ],
    [ +0, +0, +0 ],
    [ +0, +1, +0 ],
    [ +1, -1, -1 ],
    [ +1, +0, +0 ],
    [ +1, +1, +1 ],
];

tests.forEach(function(row){
    var a = row[0],
        b = row[1],
        c = row[2];
        
    assertEqual(calculator.multiply(a, b), c);
});

function assertEqual(actual, expected, message){
    assert.equal(actual, expected, message);
    console.log('pass!');
}

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
 
var tests = [
    
    [-1, -1, +1],
    [-1, +0, +NaN],
    [-1, +1, -1],
    [+0, -1, +0],
    [+0, +0, +NaN],
    [+0, +1, +0],
    [+1, -1, -1],
    [+1, +0, +NaN],
    [+1, +1, +1],
    
];

tests.ForEach(function(row) {
    var a = row[0],
        b = row[1],
        c = row[2];
    assertEqual(calculator.div(a, b), c);
});