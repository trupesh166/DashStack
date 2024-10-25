const express = require('express');
const router = express();
const {defaults , register , login , forgotPassword , verifyOtp , resetPassword , logout} = require('../controllers/authController');


router.get('/', defaults);
router.post('/register', register);
router.post('/login', login);
router.post('/forgot-password', forgotPassword);
router.post('/verify-otp', verifyOtp);
router.post('/reset-password', resetPassword);
router.get('/logout', logout);

module.exports = router 