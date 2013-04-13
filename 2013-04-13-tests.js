var assert = require("assert"),
    hundredDoors = require("./2013-04-13-code");

// test: do we have a Hallway?
assert(hundredDoors.hallway);

// test: do we have Doors in our Hallway?
assert(hundredDoors.hallway.doors);

// test: do we have 100 Doors?
assert.equal(hundredDoors.hallway.doors.length, 10);
// test: are all the Doors "closed"?
assert.equal(hundredDoors.hallway.doors[0],0);
// do: PASS 1 -- take a walk down the hallway, change the state of the doors

// test: are all the Doors "open"?

// do: PASS 2 -- take a walk down the hallway, change the state of the doors

// test: is every EVEN Door "closed"? is every ODD Door "open"?

// do: PASS 3 -- take a walk down the hallway, change the state of the doors

// test: does the Hallway match our expected state?


