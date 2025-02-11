// 3.  URLify:

// Write a method to replace all spaces in a string with '%20'.
// You may assume that the string has sufficient space at the end to hold the additional characters,
// and that you are given the "true" length of the string.

export default function URLify(s1: string): string {
  let result = ''
  for (let s = 0; s < s1.length; s++) {
    result += s1[s] === ' ' ? '%20' : s1[s]
  }
  return result
}