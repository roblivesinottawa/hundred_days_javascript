class Person {
    constructor(firstName, lastName, age, origin){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.origin = origin
      
    }
    getInfo() {
        let bio = `${this.firstName} is ${this.age} and he is from ${this.origin}.`;
        return bio
        
    }
    setName(fullName) {
        const fullname = `${this.firstName} ${this.lastName}`
        return fullname
    }
}

class Employee extends Person {
    constructor (firstName, lastName, age, origin, position) {
        super(firstName, lastName, age, origin)
        this.position = position
    }
    getInfo() { // this overrides the method defined up above.
        let bio =  `Mr. ${this.lastName} is a ${this.position}.`
        return bio
    }
    yearsLeft() {
        return `${this.lastName} has ${65 - this.age} years left until he retires.`
    }
    
}


class Student extends Person {
    constructor (firstName, lastName, age, origin, occupation, grade) {
        super(firstName, lastName, age, origin) 
        this.occupation = occupation
        this.grade = grade

    }

    updateGrade(newGrade) {
        this.grade += newGrade
    }
    getBio() {
        const gradeStatus = this.grade >= 70 ? 'passed' : 'failed'
        return `${this.firstName} has ${gradeStatus} the class with a ${this.grade} grade.`
    }

}

// define class instances


const person = new Person('John', 'Howard', 45, 'Los Angeles')
console.log(person)


const employee = new Employee('John', 'Howard', 45, 'Los Angeles', 'senior developer')
console.log(employee)
console.log(employee.getInfo())
console.log(employee.yearsLeft())

const student = new Student('Michael', 'Jordan', 17, 'London, Ontario', 'CompSci student', 95)
console.log(student)
console.log(student.getBio())
