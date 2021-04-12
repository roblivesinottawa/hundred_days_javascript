const getTip = amount => {
    if (typeof amount !== 'number') {
        throw Error('Argument must be a number')
    } else {
        return amount * .25
    }
}


const result = getTip(10)
// const result = getTip('10') // error
console.log(result)