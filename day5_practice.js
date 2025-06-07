// Arrow function to square a number
const square = (n) => n * n;

// Destructuring an object
const car = { brand: "Tesla", model: "Model Y" };
const { brand, model } = car;

// Template Literal to show car details
const carMsg = `The car is ${brand}, model ${model}`;
console.log(carMsg);

// Spread to copy and add new property
const newCar = { ...car, color: "Red" };
console.log(newCar);
