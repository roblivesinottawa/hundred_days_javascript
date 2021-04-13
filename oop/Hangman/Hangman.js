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

Hangman.prototype.getGuess = function (guess) {
    guess = guess.toLowerCase()
    const isUnique = !this.guessedLetters.includes(guess)
    const isBadGuess = !this.word.includes(guess)

    if (isUnique) {
        this.guessedLetters.push(guess)
    }
    if (isUnique && isBadGuess) {
        this.remainingGuesses--
    }
}


const game1 = new Hangman('dog', 2)
console.log(game1.getPuzzle())
console.log(game1.remainingGuesses)