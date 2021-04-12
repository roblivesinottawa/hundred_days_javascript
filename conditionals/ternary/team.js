const avengers = ['Hulk', 'Captain America', 'Iron Man', 'Thor', 'Black Widow', 'Hawkeye']
avengers.push('Spider Man')
const message = avengers.length <= 4 ? `Team Size: ${avengers.length}` : `Too many heroes on the team`
console.log(avengers)
console.log(message)