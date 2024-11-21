// // Cette methode permet de creer des promesses
// const maPromise = new Promise((resolve, reject) =>{

//     let action = true;
//     if (action) {
//         resolve('Success');
//     } else {
//         reject('Error !!!')
//     }
// });

// // Cette methode permet d'utiliser les promesses
// maPromise
// .then (result => {
//     console.log('Result: ' + result);
// })
// .catch (error => {
//     console.log('Error: ' + error);
// })

// const fs = require ('fs');

// fetch("https://www.google.com")
// .then (result => result.text())
// .then(text => {

//     fs.writeFile('home.html', text, (err) => {
//         if (err) throw err;
//         console.log('The html file has been saved');
//     })
//     console.log(text);
// })
// .catch(error => {
//     console.log(error);
// })

const fs = require ('fs').promises;
async function CreateGoogleClone() {
    const request = await fetch('https://www.google.com');
    const response = await request.text();
    const createFile = await fs.writeFile('home2.html', response);
    console.log('Okay');
}

CreateGoogleClone();