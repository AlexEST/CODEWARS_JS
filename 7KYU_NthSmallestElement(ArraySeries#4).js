/**
 * Task
 * Given an array/list [] of integers , Find the Nth smallest element in this array of integers
 * Notes
 * Array/list size is at least 3 .
 * Array/list's numbers could be a mixture of positives , negatives and zeros .
 * Repetition in array/list's numbers could occur , so don't Remove Duplications .
 * Input >> Output Examples
 * nthSmallest({3,1,2} ,2) ==> return (2)
 * Explanation:
 * Since the passed number is 2 , Then * the second smallest element in this array/list is 2*
 * nthSmallest({15,20,7,10,4,3} ,3) ==> return (7)
 * Explanation:
 * Since the passed number is 3 , Then * the third smallest element in this array/list is 7*
 *
 *
 */

console.log(nthSmallest([3,1,2],2))
console.log(nthSmallest([15,20,7,10,4,3],3))
console.log(nthSmallest([-102,-16,-1,-2,-367,-9],5))

function nthSmallest(arr, pos){
    arr.sort(function (a,b) {
        return a-b;
    })
    return arr[pos-1];
}