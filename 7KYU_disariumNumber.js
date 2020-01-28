/**
 * Disarium number is the number that The sum of its digits powered with their
 * respective positions is equal to the number itself.
 *
 * Task
 * Given a number, Find if it is Disarium or not .
 *
 *
 */

console.log(disariumNumber(89));
console.log(disariumNumber(564));
console.log(disariumNumber(1024));
console.log(disariumNumber(135));
console.log(disariumNumber(136586));

function disariumNumber(n){
    let arr = String(n).split('');
    let disNum = 0;
    for (let i = 0; i < arr.length; i++) {
        disNum += Math.pow(Number(arr[i]),i+1);
    }
    if (disNum==n){
        return 'Disarium !!'
    }else{
        return 'Not !!'
    }
}

