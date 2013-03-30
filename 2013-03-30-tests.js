/**
 * Retrospective:
 * 
 * What did we do well?
 *   - VERY INCREMENTAL Baby Steps.
 *   - Split tests and production code.
 *   - Refactored production code eagerly.
 *   - Passed all our test cases for division!
 *   - Solved the "DIV BY ZERO" conundrum!
 *   - Lined up all the values nicely.
 * 
 * What should we improve?
 *   - Stupidest thing possible.
 *   - Use larger range of input values?
 *   - Use a different THEME: Idle Fingers?
 *   - REMEMBER to commit between pairs!
 * 
 * Did we achieve our goals? Why?
 *   - Learned something about making up math.
 *   - Learned how to divide files with "require()" and "module.exports"
 *   - Learned how small Baby Steps really are... O_O
 *   - Completed our "division()" tests!
 *   - Logical comparisons: if, and (&&), or (||), else (or not).
 *   - Learned that order of comparisons matter!
 */

var assert = require('assert'),
    calculator = require('./2013-03-30-code.js');

/**
 * Tests for division...
 * +1 | +1 | +1
 * +1 | +0 | +0
 * +1 | -1 | -1
 * -1 | +1 | -1
 * -1 | +0 | +0
 * -1 | -1 | +1
 * +0 | +1 | +0
 * +0 | +0 | +0
 * +0 | -1 | +0
 */
assert(calculator.division(+1, +1) === +1);
assert(calculator.division(+1, +0) === +0);
assert(calculator.division(+1, -1) === -1);
assert(calculator.division(-1, +1) === -1);
assert(calculator.division(-1, +0) === +0);
assert(calculator.division(-1, -1) === +1);
assert(calculator.division(+0, +1) === +0);
assert(calculator.division(+0, +0) === +0);
assert(calculator.division(+0, -1) === +0);
