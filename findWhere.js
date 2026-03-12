export default (arr, obj) => {
  const search = (obj1, obj2) => {
    const keyss = Object.keys(obj1)
    const valuess = Object.values(obj1)
    let a = 0
    for (let k = 0; k < keyss.length; k++) {
      if (valuess[k] === obj2[keyss[k]]) {
        a++
      }
    }
    if (a === keyss.length) {
      return true
    } else return false
  }
  for (let i = 0; i < arr.length; i++) {
    if (search(obj, arr[i]) === true) {
      return arr[i]
    }
  }
  return null
}
