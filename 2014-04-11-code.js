/**
 * What did we do well?
 * - planning with pseudocode
 * - examining the problem
 * - got farther!
 * - refactoring
 * 
 * What should we improve?
 * - variable names
 * - try the second trip
 * - try displaying? (OMG!)
 * - use ITERATION
 * - how do we test a hallway with X doors?
 * 
 * Did we meet our goals?
 * - learn: `this.`, `[ ] != [ ]; // WTF?`, `assert.deepEqual()`, 5 ways to do anything!
 * - practice: refactoring, writing tests, building arrays, `for` loops
 * - fun: YAY!
 * - solve: BOO!
 */
module.exports = {
    CLOSED: -1,
    OPENED: +1,

    doors : [-1, -1, -1, -1, -1],
    
    toggle: function(door){
        if (door === this.CLOSED) return this.OPENED;
        
        if (door === this.OPENED) return this.CLOSED;
    },
    
    walk : function() {
        for (var door = 0; door < this.doors.length; door++) {
            this.doors[door] = this.OPENED;
        }
    },
};
