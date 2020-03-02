/**
 * Given a string, remove any characters that are unique from the string.
 * Example:
 * input: "abccdefee"
 * output: "cceee"
 *
 */

console.log(onlyDuplicates("abccdefee"));
console.log(onlyDuplicates('colloquial'));
console.log(onlyDuplicates('foundersandcoders'));

function onlyDuplicates(str) {
    let arr = str.split('');
    let compArr = [];
    for (let i = 0; i < arr.length; i++) {
        let call = 0;
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i]===arr[j]){
                call = 1;
                compArr.push(arr[i]);
                break;
            }
        }
        if (call === 0 && compArr.includes(arr[i])===false){
            arr.splice(i,1);
            i--;
        }
    }
    return arr.join('');
}
