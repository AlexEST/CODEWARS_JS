/**
 * Task
 * Given an array/list [] of integers , Find the product of the k maximal numbers.
 *
 * Notes
 * Array/list size is at least 3 .
 *
 * Array/list's numbers Will be mixture of positives , negatives and zeros
 * Repetition of numbers in the array/list could occur.
 * Input >> Output Examples
 * maxProduct ({4, 3, 5}, 2) ==>  return (20)
 * Explanation:
 * Since the size (k) equal 2 , then the subsequence of size 2 whose gives product of maxima is 5 * 4 = 20
 *
 */

console.log(maxProduct([4,3,5], 2));
console.log(maxProduct([10,8,7,9], 3));
console.log(maxProduct([8,6,4,6], 3));
console.log(maxProduct([10,2,3,8,1,10,4], 5));

function maxProduct(numbers, size){
    numbers.sort(function(a, b) { return a - b; }).reverse();
    let max = 1;
    for (let i = 0; i < size; i++) {
        max *= numbers[i];
    }
    return max;
}

