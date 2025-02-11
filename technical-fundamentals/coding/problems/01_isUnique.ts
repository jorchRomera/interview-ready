// 1. *Is Unique*:

// Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures?

export default function isUnique(str: string): boolean {
  for (let i = 0; i < str.length; i++) {
    for (let j = i+1; j < str.length; j++) {
      if (str[i] === str[j]) return false
    }
  }
  return true
  // const set: Set<string> = new Set()
  // for (let i = 0; i < str.length; i++) {
  //   if(set.has(str[i])) return false
  //   set.add(str[i])
  // }
  // return true
}
