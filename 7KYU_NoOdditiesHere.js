/**
 * Write a small function that returns the values of an array that are not odd.
 * All values in the array will be integers. Return the good values in the order they are given.
 * function noOdds( values )
 *
 *
 */

console.log(noOdds([1,2,3,4,5,6,7,8,9,10]));

function noOdds( values ){
    for (let i = 0; i < values.length; i++) {
        if (values[i]%2 != 0){
            values.splice(i,1);
        }
    }
    return values;
}