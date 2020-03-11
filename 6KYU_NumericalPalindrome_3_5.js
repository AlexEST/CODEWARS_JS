/**
 * A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward.
 * Examples of numerical palindromes are: 2332, 110011, 54322345
 * For a given number num, write a function which returns an array of all the numerical palindromes contained
 * within each number. The array should be sorted in ascending order and any duplicates should be removed.
 * In this kata, single digit numbers and numbers which start or end with zeros (such as 010 and 00) are NOT
 * considered valid numerical palindromes.
 * If num contains no valid palindromes, return "No palindromes found". Otherwise, return "Not valid" if the
 * input is not an integer or is less than 0.
 *
 * Examples
 * palindrome(1221)      =>  [22, 1221]
 * palindrome(34322122)  =>  [22, 212, 343, 22122]
 * palindrome(1001331)   =>  [33, 1001, 1331]
 * palindrome(1294)      =>  "No palindromes found"
 * palindrome("1221")    =>  "Not valid"
 *
 */

console.log(palindrome(221122));

function palindrome(num) {
    if (Number.isInteger(num)===false || num < 0){
        return "Not valid"
    }
    let arr = num.toString().split("");
    let palArr = new Set();
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== "0"){
            let str = arr[i];
            for (let j = i+1; j < arr.length; j++) {
                str += arr[j];
                if (str.split("").reverse().join("")===str){
                    palArr.add(parseInt(str));
                }
            }
        }
    }
    if (palArr.size === 0){
        return "No palindromes found";
    }
    return Array.from(palArr).sort(function (a,b) {
        return a-b;
    });
}