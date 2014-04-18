/**
 * Retrospective:
 * 
 * What did we do well?
 * 
 * 
 * What should we improve?
 * 
 * 
 * Did we meet our goals?
 * 
 *
 */
var assert = require('assert'),
    hallway = require('./2014-04-18-code.js');
    
assert(hallway);
assert(hallway.doors);
assert.equal(hallway.doors.length, 1);

assert.deepEqual(hallway.doors, [ -1 ]);

assert(hallway.OPENED);
assert(hallway.CLOSED);

assert.equal(hallway.OPENED, +1);