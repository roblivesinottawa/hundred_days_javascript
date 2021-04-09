const convertFahrenheit = fahrenheit => {
    return {
        fahrenheit: fahrenheit,
        kelvin: (fahrenheit + 459.67) * (5 / 9),
        celsius: (fahrenheit - 32) * (5 / 9)
    }
}

const temps = convertFahrenheit(100)
console.log(temps)