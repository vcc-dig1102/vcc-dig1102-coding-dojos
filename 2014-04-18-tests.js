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

assert.equal(hallway.OPENED, +1);
assert.equal(hallway.CLOSED, +0);

assert.equal(hallway.toggle(hallway.OPENED), hallway.CLOSED);
assert.equal(hallway.toggle(hallway.CLOSED), hallway.OPENED);

assert.deepEqual(hallway.doors, []);

assert.equal(hallway.init(), hallway);
assert.deepEqual(hallway.doors, [ hallway.CLOSED ]);

assert(hallway.walk);
assert.equal(hallway.walk(), hallway);
assert.deepEqual(hallway.doors, [ hallway.OPENED]);