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
module.exports = {
    OPENED : 1,
    CLOSED : +0,
    
    doors : [],
    
    init : function () {
        this.doors[0] = this.CLOSED;
        return this;
    },
    
    toggle : function(door) {
        if ( door == this.CLOSED ) {
            return this.OPENED;
        }
            return this.CLOSED;
    },
    
    walk : function() {
        this.doors[0] = this.toggle(this.doors[0]);
        return this;
    },
    
};