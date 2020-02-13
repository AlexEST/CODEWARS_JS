/**
 * You are given an array of integers. Your task is to sort odd numbers within the array in ascending order,
 * and even numbers in descending order.
 * Note that zero is an even number. If you have an empty array, you need to return it.
 * For example:
 * [5, 3, 2, 8, 1, 4]  -->  [1, 3, 8, 4, 5, 2]
 * odd numbers ascending:   [1, 3,       5   ]
 * even numbers descending: [      8, 4,    2]
 *
 *
 */

console.log(sortArray([5, 3, 2, 8, 1, 4]));

function sortArray(array) {
    let temp = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
            if (array[i]%2 !== 0){
                if (array[i]>array[j] && array[j]%2 !== 0){
                    temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
            }
            if (array[i]%2 === 0){
                if (array[i]<array[j] && array[j]%2 === 0){
                    temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
            }
        }
    }
    return array;
}