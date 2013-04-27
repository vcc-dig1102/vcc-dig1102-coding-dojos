var assert = require("assert"),
    problem = require("./2013-04-27-code");
    
/** define what each I, V, X, L, C, D, M is worth
 *  I = 1
 *  V = 5
 *  X = 10
 *  L = 50
 *  C = 100
 *  D = 500
 *  M = 1,000
 */

// Is there a dictionary called "numerals"
// Does 1 = I? see chart below

/** input |  output 
 *  1     |  I
 *  5     |  V
 * 10     |  X
 * 50     |  L
 * 100    |  C
 * 500    |  D
 * 1,000  |  M
 */
 
// For these we need to create functions
/** input | output
 *  2     |  II
 *  3     |  III
 *  4     |  IV
 *  6     |  VI
 */




// These go in code

// We need a function that returns a value that is a roman numeral "roman"
// We need a key with a decimal number a direct represention as stated above
// Take a decimal and convert it to a roman numeral
// For the first three increments you add an "I" 
// For the next increment you subtract an "I" from that increment
// Once you get above ten
// How do we create "3"?
// How do we create "4"?
 
