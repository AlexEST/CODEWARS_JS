/**
 * Complete the greatestProduct method so that it'll find the greatest product of five consecutive
 * digits in the given string of digits.
 * For example:
 * greatestProduct("123834539327238239583") // should return 3240
 * The input string always has more than five digits.
 * Adapted from Project Euler.
 *
 *
 */
console.log(greatestProduct("123834539327238239583"));
console.log(greatestProduct("92494737828244222221111111532909999"));

function greatestProduct(input) {
    let arr = input.split("");
    let sum = 1;
    let max = 0;
    for (let i = 0; i < arr.length-4; i++) {
        for (let j = i; j < i+5; j++) {
            sum *= Number(arr[j]);
        }
        if (sum > max){
            max=sum;
        }
        sum = 1;
    }
    return max;
}