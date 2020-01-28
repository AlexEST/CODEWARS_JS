/**
 * Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
 * It should remove all values from list a, which are present in list b.
 * array_diff([1,2],[1]) == [2]
 *
 * If a value is present in b, all of its occurrences must be removed from the other:
 * array_diff([1,2,2,2,3],[2]) == [1,3]
 *
 */

console.log(array_diff([3,4], [3]));
console.log(array_diff([1,8,2], []));
console.log(array_diff([], [4,5]));

function array_diff(a, b) {
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (a[i]==b[j]){
                a.splice(i,1);
                i--;
                break;
            }
        }
    }
    return a;
}