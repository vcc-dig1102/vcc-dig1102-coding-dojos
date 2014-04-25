/**
 * If we consider all the multiples of 3 or 5 less than 10, we have the set of
 * { 3, 5, 6, 9 }. The sum of these integers is 23. 
 * 
 * If we consider the same multiples less than 20, we have the set 
 * { 3, 5, 6, 9, 12, 15 }, the sum of which is 50.
 * 
 * Find the sum of the multiples of 3 or 5 less than 1000.
 */

module.exports = {
    
    three : function (maxValue) {
        var multiThree = [];
        for (var three = 3; three < maxValue; three+= 3) {
            multiThree.push(three);
        }

        return multiThree;
    },
    
    five : function (maxValue) {
        if (maxValue < 6) return [];
        if (maxValue < 11) return [5, 10];
    },
    
};