/**
 * Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"
 * Your task is to process a string with "#" symbols.
 * Examples
 * "abc#d##c"      ==>  "ac"
 * "abc##d######"  ==>  ""
 * "#######"       ==>  ""
 * ""              ==>  ""
 *
 *
 */

console.log(cleanString('abc#d##c'));
console.log(cleanString('abc##d######'));
console.log(cleanString('#######'))

function cleanString(s) {
    let arr = s.split('');
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != '#'){
            str += arr[i];
        }
        if (arr[i]==='#' && str.length > 0){
            str = str.slice(0,-1);
        }
    }
    return str;
};