console.log('Start');

for (let i = 0; i < 1000; i++) {
    console.log('i: ' +i);
    
};
console.log('End');

const fruits = ['orange', 'ananas', 'mango', 'apple', 'pineaple', 'banana', 'orange'];
const results = {};

var a = 3;
console.log(a*3);


setTimeout(() => {
    for (let i = 0; i < fruits.lenght; i++) {
        const fruit = fruits[i];
        if (results[fruit]) {
            results[fruit] = results[fruit] +1;
        } else {
            results[fruit] = 1;
        }
    }
    console.log('Loop: ', results); 
}, 1000)

console.log('End', results);