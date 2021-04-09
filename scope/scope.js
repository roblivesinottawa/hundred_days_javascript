// define a variable in the global scope
const age = 21

const start = () => {
    const message = 'hello, world'
    const color = 'grey'
    const age = 18
    console.log(color) // grey
    console.log(age) // 18
    console.log(message) // hello, world
}

console.log(age) // 21

const stop = () => {
    const message = 'goodbye, world'
    const color = 'red'
    console.log(color) // red
    console.log(age) // 21
}

// console.log(message) // error: message is not defined

start()
stop()