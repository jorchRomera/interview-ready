// 5. *One Away*:

// There are three types of edits that can be performed on strings:
// insert a character, remove a character, or replace a character.
// Given two strings, write a function to check if they are one edit (or zero edits) away.

export default function isOneAway(str1: string, str2: string): boolean {
  let a = 0
  let b = 0
  let counter = 0
  const aL = str1.length
  const bL = str2.length
  if (Math.abs(aL - bL) > 1) return false
  for (let i = 0; i < Math.max(aL, bL); i++) {
    if (str1[a] !== str2[b]) {
      counter++
      if(str1[a] === str2[b + 1]) a--
      if(str1[a + 1] === str2[b]) b--
    }
    if (counter > 1) return false
    a++
    b++
  }
  return true
}
