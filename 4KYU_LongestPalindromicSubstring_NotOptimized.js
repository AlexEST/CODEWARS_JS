/**
 * Longest Palindromic Substring (Linear)
 * A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g.,
 * 'madam' or 'racecar'. Even the letter 'x' is considered a palindrome.
 * For this Kata, you are given a string s. Write a function that returns the longest contiguous
 * palindromic substring in s (it could be the entire string). In the event that there are multiple
 * longest palindromic substrings, return the first to occur.
 * I'm not trying to trick you here:
 * You can assume that all inputs are valid strings.
 * Only the letters a-z will be used, all lowercase (your solution should, in theory, extend to more
 * than just the letters a-z though).
 * NOTE: Quadratic asymptotic complexity (O(N^2)) or above will NOT work here
 *
 * Examples
 * Basic Tests
 * Input: "babad"
 * Output: "bab"
 * (Note: "bab" occurs before "aba")
 *
 *
 */

console.log(longest_palindrome('banana'));
console.log(longest_palindrome('abba'));
console.log(longest_palindrome('cbbd'));
console.log(longest_palindrome('zz'));
console.log(longest_palindrome('m'));
console.log(longest_palindrome(''));

function longest_palindrome(s) {
    if (s===''){
        return '';
    }
    let arr = s.split('');
    let longPal = ""+arr[0];
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        str = ""+arr[i];
        for (let j = i+1; j < arr.length; j++) {
            str += arr[j];
            let strRev = str.split('').reverse().join("");
            if (str===strRev && str.length > longPal.length){
                longPal = str;
            }
        }
        if (longPal.length>(arr.length-i)){
            return longPal;
        }
    }
    return longPal;
}

