/**
 * You are given a list/array which contains only integers (positive and negative).
 * Your job is to sum only the numbers that are the same and consecutive. The result should be one list.
 * Extra credit if you solve it in one line. You can asume there is never an empty list/array
 * and there will always be an integer.
 * Same meaning: 1 == 1
 * 1 != -1
 *
 * #Examples:
 * [1,4,4,4,0,4,3,3,1] # should return [1,12,0,4,6,1]
 * """So as you can see sum of consecutives 1 is 1
 * sum of 3 consecutives 4 is 12
 * sum of 0... and sum of 2
 * consecutives 3 is 6 ..."""
 * [1,1,7,7,3] # should return [2,14,3]
 * [-5,-5,7,7,12,0] # should return [-10,14,12,0]
 *
 *
 */
console.log(sumConsecutives([1,4,4,4,0,4,3,3,1]));
console.log(sumConsecutives([1,1,7,7,3]));
console.log(sumConsecutives([-5,-5,7,7,12,0]));

function sumConsecutives(s) {
    for (let i = 0; i < s.length; i++) {
        let num = s[i];
        for (let j = i+1; j < s.length; j++) {
            if (num===s[j]){
                s[i] += s[j];
                s.splice(j,1);
                j--;
            } else {
                break;
            }
        }
    }
    return s;
}