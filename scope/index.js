// global scope (name, getName)
// local scope (age)
// local scope (location)
// local scope (height)


let name = "Steve Jobs"

const getName = () => {
    console.log(name) // Steve Jobs
    let age = 30

    if (1 > 0) {
        console.log(name) // Steve Jobs
        console.log(age) // 30
        let location = "Ottawa"
    }
}

getName()
// console.log(age) // error: age is not defined

if (1 < 2) {
    console.log(name) // Steve Jobs
    let height = 72
    getName()
    console.log(height)
}

// console.log(height) // height is not defined