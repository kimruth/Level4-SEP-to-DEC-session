// const multiplication = require('./operations');
// const addition = require('./operations');
const { multiplication, addition } = require ('./operations');

// const app = require('app');

// function multiplication(a, b) {
//     return a * b;
// }
const result = multiplication(3, 5);
console.log("Result is: " + result);

const resultat = addition(3, 3);
console.log("Result is: " + resultat);