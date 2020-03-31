/**
 * Your task is to Find the next higher number (int) with same '1'- Bits.
 * I.e. as much '1' bits as before and output next higher than input. Input is always an int >0 up to 1<<30.
 * No bad cases or special tricks...
 * Some easy examples:
 * Input: 129  => Output: 130 (10000001 => 10000010)
 * Input: 127 => Output: 191 (01111111 => 10111111)
 * Input: 1 => Output: 2 (01 => 10)
 *
 *
 *
 */
let num = 127;
console.log(nextHigher(127));
console.log(nextHigher(129));
console.log(nextHigher(323423));

function nextHigher(n) {
    let nStr = Number(n).toString(2).split("").filter(a => a != Number(0)).join("");
    for (let i = n+1;; i++) {
        let numStr = Number(i).toString(2).split("").filter(a => a != Number(0)).join("");
        if (numStr===nStr){
            return i;
        }
    }
}