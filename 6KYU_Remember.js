/**
 * Write a function that takes a string and returns an array of the repeated characters
 * (letters, numbers, whitespace) in the string.
 * If a charater is repeated more than once, only show it once in the result array.
 * Characters should be shown by the order of their first repetition. Note that this may be different
 * from the order of first appearance of the character.
 * Characters are case sensitive.
 * For F# return a "char list"
 *
 * Examples:
 * remember("apple") => returns ["p"]
 * remember("apPle") => returns []          // no repeats, "p" != "P"
 * remember("pippi") => returns ["p","i"]   // show "p" only once
 * remember('Pippi') => returns ["p","i"]   // "p" is repeated first
 *
 *
 */


console.log(remember("apple"));
console.log(remember("pippi"));
console.log(remember("limbojackassin the garden")); // ["a", "s", "i", " ", "e", "n"]
console.log(remember("Y9YsZSpVWIfV96slEc 3 U6qslh g1O1SJgpVt")); // ['Y', 'V', '9', 's', ' ', '6', 'l', '1', 'S', 'g', 'p']
console.log(remember("tc VF7 l U gs btoP UA   Wwu"));

function remember(str) {
    let arr = str.split('');
    let map = new Map();
    let call = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i]===arr[j] && arr[j] != null){
                if (call===0){
                    map.set(arr[i], j);
                }
                arr[j] = null;
                call = 1;
            }
        }
        call = 0;
    }
    map = new Map([...map].sort(function (a,b) {
        return a[1]-b[1];
    }));
    let retArr = [];
    for (const [key,value] of map){
        retArr.push(key);
    }
    return retArr;
}