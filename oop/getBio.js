const Person = function(firstName, lastName, age, likes = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
}

Person.prototype.getBio = function() {
    let bio = `${this.firstName} is ${this.age}. `

    this.likes.forEach(like => {
        bio += `${this.firstName} likes ${like}. `
    })

    return bio
}

// create an instance of Person

const person = new Person('Steve', 'Rogers', 96, ['1920s music', 'military culture'])
console.log(person.getBio())
const person1 = new Person('Tony', 'Stark', 47, ['electronics', 'physics'])
console.log(person1.getBio())