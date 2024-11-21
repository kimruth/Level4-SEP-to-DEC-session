require("dotenv").config();
const nodemailer = require("nodemailer");
const Contact = require("../models/contact");

const contact = async (req, res, next) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  try {
    const data = req.body;
    const newContact = new Contact({
      name: data.name,
      email: data.email,
      subject: data.subject,
      content: data.content,
    });
    let mailOptions = {
      from: data.email,
      // to: "e.njifanda@commonfactor.tech",
      to: "nandalaure2@gmai.com",
      subject: data.subject,
      text: `
      New user try to contact you:\n\n
      name: ${data.name}\n
      Email :${data.email}\n
      Subject : ${data.subject}\n
      Content :${data.content}`,
    };

    await transporter.sendMail(mailOptions);
    await newContact.save();
    res.redirect("/contact?message=Email sent Succesfully");
    // res.send("Form submitted successfully");
  } catch (error) {
    res.redirect("/contact?message= an error occured");
  }
};

module.exports = { contact };