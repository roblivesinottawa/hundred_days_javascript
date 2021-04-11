const players = ["Thomas", "Steve", "Andy", "Vick"]

for (let i=0; i < 3 && i < players.length; i++){
    const num = i + 1
    const player = players[i]
    console.log(`${num}. ${player}`)
}