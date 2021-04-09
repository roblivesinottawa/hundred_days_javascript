function isVegan(guest) {
    
    let isGuestOneVegan = false
    let isGuestTwoVegan = true

    if (isGuestOneVegan && isGuestTwoVegan) {
        return `these are our vegan options, ${guest}`
    } else if (isGuestOneVegan || isGuestTwoVegan) {
        return `hello, ${guest}, we have both options: vegan and non-vegan`
    } else {
        return `hey ${guest} these are all the options on the menu`
    }
}

console.log(isVegan("john"))
