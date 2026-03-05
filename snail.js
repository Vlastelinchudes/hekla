// @ts-check



// BEGIN (write your solution here)
export default (arr) =>{
  if (arr.length === 0) {return []}
  const res = []
  let top = 0
  let left = 0
  let right = arr[0].length -1
  let bottom = arr.length -1
  while (top <= bottom && left <= right) {
    for (let col = left; col <= right; col++) {
      res.push(arr[top][col])
    }
    top++
    for (let row = top; row <= bottom; row++) {
      res.push(arr[row][right])
    }
    right--
    if (top <= bottom) {
      for (let col = right; col >= left; col--) {
      res.push(arr[bottom][col])
    }
    bottom--
    }
    if (left <= right) {
      for (let row = bottom; row >= top; row--) {
      res.push(arr[row][left])
    }
    left++
    }
  }
  return res
}
// END
