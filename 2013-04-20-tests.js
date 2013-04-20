var assert = require("assert"),
    hundredDoors = require("./2013-04-20-code");

//do we have a hallway?
assert(hundredDoors.hallway);

//do we have doors in the hallway?
assert(hundredDoors.hallway.doors);

//do we have 10 doors?
assert.equal(hundredDoors.hallway.doors.length, 10);
assert(hundredDoors.hallway.doors.length == 10);

//are all the doors closed?

//can we change the state of a door(create toggle function)?
//are all doors in the correct state after first pass?
//can we tell which pass we are on?
//are all the doors in the correct state after each pass?
