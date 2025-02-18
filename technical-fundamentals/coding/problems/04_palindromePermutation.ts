// 4. *Palindrome Permutation*:

// Given a string, write a function to check if it is a permutation of a palindrome.
// A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters.
// The palindrome does not need to be limited to just dictionary words.
// ```
// EXAMPLE
// Input: Tact Coa
// Output True (permutations: "taco cat", "atco cta", etc.)
// ```

export default function palindromePermutation (str: string): boolean {
  const set: Record<string, number> = {}
  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase()
    if (char === ' ') continue
    if (!set[char]) set[char] = 1
    else set[char] -= 1
  }
  return Object.values(set).filter(value => value !== 0 ).length <= 1
}