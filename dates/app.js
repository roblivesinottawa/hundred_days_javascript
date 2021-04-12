const now = new Date()
console.log(now)

const dateOne = new Date('April 11 2021 12:00:00')
const month = dateOne.getMonth() + 1
const day = dateOne.getDate()
const year = dateOne.getFullYear()

console.log(`${month}/${day}/${year}`)

const date = new Date('April 11 2021 12:00:00')
const timestamp = date.getTime()
console.log(timestamp)

