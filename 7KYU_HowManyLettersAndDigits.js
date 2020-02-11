/**
 * Bob is a lazy man.
 * He needs you to create a method that can determine how many letters and digits are in a given string.
 * Example:
 * "hel2!lo" --> 6
 * "wicked .. !" --> 6
 * "!?..A" --> 1
 *
 */

console.log(countLettersAndDigits("hel2!lo"));

function countLettersAndDigits(input) {
    let count = 0;
    let arr = input.split('');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].match(/[a-z]/i) || arr[i].match(/[0-9]/i)){
            count++;
        }
    }
    return count;
}
