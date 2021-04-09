const marvelHero = {
    name: 'Tony Stark',
    power: 'intelligence',
    born: 'May 29 1970',
    origin: 'New York'
}

const dcHero = {
    name: 'Batman',
    power: 'billionaire',
    born: 'April 17 1978',
    origin: 'Gotham City'
}

const getSummary = hero => console.log(`${hero.name} is from ${hero.origin}`)


getSummary(marvelHero)
getSummary(dcHero)

