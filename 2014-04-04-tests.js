var assert = require('assert'),
    hallway = require('./2014-04-04-code.js');

/**
* First test to make sure all doors in Hallway are closed
* Door #  | open(1)/closed(-1)
* 1  | -1
* 2  | -1
* 3  | -1
* 4  | -1
* 5  | -1
* 6  | -1
* 7  | -1
* 8  | -1
* 9  | -1
* 10 | -1
 
*/ 

var test = [
    [1 , -1],
    [2 , -1],
    [3 , -1],
    ];

assert( hallway );

assert( hallway.door );

assert.equal(hallway.door, -1, "pass");