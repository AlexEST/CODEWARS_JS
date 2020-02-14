/**
 * Simple, given a string of words, return the length of the shortest word(s).
 * String will never be empty and you do not need to account for different data types.
 *
 */

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));

function findShort(s){
    let arr = s.split(" ");
    let min = arr[0].length;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length<min){
            min = arr[i].length;
        }
    }
    return min;
}