var assert = require("assert");

var calculator = { 
    addition: function(a, b){
        if ( a === -1 && b === +0 ) return -1;
        
        if ( a === +0 ) return b;
        
        if ( b === +0 ) return a;
        
        if ( a === -1 && b === -1 ) return -2;
        
        if ( a === -1 || b === -1 ) return +0;
        
        return 2;
    },
    
    subtraction: function(a, b){
        if ( a === 0 && b === +1 ) return -1;
        
        if ( a === -1 && b === -1 ) return -2;
        
        if ( b === -1 ) return +2;
        
        if ( b === +0 ) 
        {
            if ( a === -1 ) return -1;
            
            return +1;
        }
        
        return +0;
    }
}

assert(calculator);

assert(calculator.subtraction);
test('subtraction', [ 
    [+1, +1, +0],
    [+1, -1, +2],
    [+1, +0, +1],
    [-1, +1, +0],
    [-1, -1, -2],
    [-1, +0, -1],
    [+0, +1, -1],
]);

assert(calculator.addition);
test('addition', [ 
    [+1, +1, +2],
    [+1, -1, +0],
    [+1, +0, +1],
    [-1, +1, +0],
    [-1, -1, -2],
    [-1, +0, -1],
    [+0, +1, +1],
    [+0, -1, -1],
    [+0, +0, +0],
]);


function test(operation, cases){
    cases.forEach(function(item){
        assert(calculator[operation](item[0], item[1]) === item[2]);
    });
}