/**
 * Task
 * Given a list of digits, return the smallest number that could be formed from these digits,
 * using the digits only once (ignore duplicates).
 * Notes:
 * Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
 * Input >> Output Examples
 * minValue ({1, 3, 1})  ==> return (13)
 * Explanation:
 * (13) is the minimum number could be formed from {1, 3, 1} , Without duplications
 *
 */

console.log(minValue([4, 7, 5, 7]))
console.log(minValue([3, 6, 5, 5, 9, 8, 7, 6, 3, 5, 9]))

function minValue(values){
    let arrSet = new Set(values.sort(function (a,b) {
        return a-b;
    }))
    return Number.parseInt(Array.from(arrSet).join(''))
}