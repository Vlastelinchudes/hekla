export default (kaka) => {
  let res = ''

  const keys = Object.keys(kaka).sort()
  const values = Object.values(kaka)
  if (keys.length === 0) {
    return ''
  }
  else if (keys.length ===1) {
    res = keys[0] + '=' + values[0]
    
  }
  else {
    for (let i = 0; i < keys.length; i++) {
      if (i < keys.length-1) {
        res = res + keys[i] + '=' + kaka[keys[i]] + '&' 
      } else {
        res = res +keys[i] + '=' + kaka[keys[i]]
      }

    }
  }
  return res
}
