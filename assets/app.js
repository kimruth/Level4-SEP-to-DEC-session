// 1. Array

// 1.1) Definition :
// an Array is a data structure use to store multiple in a single variable.

// 1.2) Creation

let fruits = ['Apple', 'Banana', 'Orange']; // square brackets

let numbers = new Array (1, 2, 3, 4, 4, 5, 6); // Array constructor

console.log(fruits[0]);
console.log(fruits[2]);

console.log(numbers[0]);

fruits[2] = "Ananas"

console.log(fruits[2]);

// fruits[3] = 'Mango';
// console.log(fruits[3]);
// console.log(fruits);


fruits.push('Mango'); // Add element at the end of the Array
console.log(fruits);

fruits.unshift('Avocat'); // Add element at the begining of the Array
console.log(fruits);

/** const fruit = fruits.split("");
console.log(fruit[0]);

console.log(fruit.slice(1));
console.log(fruit.slice(-1));
console.log(fruit.slice(1, -1));
*/

fruits.pop();
console.log(fruits);

fruits.shift();
console.log(fruits);
// console.log(fruits.length);


// Loops | Boucles(en francais)
for (let i = 0; i <= fruits.length; i++) {
console.log(fruits[i]);
}

for(let i = (fruits.length -1); i >= 0; i--){
console.log(fruits[i]);
}