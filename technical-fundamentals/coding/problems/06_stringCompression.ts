// 6. *String Compression*:

// Implement a method to perform basic string compression using the counts of repeated characters.
// For example, the string aabcccccaaa would become a2b1c5a3,
// If the "compressed" string would not become smaller than the original string,
// your method should return the original string.
// You can assume the string has only uppercase and lowercase letters (a - z).

export default function stringCompression(str: string): string {
  let compressed: string = ''
  let current = ''
  let amount = 0
  for (let i = 0; i < str.length; i++) {
    const char = str[i]
    if (char !== current) {
      amount = 1
      current = char
      compressed += char + amount
    } else {
      amount++
      compressed = compressed.slice(0, compressed.length - 1) + amount
    }
    if (compressed.length >= str.length) return str
  }
  return compressed
}