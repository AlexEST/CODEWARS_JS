/**
 * Your job is to write a function which increments a string, to create a new string.
 * If the string already ends with a number, the number should be incremented by 1.
 * If the string does not end with a number. the number 1 should be appended to the new string.
 *
 * Examples:
 * foo -> foo1
 * foobar23 -> foobar24
 * foo0042 -> foo0043
 * foo9 -> foo10
 * foo099 -> foo100
 * Attention: If the number has leading zeros the amount of digits should be considered.
 * 
 */

console.log(incrementString( 'foobar23'));
console.log(incrementString('foo099'));
console.log(incrementString('foobar99'));

function incrementString (strng) {
    let arr = strng.split("");
    let numStr = "";
    for (let i = 0; i < arr.length; i++) {
        if (parseInt(arr[i]) || arr[i] === '0'){
            numStr += arr[i];
        }
    }
    let oldLength = numStr.length;
    let num = Number(numStr) + 1;
    let newLength = String(num).length;
    if (oldLength-newLength<0){
        strng += " ";
    }
    return strng.substr(0,strng.length-newLength)+num;
}