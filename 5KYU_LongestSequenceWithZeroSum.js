/**
 * Write a method which takes an array of integers (positive and negative) and returns the longest
 * contiguous sequence in this array, which total sum of elements equal 0.
 * For example:
 * maxZeroSequenceLength([25, -35, 12, 6, 92, -115, 17, 2, 2, 2, -7, 2, -9, 16, 2, -11])
 * Should return [92, -115, 17, 2, 2, 2], because this is the longest zero-sum sequence in the array.
 *
 *
 */

var maxZeroSequence = function(arr) {
    let zeroSum = [];
    let counter = 1;
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        for (let j = i+1; j < arr.length; j++) {
            num += arr[j];
            counter++;
            if (num===0 && counter>zeroSum.length){
                zeroSum = arr.slice(i,j+1);
            }
        }
        counter = 1;
    }
    return zeroSum;
}

console.log(maxZeroSequence([25, -35, 12, 6, 92, -115, 17, 2, 2, 2, -7, 2, -9, 16, 2, -11]));