const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = ['c', 't', 'r', 'd']
}


Hangman.prototype.getPuzzle = function () {
    let puzzle = ''
    this.word.forEach((letter) => this.guessedLetters.includes(letter) || letter === ' ' ? puzzle += letter : puzzle += '*')
    
    return puzzle
}


const game1 = new Hangman('dog', 2)
console.log(game1.getPuzzle())
const game2 = new Hangman('Toronto', 3)
console.log(game2.getPuzzle())