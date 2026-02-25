export default function getLastWordLength(str) {
  const arr = str.trim().split(' ')
  return (arr[arr.length - 1].length)
}
