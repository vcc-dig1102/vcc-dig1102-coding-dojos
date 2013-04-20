var assert = require("assert"),
    hundredDoors = require("./2013-04-20-code");
    
/**
 * What did we do well?
 *  - Good teamwork, good communication (with reminders)
 *  - Got much further than ever before.
 *  - Mostly baby steps.
 *  - Understanding concepts and syntax better.
 *  - Looked up questions
 * 
 * What should we improve?
 *  - PRACTICE Baby Steps
 *  - PRACTICE Following the Spec
 *  - PRACTICE Writing the right tests.
 *  - STUDY concepts and syntax
 * 
 * Did we meet our goals?
 *  - Learned about chaining methods on a return value of a function
 *  - Learned about "Array.map()"
 *  - Didn't finish the problem; made it to "first pass"
 *  - Learned some "this" magic...
 */

//do we have a hallway?
assert(hundredDoors.hallway);

//do we have doors in the hallway?
assert(hundredDoors.hallway.doors);

//do we have 10 doors?
assert.equal(hundredDoors.hallway.doors.length, 10);
//  line 11 same as >   'assert(hundredDoors.hallway.doors.length == 10);'

//are all the doors closed?
hundredDoors.hallway.doors.forEach(function(door){
    assert.equal(door,0);
});

//can we change the state of a door(create toggle function)?
assert(hundredDoors.hallway.toggle);

// can we change closed to open?
assert(hundredDoors.hallway.toggle(0) === 1);

// can we change open to closed?
assert(hundredDoors.hallway.toggle(1) === 0); 

//are all doors in the correct state after first pass?
assert(hundredDoors.hallway.pass);

hundredDoors.hallway.pass().forEach( function( door ) {
    assert.equal( door, 1);
});

hundredDoors.hallway.doors.forEach( function(door) {
    assert.equal( door, 1);
});


//can we tell which pass we are on?
assert.equal(passes, 1);

//are all the doors in the correct state after each pass?
