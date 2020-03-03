/**
 * Write a function that returns the count of characters that have to be removed in order to get a
 * string with no consecutive repeats.
 * Note: This includes any characters
 * Examples
 * 'abbbbc'  => 'abc'    #  answer: 3
 * 'abbcca'  => 'abca'   #  answer: 2
 * 'ab cca'  => 'ab ca'  #  answer: 1
 *
 */

console.log(countRepeats('abbbbc'));
console.log(countRepeats('abbcca'));

function countRepeats(str) {
    let arr = str.split("");
    let startSize = arr.length;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]===arr[i+1]){
            arr.splice(i,1);
            i--;
        }
    }
    return startSize-arr.length;
}