const getScore = (name="Anonymous", score=0) => `Name: ${name} Score: ${score}`
const text = getScore(undefined, 10)
console.log(text) 