/**
 * Write a function that takes an array/list of numbers and returns a number.
 * See the examples and try to guess the pattern:
 * EvenOdd([1,2,6,1,6,3,1,9,6]) => 393
 * EvenOdd([1,2,3]) => 5
 * EvenOdd([0,2,3]) => 3
 * EvenOdd([1,0,3]) => 3
 * EvenOdd([3,2])   => 6
 *
 */

console.log(EvenOdd([1,2,6,1,6,3,1,9,6]));
console.log(EvenOdd([1,2,3]));

function EvenOdd(arr){
    if (arr.length===1){
        return arr[0];
    }
    let num = arr[0]*arr[1];
    for (let i = 2; i < arr.length; i++) {
        if (i%2 === 0){
            num += arr[i];
        } else {
            num *= arr[i];
        }
    }
    return num;
}