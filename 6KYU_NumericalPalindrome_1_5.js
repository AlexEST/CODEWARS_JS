/**
 *
 *
 *
 */

console.log(palindrome(6,4));
console.log(palindrome(75,1));
console.log(palindrome("ACCDDCCA",3));

function palindrome(num,s) {
    if (Number.isInteger(num)===false || num < 0 || Number.isInteger(s)===false || s < 0 ){
        return "Not valid"
    }
    let arr = [];
    while (arr.length !== s){
        if (num>10 && parseInt(num.toString().split("").reverse().join("")) === num){
            arr.push(num);
        }
        num++;
    }
    return arr;
}