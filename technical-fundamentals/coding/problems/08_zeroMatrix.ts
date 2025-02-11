// 8. *Zero Matrix*:

// Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.

// [1, 1, 2, 3]
// [3, 0, 1, 2]
// [2, 1, 2, 3]

// [1, 0, 2, 3]
// [0, 0, 0, 0]
// [2, 0, 2, 3]
type Matrix = number[][]

export default function zeroMatrix(matrix: Matrix) {
  const columnToSetZero: number[] = []
  const n = matrix[0]?.length || 0
  const m = matrix.length
  const newMatrix = Array.from({ length: m }, () => Array(n).fill(0))
  for (let r = 0; r < m; r++) {
    const setRowZero = matrix[r].includes(0)
    for (let c = 0; c < n; c++) {
      const value = matrix[r][c]
      if (!setRowZero) {
        newMatrix[r][c] = value
      }
      else {
        if (value !== 0) continue
        columnToSetZero.push(c)
      }
    }
  }
  for (let c = 0; c < columnToSetZero.length; c++) {
    for (let m = 0; m < matrix.length; m++) {
      newMatrix[m][columnToSetZero[c]] = 0
    }
  }
  return newMatrix
}