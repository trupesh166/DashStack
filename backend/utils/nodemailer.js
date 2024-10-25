const nodemailer = require('nodemailer');
require('dotenv').config();
// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'gmail', // or your preferred email service
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// Function to send OTP via email
const sendEmailOtp = async (email, otp) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Your OTP for Password Reset',
        text: `Your OTP is: ${otp}`,
    };

    try {
        await transporter.sendMail(mailOptions);
    } catch (error) {
        throw new Error('Error sending email: ' + error.message);
    }
};

module.exports = {
    sendEmailOtp,
};
