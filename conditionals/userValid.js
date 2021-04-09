const isUserValid = (bool) => bool

let answer = isUserValid(true) ? ("you have access") : "you don't have access"
let automatedAnswer = `you account # is ${isUserValid(true)}` ? '1234' : 'not available'

console.log(answer)
console.log(automatedAnswer)