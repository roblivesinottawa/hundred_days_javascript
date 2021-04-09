let getNewScore = () => {
    // let score = 7 // this will throw an error as not defined

    if (1 < 2) {
        score = 3
    }

    console.log(score) // 3
}


getNewScore()
console.log(score) // 3
// if the above console.log is defined before the function call, it will throw an error