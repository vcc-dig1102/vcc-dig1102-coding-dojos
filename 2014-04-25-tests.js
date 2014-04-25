/**
 * What did we do well?
 * - Improved planning, talk before typing, understanding
 * - Mild refactoring...
 * - Breaking down the problem into functions
 * 
 * What to improve?
 * - Refactor earlier!
 * - Practice diagramming!
 * - Practice Refactoring!
 * - Communication
 * - Variable names!
 * 
 * Did we meet our goals?
 */

/**
 * Initialize :
 * Constants : 3, 5
 * 
 * Function to find multiples of 3 and 5 and display them.
 * 
 * - Function to find multiples of 3
 * input: maxvalue
 * output : list of multiples 3
 * side effects : none
 * 
 * - Function to find multiples of 5
 * input: maxvalue
 * output : list of multiples 5
 * side effects : none
 * 
 * Function to merge lists and eliminate duplicates
 * input: multiples of 3 and 5 list
 * output: list of multiples 3 and 5 combined into one list
 * side effects: none
 * 
 * Function to sum numbers in a list
 * input: list of intergers of 3 and 5
 * output: integers sum of 3 and 5 list
 * side effects: none
 * 
 * var multiThree = [];
 * for (var three = 3; three < maxValue; three += 3)
 *      push the value three into list.  list.push("three")
 *
 * var multiFive = [];
 * for (var five = 5; five < maxValue; five += 5)
 *      push the value five into list.  list.push("five")
 */
 
var assert = require("assert"),
    multiples = require("./2014-04-25-code.js");
    
assert(multiples);
assert(multiples.three);

// for (var count = 0; count <= 3; count++) assert.deepEqual(multiples.three(count), []);
// for (var count = 4; count <= 6; count++) assert.deepEqual(multiples.three(count), [3]);
// for (var count = 7; count <= 9; count++) assert.deepEqual(multiples.three(count), [3,6]);

// testThrees(0, 3, []);
// testThrees(4, 6, [3]);
// testThrees(7, 9, [3,6]);

[
    [0, 3, [] ],
    [4, 6, [3] ],
    [7, 9, [3,6] ],
    [10, 12, [3,6,9] ],
    [13, 15, [3,6,9,12] ]
].forEach(function(test){
    var A = test[0],
        B = test[1],
        C = test[2];

    testThrees(A, B, C);
});
assert.deepEqual(multiples.three(20), [3,6,9,12,15,18]);

assert.deepEqual(multiples.three(10), [3,6,9]);

assert(multiples.five);
assert.deepEqual(multiples.five(6), [5]);
assert.deepEqual(multiples.five(11), [5, 10]);
for (var count = 0; count <= 5; count++) {
    assert.deepEqual(multiples.five(count), []);
}

function testThrees(A, B, C){
    for (var count = A; count <= B; count++) 
        assert.deepEqual(multiples.three(count), C);
}


// assert(multiples.merge);