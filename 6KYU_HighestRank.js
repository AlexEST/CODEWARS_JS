/**
 * Complete the method which returns the number which is most frequent in the given input array.
 * If there is a tie for most frequent number, return the largest number among them.
 * Note: no empty arrays will be given.
 * Examples
 * [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
 * [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
 * [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
 *
 *
 */
console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]));
console.log(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]));

function highestRank(arr){
    arr.sort(function (a,b) {
        return a - b;
    })
    let counter = 1;
    let highArr = [0,0];//first - number from arr, second - count
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i]===arr[j]){
                counter++;
            } else {
                break;
            }
        }
        if (counter>highArr[1] || (counter===highArr[1] && arr[i]>highArr[0])){
            highArr[0] = arr[i];
            highArr[1] = counter;
        }
        if (counter>1){
            i += (counter-1);
        }
        counter = 1;
    }
    return highArr[0];
}