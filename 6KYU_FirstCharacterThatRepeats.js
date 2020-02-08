/**
 *  Find the first character that repeats in a String and return that character.
 *  firstDup('tweet') => 't'
 *  firstDup('like') => undefined
 *  This is not the same as finding the character that repeats first. In that case, an input of 'tweet' would yield 'e'.
 *
 *
 */

console.log(firstDup('tweet'));
console.log(firstDup('Ode to Joy'));
console.log(firstDup('ode to joy'));
console.log(firstDup('bar'));

function firstDup (s) {
    let arr = s.split('');
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i]===arr[j]){
                return arr[i];
            }
        }
    }
}