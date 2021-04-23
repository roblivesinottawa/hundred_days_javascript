// currying is the process of converting a function with several arguments into a sequence of functions that each takes a single argument.
const createTipper = baseTip => amount => baseTip * amount

const tip20 = createTipper(.2)
const tip30 = createTipper(.3)

console.log(tip20(100)) //20
console.log(tip30(80)) //24


// OLD WAY
function create_tipper(baseTip){
    return function(amount) {
        return baseTip * amount
    }
}

let tip$20 = create_tipper(.2)
let tip$30 = createTipper(.3)
console.log(tip$20(100))
console.log(tip$30(80))