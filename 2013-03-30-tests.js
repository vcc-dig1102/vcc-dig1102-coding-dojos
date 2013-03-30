// Tests for calculator...

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