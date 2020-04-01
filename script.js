//Constant value of kelvin
const kelvin = 293;

//Constant value of celsius
const celsius = (kelvin - 273);

//Value of fahrenheit
var fahrenheit = celsius * (9/5) +
32;

//Remove decimal fahrenheit values
fahrenheit = Math.floor(fahrenheit);

//293 kelvin in fahrenheit
console.log(`The temperature is ${fahrenheit} degrees fahrenheit.`);

//Value of newton
let newton = celsius * (33/100);

//Remove decimal newton values
newton = Math.floor(newton);


console.log(`The temperature is ${newton} degrees newton.`);
