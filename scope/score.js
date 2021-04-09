let score = 5

let getScore = () => {
    let score = 3
    return `score: ${score}`
}

let res = getScore()
console.log(res)  // 3
console.log(score) // 5. goes all the way to the global scope