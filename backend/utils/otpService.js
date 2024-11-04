const { Twilio } = require('twilio');
require('dotenv').config();

const twilioClient = new Twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

const sendSmsOtp = async (phone, otp) => {
    await twilioClient.messages.create({
        body: `Your OTP is: ${otp}`,
        from: process.env.TWILIO_PHONE_NUMBER,
        to: phone,
    });
};

module.exports = {
    sendSmsOtp,
};
