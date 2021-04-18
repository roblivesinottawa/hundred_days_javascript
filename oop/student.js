class Person {
    constructor(firstName, lastName, age, likes = []){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }

getBio() {
    let info = `${this.firstName} is ${this.age} years old.`

    this.likes.forEach((like) => {
        info += ` ${this.firstName} likes to ${like}.`
    })

    return info
}
fullName() {
    return `${this.firstName} ${this.lastName}`
}
}

class Student extends Person {
    constructor (firstName, lastName, age, grade) {
        super(firstName, lastName, age)
        this.grade = grade
    }
    updateGrade(change) {
        this.grade += change
    }
    getInfo(){
        const status = this.grade >= 70 ? 'passing' : 'failing'
        return `${this.firstName} is ${status} the class.`
    }
}

const person = new Person('Donny', 'Howard', 15, ['play videogames', 'code'])
person.grade = 90
console.log(person.getBio())
