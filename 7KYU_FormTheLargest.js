/**
 * Task
 * Given a number , Return _The Maximum number _ could be formed from the digits of the number given .
 * Notes
 * Only Natural numbers passed to the function , numbers Contain digits [0:9] inclusive !alt !alt
 * Digit Duplications could occur , So also consider it when forming the Largest !alt
 * Input >> Output Examples:
 * maxNumber (213) ==> return (321)
 * Explanation:
 * As 321 is _The Maximum number _ could be formed from the digits of the number *213*** .
 *
 */

console.log(maxNumber(213))
console.log(maxNumber(566797))

function maxNumber(n){
    let arrSet = n.toString().split('').sort(function (a,b) {
        return a-b;
    }).reverse()
    return Number.parseInt(arrSet.join(''))
}