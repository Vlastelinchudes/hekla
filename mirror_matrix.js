// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

// BEGIN (write your solution here)
export default (arr) => {
  const rows = arr.length -1
  const cols = arr[0].length -1
  const stack = []
  const newarr = arr
  for (let i = 0; i <=rows; i++) {
    for (let j = 0; j <=cols; j++) {
      if (j <= cols/2) {
        stack.push(arr[i][j])
      }
      else {
        newarr[i][j] = stack.pop()
      }
    }
  }
  return newarr
}
// END

