let age1 = 16
let adult = age >= 18 ? console.log('you are an adult') : console.log('you are not an adult')



let age
let isChild = age <= 7
let isSenior = age >= 65

const checkAge = (age) => {
    if (isChild) {
        return 'it is free for you'
    } else if (isSenior) {
        return 'you get a discount'
    } else {
        return 'welcome'
    }
} 

console.log(checkAge(30))



const drinkingAge = 21
let age = 34
let canDrink = age >= 21 ? 'you can drink' : 'you cannot drink'
console.log(canDrink)

let isAccountActive = false
let checkAccount = !isAccountActive ? console.log('Account is locked') : console.log('Account is open')