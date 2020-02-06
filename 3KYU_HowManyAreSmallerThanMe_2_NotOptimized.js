/**
 * This is a hard version of How many are smaller than me?. If you have troubles solving this one,
 * have a look at the easier kata first.
 * Write
 * function smaller(arr)
 * that given an array arr, you have to return the amount of numbers that are smaller than arr[i] to the right.
 *
 * For example:
 * smaller([5, 4, 3, 2, 1]) === [4, 3, 2, 1, 0]
 * smaller(1, 2, 0) === [1, 1, 0]
 * smaller([5, 4, 7, 9, 2, 4, 4, 5, 6]) === [4, 1, 5, 5, 0, 0, 0, 0, 0]
 *
 */

console.log(smaller([5, 4, 3, 2, 1]));
console.log(smaller([1, 2, 0]));
console.log(smaller([5, 4, 7, 9, 2, 4, 4, 5, 6]));
console.log(smaller([1, 1, -1, 0, 0]));

function smaller(arr) {
    let finalArr = [];
    for (let i = 0; i < arr.length; i++) {
        let subArr = arr.slice(i);
        let num = subArr[0];
        subArr.sort(function (a,b) {
            return a-b;
        })
        let index = binary_search(subArr, num);
        let counter = 1;
        while (true){
            if (subArr[index]===subArr[index-counter]){
                index -= counter;
            } else {
                break;
            }
        }
        finalArr[i] = index;
    }
    return finalArr;
}

function binary_search(subArr, num) {
    let low = 0;
    let high = subArr.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let guess = subArr[mid];
        if (guess === num) {
            return mid;
        }
        if (guess > num) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return null;
}