const fahrenheitToCelsius = fahrenheit => (fahrenheit - 32) * (5 / 9)
const celsiusToFahrenheit = celsius => (celsius * 9 / 5) + 32


far = fahrenheitToCelsius(100)
console.log(far)

cel = celsiusToFahrenheit(40)
console.log(cel)

