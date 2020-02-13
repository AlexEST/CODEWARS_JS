/**
 * Create a function that returns the lowest product of 4 consecutive digits in a number given as a string.
 * This should only work if the number has 4 digits or more. If not, return "Number is too small".
 * Example
 * lowestProduct("123456789")--> 24 (1x2x3x4)
 * lowestProduct("35") --> "Number is too small"
 *
 *
 */

console.log(lowestProduct("123456789"));
console.log(lowestProduct("7377132380"));

function lowestProduct(input) {
    if (input.length<4) {
        return "Number is too small";
    }
    let numArr = [];
    let arr = input.split('').forEach(a => numArr.push(Number.parseInt(a)));
    if (numArr.find(e=> e===0) === 0){
       return 0;
    }
    let minProd = numArr[0]*numArr[1]*numArr[2]*numArr[3];
    let counter = 1;
    for (let i = 0; i < numArr.length; i++) {
        let number = numArr[i];
        for (let j = i+1; j < numArr.length; j++) {
            number *= numArr[j];
            counter++;
            if (counter===4 || number > minProd){
                if (number>minProd){
                    break;
                }
                if (number<minProd){
                    minProd = number;
                    break;
                }
            }
        }
        counter = 1;
    }
    return minProd;
}