var express = require('express');
const contact = require('../models/contact')
var router = express.Router();
const nodemailer = require('nodemailer')
const contacController = require('../controller/contact.controller')
const sendMail = require('../sendMail')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home page'});
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About-us'});
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact-us'});
});

router.post('/submit-form', function(req, res, next){

  const data = req.body;
  let message = '';
    contact.create(data)
           .then(save => {
            message = 'Data saved successfully'
           })
           .catch(error => {
            message = 'Error saving data'
           })
           .finally(() => {
            res.redirect('/contact?message=' + message);
           })

  console.log(req.body);
})

// router.post('/submit-form', function(req, res, next){
//   console.log(req.body);
//   res.send('Form submitted successfully');
// });

module.exports = router;