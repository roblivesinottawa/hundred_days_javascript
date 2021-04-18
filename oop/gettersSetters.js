const person = {
    firstName: 'Steve',
    lastName: 'Rogers',
    age: 96,
    profession: "game developer",
    yearsAtRockstar: 10,
    yearsAtEpic: 4,
    get name() {
        return `${this.firstName} ${this.lastName}`
    },
    set name(name) {
        const names = name.trim().split()
        this.firstName = names[0]
        this.lastName = names[1]
    },
    get yearsAsDev() {
        return `${this.firstName} has worked ${this.yearsAtEpic + this.yearsAtRockstar} years as a game developer.`
    },
    set yearsAsDev(yearsAsDev) {
        this.yearsAtEpic = person['yearsAtEpic']
        this.yearsAtRockstar = person['yearsAtRockstar']
    }
}


console.log(person.name)
console.log(person.yearsAsDev)