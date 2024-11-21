// const express = require('express'); // Same
// const Router = express.router; // Same
const { Router } = require('express'); // Same
const router = Router();
const indexController = require('../controllers/index.controller')

router.get('/', indexController.welcome);
// router.get('./about-us', indexController.aboutUs);

module.exports = router;