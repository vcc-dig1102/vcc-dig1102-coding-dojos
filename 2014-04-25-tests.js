/**
 * If we consider all the multiples of 3 or 5 less than 10, we have the set of
 * { 3, 5, 6, 9 }. The sum of these integers is 23.
 * 
 * If we consider the same multiples less than 20, we have the set 
 * { 3, 5, 6, 9, 10, 12, 15, 18 }, the sum of which is 78.
 * 
 * Find the sum of the multiples of 3 or 5 less than 1000.
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
// assert.deepEqual(multiples.three(0), []);
// assert.deepEqual(multiples.three(1), []);
// assert.deepEqual(multiples.three(2), []);
// assert.deepEqual(multiples.three(3), []);
for (var count = 0; count <= 3; count++) {
    assert.deepEqual(multiples.three(count), []);
}
// assert.deepEqual(multiples.three(4), [3]);
// assert.deepEqual(multiples.three(5), [3]);
// assert.deepEqual(multiples.three(6), [3]);
for (var count = 4; count <= 6; count++) {
    assert.deepEqual(multiples.three(count), [3]);
}
// assert.deepEqual(multiples.three(7), [3,6]);
for (var count = 7; count <= 9; count++) {
    assert.deepEqual(multiples.three(count), [3,6]);
}
assert.deepEqual(multiples.three(10), [3,6,9]);

assert(multiples.five);
assert.deepEqual(multiples.five(0), []);
assert.deepEqual(multiples.five(1), []);
assert.deepEqual(multiples.five(6), [5]);
assert.deepEqual(multiples.five(11), [5, 10]);