/**
 * A format for expressing an ordered list of integers is to use a comma separated list of either
 * individual integers or a range of integers denoted by the starting integer separated from the end integer
 * in the range by a dash, '-'. The range includes all integers in the interval including both endpoints.
 * It is not considered a range unless it spans at least 3 numbers. For example ("12, 13, 15-17")
 * Complete the solution so that it takes a list of integers in increasing order and returns a correctly
 * formatted string in the range format.
 *
 * Example:
 * solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
 * // returns "-6,-3-1,3-5,7-11,14,15,17-20"
 *
 */

console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));

function solution(list){
    list.sort(function (a,b) {
        return a-b;
    });
    let str = '';
    let counter = 0;
    for (let i = 0; i < list.length; i++) {
        let rowNum = list[i];
        for (let j = i; j < list.length; j++) {
            if (rowNum===list[j]){
                counter++;
            } else {
                break;
            }
            rowNum++;
        }
        if (counter>=3){
            str += list[i]+'-'+list[i+(counter-1)]+",";
            i += (counter-1);
        } else {
            str += list[i]+',';
        }
        counter=0;
    }
    return str.slice(0,str.length-1);
}