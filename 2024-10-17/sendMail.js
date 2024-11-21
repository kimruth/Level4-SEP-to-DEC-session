require('dotenv').config();
const nodemailer = require ('nodemailer');

// console.log(process.env.EMAIL, process.env.PASSWORD);


const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
     user: process.env.EMAIL,
     pass: process.env.PASSWORD,
    }
});

transporter.sendMail({
    from: '"Seven Academy" <seugnouruth21@gmail.com>',
    to: 'nandalaure2@gmail.com',
    subject: 'Test send mail',
    text: 'Hello world'
}).then(send => {
    console.log('Email send successfully', send);
}).catch(err => {
    console.log('Error sending email', err);
})