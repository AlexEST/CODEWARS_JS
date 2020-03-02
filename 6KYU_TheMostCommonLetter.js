/**
 * Find the most common letter (not space) in the string(always lowercase and 2 < words) and replace it with the letter.
 * If such letters are two or more, choose the one that appears in the string( earlier.
 * For example:
 * ('my mom loves me as never did', 't') => 'ty tot loves te as never did'
 * ('real talk bro', 'n') => 'neal talk bno'
 * ('great job go ahead', 'k') => 'grekt job go khekd'
 *
 */

console.log(replaceCommon('my mom loves me as never did', 't'));
console.log(replaceCommon('yyyaaa twwww ttt uuu ccca', 'p'));

function replaceCommon(string, letter) {
    let str = string.replace(/ /g,"");
    let arr = str.split("");
    let max = 1;
    let char = arr[0];
    for (let i = 0; i < arr.length; i++) {
        let counter = 1;
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i]===arr[j]){
                counter++;
                arr.splice(j,1);
                j--;
            }
        }
        if (counter>max){
            char = arr[i];
            max = counter;
        }
    }
    let nArr = string.split('');
    for (let i = 0; i < nArr.length; i++) {
        if (nArr[i]===char){
            nArr[i] = letter;
        }
    }
    return nArr.join('');
}