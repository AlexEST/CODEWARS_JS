/**
 * In this kata you have to create all permutations of an input string and remove duplicates, if present.
 * This means, you have to shuffle all letters from the input in all possible orders.
 *
 * Examples:
 * permutations('a'); // ['a']
 * permutations('ab'); // ['ab', 'ba']
 * permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
 *
 */
//
function permutations(string) {
    let permutationOptions = string;
    if (permutationOptions.length === 1) {
        return [permutationOptions];
    }
    const Permutations = new Set();
    const smallerPermutations = permutations(permutationOptions.slice(1));
    const firstOption = permutationOptions[0];
    for (let i = 0; i < smallerPermutations.length; i++) {
        const smallerPermutation = smallerPermutations[i];
        for (let j = 0; j <= smallerPermutation.length; j++) {
            const Prefix = smallerPermutation.slice(0, j);
            const Suffix = smallerPermutation.slice(j);
            Permutations.add(Prefix.concat([firstOption], Suffix));
        }
    }
    return Array.from(Permutations);
}

console.log(permutations('aabb'));