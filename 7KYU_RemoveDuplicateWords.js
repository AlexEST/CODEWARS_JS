/**
 * Your task is to remove all duplicate words from a string, leaving only single (first) words entries.
 * Example:
 * Input:
 * 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
 * Output:
 * 'alpha beta gamma delta'
 *
 *
 */

console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'));

function removeDuplicateWords (s) {
    let unSet = new Set(s.split(' '));
    let str = "";
    unSet.forEach(word => str += word+' ');
    return str.trim();
}
