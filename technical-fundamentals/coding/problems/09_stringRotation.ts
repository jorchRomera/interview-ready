// 9. *String Rotation*;

// Assume you have a method isSubstring which checks if one word is a substring of another.
// Given two strings, si and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring
// [e.g., "waterbottle" is a rotation of 'erbottlewat")

function isSubstring(s1: string, s2: string): boolean {
    return s1.includes(s2);
}

export default function stringRotation(s1: string, s2: string): boolean {
    const firstLetter = s2[0]
    for (let i  = 0; i < s1.length; i++) {
        if (s1[i] !== firstLetter) continue
        if(isSubstring(s1.slice(i) + s1.slice(0, i), s2)) return true
    }
    return false
}