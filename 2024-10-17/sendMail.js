require('dotenv').config();
const nodemailer = require('nodemailer');

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

const sendEmail = (email, subject, message) => {

    transporter.sendMail({
        from: email,
        to: process.env.EMAIL,
        subject: subject,
        text: message
    }).then(send => {
        console.log('Email send successfully', send);
    }).catch(err => {
        console.log('Error sending email', err);
    })
}
module.exports = {sendEmail}
