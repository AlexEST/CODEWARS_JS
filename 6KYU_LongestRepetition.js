/**
 * For a given string s find the character c (or C) with longest consecutive repetition and return:
 * [c, l]
 * where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first.
 * For empty string return:
 * ["", 0]
 * Happy coding! :)
 *
 */

console.log(longestRepetition("aaaabb"));
console.log(longestRepetition("cbdeuuu900"));
console.log(longestRepetition("bbbaaabaaaa"));
console.log(longestRepetition("abbbbb"));
function longestRepetition(s) {
    let count = 0;
    let arr = s.split('');
    let finalArr = ["",0];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[i]===arr[j]){
                count++;
            } else {
                break;
            }
        }
        if (count>finalArr[1]){
            finalArr[0] = arr[i];
            finalArr[1] = count;
        }
        count = 0;
    }
    return finalArr;
}