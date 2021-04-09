console.log('Tony Stark' == 'tony stark') //false

console.log('30' == 30) //true

// let name = 'Steve Rogers'

// if (name.length > 10) {
//     console.log(true)
// } else {
//     console.log(false)
// }

let name = 'Bruce Banner'
let checkLength = name.length > 10 ? true : false
console.log(checkLength)


let temp = 35
let checkWeather = temp > 30 ? "hot" : "not hot"
console.log(checkWeather)

let population = 300.000
let country = population > 500.000 ? "crowded" : "not crowded"
console.log(country)

let num = 5
let result = num > 0 ? `${num} is positive` : `${num} is negative`
console.log(result)

let n = 3.4
let res = n >= 0 ? `${n} is above zero` : `${n} is below zero`
console.log(res)