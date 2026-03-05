// @ts-check

// BEGIN (write your solution here)
export function rotateRight (matrix) {
  let result = [];
  for (let i = matrix.length - 1; i >= 0; i--) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (!result[j]) {
        result[j] = [];
      }
      result[j].push(matrix[i][j]);
    }
  }
  return result;
}

export function rotateLeft (coll)  {
  const result = [];
  let arr = [];
  let indexStr = coll[0].length - 1;
  let indexColum = 0;
  while (indexStr >= 0) {
    arr.push(coll[indexColum][indexStr]);
    indexColum += 1;
    if (indexColum >= coll.length) {
      indexStr -= 1;
      indexColum = 0;
      result.push(arr);
      arr = [];
    }
  }
  return result;
};
// END

