// require('dotenv').config;
// const nodemailer = require('nodemailer');
// const contact = require('./models/contact')

// const transporter = nodemailer.createTransport ({
//     host: 'smtp.gmail.com',
//     port: 465,
//     secure: true,
//     auth: {
//         user: process.env.EMAIL,
//         pass: process.env.PASSWORD,
//     }
// });

// transporter.sendMail ({
//     from: '"Seugnou Ruth" <seugnouruth21@gmail.com>',
//    //to: 'e.njifanda@commonfactor.tech',
//     to: 'nandalaure2@gmail.com',
//     subject: '',
//     text: '',
// }).then(send => {
//     console.log(send);
// }).catch(error => {
//     console.log(error);
// })