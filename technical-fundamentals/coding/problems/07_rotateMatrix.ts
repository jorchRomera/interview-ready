// 7. *Rotate Matrix*:

// Given an image represented by an NxN matrix, where each pixel in the image is 4
// bytes, write a method to rotate the image by 90 degrees. Can you do this in place?

type Matrix = number[][]

export default function rotateMatrix(matrix: Matrix) {
  const map: Record<string, number> = {}
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      const value = map[`${i}${j}`] || matrix[i][j]
      map[`${j}${matrix.length - 1 - i}`] = matrix[j][matrix.length - 1 - i]
      matrix[j][matrix.length - 1 - i] = value
    }
  }
}

// 0,0 - 0,1
// 0,1 - 1,1
// 1,0 - 0,0
// 1,1 - 1, 0