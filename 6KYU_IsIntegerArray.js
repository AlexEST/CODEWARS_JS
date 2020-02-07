/**
 * Write a function with the signature shown below:
 * function isIntArray(arr) {
 * return true
 * }
 * returns true / True if every element in an array is an integer or a float with no decimals.
 * returns true / True if array is empty.
 * returns false / False for every other input.
 *
 */

console.log(isIntArray([]));
console.log(isIntArray(NaN));
console.log(isIntArray(undefined));
console.log(isIntArray(null));
console.log(isIntArray([1, 2, 3, 4]));
console.log(isIntArray([1, 2, 3, NaN]));

function isIntArray(arr) {
    if (Array.isArray(arr) === false){
        return false;
    }
    if (arr.length==0){
        return true;
    }
    for (let i = 0; i < arr.length; i++) {
        if ( Number.isInteger(arr[i]) === false || isNaN(arr[i])){
            return false;
        }
    }
    return true;
}