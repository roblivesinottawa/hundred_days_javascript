const getTip = amount => {
    if (typeof amount !== 'number') {
        throw Error('Argumant must be a number')
    } else {
        return amount * .25
    }
}

try {
    const result = getTip(20)
    console.log(result)
} catch (error) {
    console.log('Error!')
}