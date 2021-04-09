let pub = {
    name: "Queen's Tavern",
    capacity: 50,
    count: 0,
    checkAvailability: function (partysize) {
        let seatsLeft = this.capacity - this.count
        if (partysize <= seatsLeft) {
            return `There are ${seatsLeft} seats availble.`
        }
    }
}

console.log(pub.checkAvailability(10))