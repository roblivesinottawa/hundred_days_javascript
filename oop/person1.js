const Person = function (firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
}

const personOne = new Person('Steve', 'Rogers', 96)
const personTwo = new Person('Tony', 'Stark', 'unknown')
const personThree = new Person('Bruce', 'Banner', 'unknown')

console.log(personOne)
console.log(personTwo)
console.log(personThree)