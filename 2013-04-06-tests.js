var assert = require("assert"),
    hundredDoors = require("./2013-04-06-code");

/**
 * test: do we have a hallway?
 * test: do we have doors in our hallway?
 * test: do we have 100 doors?
 * test: are all the doors closed?
 * do: PASS 1 -- take a walk down the hallway, change the state of the doors
 * test: are all the doors open?
 * do: PASS 2 -- take a walk down the hallway, change the state of the doors
 * test: is every EVEN door closed? is every ODD door open?
 * do: PASS 3 -- take a walk down the hallway, change the state of the doors
 * test: does the hallway match our expected hallway state?
 */
 var hallway = {
    doors: [100]    
};
 
 assert( hallway );
 assert( hallway.doors );
 assert( hallway.doors.length == 1);
 
 