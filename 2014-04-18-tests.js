/**
 * Retrospective:
 * 
 * What did we do well?
 * - Caught up @JeepCrew!
 * - Added init() to build the doors
 * - Planning + pseudocode
 * - Communication improved through understanding
 * 
 * What should we improve?
 * - Research "this" more, specifically "return this"
 * - Organize tests better...!
 * - Refactor more! Maybe as we go?
 * - JUST DO IT!
 * 
 * Did we meet our goals?
 * - practice: communication, refactoring, typing, planning
 * - learn: deepEqual(), this, almost OOP, using CONSTANTS
 * - solve: NEVER!
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