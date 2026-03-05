// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

// BEGIN (write your solution here)
export default (matrixA, matrixB) => {
  const rowsA = matrixA.length
  const columsA = matrixA[0].length
  const rowsB = matrixB.length
  const columsB = matrixB[0].length
   const result = []

if(columsA !== rowsB) {
  return null
}

  for(let i = 0; i < rowsA;i++){
    const row = []
    for(let k = 0; k < columsB; k++){
    let sum = 0
    for(let j = 0; j < columsA; j++) {
      sum += matrixA[i][j] * matrixB[j][k]

    }
    row.push(sum)
    }
    result.push(row)
  }
  return result

}
// END

