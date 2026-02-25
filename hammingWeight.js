export default function hammingWeight(num) {
  const gaga = num.toString(2)
  let serun = 0
  for (let char of gaga) {
    if (char === '1') {
      serun++
    }
  }
  return serun
}
