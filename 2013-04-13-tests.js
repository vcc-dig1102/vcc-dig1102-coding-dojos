var assert = require("assert"),
    hundredDoors = require("./2013-04-13-code");

/**
 * What did we do well?
 *  - Looked up in reference; talked out decisions (mostly)
 *  - Followed the spec for tests and production
 *  - Baby steps (mostly), representative data set
 * 
 * What should we improve?
 *  - Study and practice!
 * 
 * Did we meet our goals? Why or why not?
 *  - Learned first-hand how to use dictionaries and lists
 *  - Learned about "module.exports", "Array.forEach"
 */

// test: do we have a Hallway?
assert(hundredDoors.hallway);

// test: do we have Doors in our Hallway?
assert(hundredDoors.hallway.doors);

// test: do we have 100 Doors?
assert.equal(hundredDoors.hallway.doors.length, 10);

// test: are all the Doors "closed"?

/* // VERY longhand...
var index = 0;
while ( index < hundredDoors.hallway.doors.length ){
    var door = hundredDoors.hallway.doors[index];
    
    assert.equal(door, 0);
    
    index++;
}
*/

/* // Slightly shorter...
for ( var index = 0; index < hundredDoors.hallway.doors.length; index++ ){
    var door = hundredDoors.hallway.doors[index];
    
    assert.equal(door, 0);
}
*/

// Much shorter, and preferred...
hundredDoors.hallway.doors.forEach(function(door){
    assert.equal(door, 0);
});


/* // What that voodoo do...
var list = [ ];

list.forEach = function(callback){
    for ( var index = 0; index < this.length; index++ ){
        callback(this[index], index, this);
    }
}
*/



// do: PASS 1 -- take a walk down the hallway, change the state of the doors
assert(hundredDoors.hallway.toggle);


// test: are all the Doors "open"?

// do: PASS 2 -- take a walk down the hallway, change the state of the doors

// test: is every EVEN Door "closed"? is every ODD Door "open"?

// do: PASS 3 -- take a walk down the hallway, change the state of the doors

// test: does the Hallway match our expected state?


