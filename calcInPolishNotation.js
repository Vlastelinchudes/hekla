// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

// BEGIN (write your solution here)
export default function calcInPolishNotation(arr) {
  let stack = []
  let kaka
  let popo
  for (let item of arr) {
    switch (item){
    case '+':
      popo = stack.pop()
      kaka = stack.pop()
      stack.push(kaka + popo);
      break
    case '-':
      popo = stack.pop()
      kaka = stack.pop()
      stack.push(kaka - popo);
      break
    case '*':
      popo = stack.pop()
      kaka = stack.pop()
      stack.push(kaka * popo);
      break
    case '/':
      if(stack.at(-1)===0) {return null}
      popo = stack.pop()
      kaka = stack.pop()
      stack.push(kaka / popo);
      break
    default:
      stack.push(item)
  }
  }
  return (stack.pop())
}
// END

