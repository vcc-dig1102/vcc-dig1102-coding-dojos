var assert = require('assert'),
    hallway = require('./2014-04-11-code.js');
    
/**
 * Given a hallway that contains 100 doors and 100 trips down the hallway...
 * 
 * When on the 1st trip, visit every door and open it.
 * When on the 2nd trip, visit every 2nd (even) door and close it.
 * When on the 3rd trip, visit every 3rd door and toggle it: open if closed and
 *     close if opened
 * When on the 4th trip, visit every 4th door and toggle.
 * et cetera
 * 
 * Then after 100 trips, what is the state of the doors?
 */

assert(hallway);
assert(hallway.doors);

assert.equal(hallway.CLOSED, -1);
assert.equal(hallway.OPENED, +1);

assert.equal(hallway.toggle(hallway.CLOSED), hallway.OPENED);
assert.equal(hallway.toggle(hallway.OPENED), hallway.CLOSED);
assert.equal(hallway.toggle('askew'), undefined);
assert.equal(hallway.doors.length, 1);
assert.equal(hallway.doors [0], hallway.CLOSED);

assert.equal(hallway.walk(), undefined);
assert.equal(hallway.doors [0], hallway.OPENED);