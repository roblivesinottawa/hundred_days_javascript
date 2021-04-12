const pet = {
    name: 'Scooter',
    bark() {
        return `${this.name}: Woof! `
    }
}

console.log(pet.name)
console.log(pet.bark())