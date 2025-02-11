// 2. *Check Permutation*:

// Given two strings, write a method to decide if one is a permutation of the other.

export default function checkPermutations(s1: string, s2: string): boolean {
  const hash: Record<string, number> = {}

  for (let i = 0; i < s1.length; i++) {
    if (!hash[s1[i]]) hash[s1[i]] = 0
    hash[s1[i]]++
  }

  for (let i = 0; i < s2.length; i++) {
    if (!hash[s2[i]]) return false
    hash[s2[i]]--
  }

  return Object.values(hash).filter(value => value !== 0).length === 0
}
