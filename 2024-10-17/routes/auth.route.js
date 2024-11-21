const { Router } = require('express');
const router = Router();

const authController = require('../src/controllers/auth.controller');
const { verifyLoginBody, verifyRegisterBody } = require('../src/middlewares/auth.middleware');
const { verify } = require('jsonwebtoken');

router.post('/login', verifyLoginBody, authController.login);
router.post('/register', verifyRegisterBody, authController.register);

router.post('/forgot-password', verifyEmail, authController.forgotPassword);
router.post('/verify-token', verifyOTP, authController.verifyOTP);
router.post('/reset-password', verifyPassword, authController.register);

module.exports = router;