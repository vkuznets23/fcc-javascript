//tast//
//Deep in his mountain-side meteorology lab, the mad scientist Kelvin has mastered weather prediction.
//Recently, Kelvin began publishing his weather forecasts on his website. However there’s a problem: All of his forecasts describe the temperature in Kelvin.
//With our knowledge of JavaScript, let’s convert Kelvin to Celsius, then to Fahrenheit.
//For example, 283 K converts to 10 °C which converts to 50 °F.

const kelvin = 293;
const celsius = kelvin - 273;
//after converting we get the decimal number
const fahrenheit = Math.floor(celsius * 9/5) + 32;
const newton = Math.floor(celsius * (33/100));

console.log(`Here is Kelvin = ${kelvin}, Celsius = ${celsius}, Fahrenheit = ${fahrenheit} and Newton = ${newton}`);