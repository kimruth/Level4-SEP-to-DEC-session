const fs = require('fs');
let result = '';

function whenDataExist(error, data) {
    if (error) {
        console.log('You error: ' + error);
    } else {
        console.log('Read data ok: ' + data);
    }
}
fs.readFile('./2024-09-27/data.txt', 'utf-8', whenDataExist);

function addData (error, data) {
    if (error) {
        console.log('Text is: ' + error);
        
    } else {
        console.log('Text is: ' + data);
        
    }
}
fs.readFile = require('./data.txt', 'Hello here duys', addData)



// fs.readFile('./2024-09-27/data.taxt', 'utf-8', function (error, data) {
// if (error) {
//     console.log(error);
// } else {
//     console.log(data);
//     result = data;
// }
// });

// console.log('result: ' + result);