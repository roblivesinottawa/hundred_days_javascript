fact = x => x === 0 ? 1 : x * fact(x - 1)
console.log(fact(5))