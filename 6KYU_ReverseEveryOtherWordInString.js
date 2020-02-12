/**
 * Reverse every other word in a given string, then return the string. Throw away any leading or
 * trailing whitespace, while ensuring there is exactly one space between each word.
 * Punctuation marks should be treated as if they are apart of the word in this kata.
 */

console.log(reverse("Reverse this string, please!"));
console.log(reverse("I really don't like reversing strings!"));

function reverse(str){
    let arr = str.split(" ");
    let s = "";
    for (let i = 0; i < arr.length; i++) {
        if (i>0 && i%2!=0){
            let strArr = arr[i].split("").reverse();
            let revWord = strArr.join('');
            s += revWord+" ";
        } else {
            s += arr[i]+" ";
        }
    }
    return s.trim();
}