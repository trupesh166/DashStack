const { httpErrors, httpSuccess } = require("../constents")
const userModel = require("../models/UserModel")
const societyHandlerModel = require("../models/SocietyHandlerModel")
const memberModel = require("../models/MemberModel")
const securityModel = require("../models/SecurityModel")
const bcrypt = require("bcrypt")
const sendEmail = require("../mailconfig/Nodemailer");
const { generateOtp } = require('../mailconfig/otpService')
const jwt = require("jsonwebtoken")

class UserController {
  async loginUser(req, res) {
    try {
      const { email, password } = req.body
      if (!email || !password) throw httpErrors[400]
      let user
      if (email.length === 10 && typeof (Number(email) === "Number")) {
        const phone = Number(email)
        user = await userModel.model.findOne({ phoneNumber: phone })
        if (!user) throw httpErrors[500]
      } else {
        user = await userModel.model.findOne({ email: email })
        if (!user) throw httpErrors[500]
      }
      let societyData
      if (user.role === "Chairman") {
        societyData = await societyHandlerModel.model.findOne({ userId: user._id })
      } else if (user.role === "Member") {
        societyData = await memberModel.model.findOne({ userId: user._id })
      } else if (user.role === "Security") {
        societyData = await securityModel.model.findOne({ userId: user._id })
      }
      const payload = { ...user._doc, societyData: societyData }
      if (!bcrypt.compareSync(password, user.password)) return res.status(500).send({ message: "Invalid Password" })
      const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "30d" })
      if (!token) throw httpErrors[500]
      return res.status(200).send({ message: httpSuccess, token })
    } catch (error) {
      console.log(error)
      throw httpErrors[500]
    }
  }
  async forgotPassword(req, res) {
    try {
        const { email } = req.body;
        const user = await userModel.model.findOne({ email: email });
        
        if (!user) return res.status(404).json({ message: 'User not found.' });

        const otp = generateOtp();
        user.otp = otp;
        await user.save();

        const subject = 'Password Reset OTP';
        const text = `Your OTP for password reset is: ${otp}. It is valid for 15 minutes.`;
        await sendEmail({ to: user.email, subject, text });

        res.status(200).json({ message: 'OTP sent to your email.' });
    } catch (error) {
        res.status(500).json({ message: 'Error processing request.', error: error.message });
    }
  }
  async verifyOtp(req, res) {
    try {
        const { email, otp } = req.body;

        if (!email || !otp)  return res.status(400).json({ message: 'Email and OTP are required.' });
        const user = await userModel.model.findOne({ email: email });
        console.log(user);
        
        if (!user)  return res.status(404).json({ message: 'User not found.' });
        if (user.otp !== otp) return res.status(401).json({ message: 'Invalid OTP.' });
        if (Date.now() > user.otpExpires)  return res.status(401).json({ message: 'OTP has expired. Please request a new one.' });

        res.status(200).json({ message: 'OTP verified successfully. You can now reset your password.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error processing request.', error: error.message });
    }
}
async resetPassword(req, res){
  try {
     const { email, newPassword } = req.body;
      const user = await userModel.model.findOne({ email: email });

      if (!user) {
          return res.status(404).json({ message: 'User not found.' });
      }

      const hashedPassword = await bcrypt.hash(newPassword, 10);
      user.password = hashedPassword;
      await user.save();

      res.status(200).json({ message: 'Password reset successfully.' });
  } catch (error) {
      res.status(500).json({ message: 'Error resetting password.', error: error.message });
  }
};
  async authenticationPermission(req, res) {
    try {
      const { id, password } = req.body // id : Society Chairman Id
      const result = await userModel.model.findOne({ _id: id })
      if (!result) throw httpErrors[500]
      if (!bcrypt.compareSync(password, result.password)) return res.status(401).send({ message: "Invalid Password" })
      return res.status(200).send({ message: httpSuccess })
    } catch (error) {
      console.log(error)
      throw httpErrors[500]
    }
  }
}

const userController = new UserController();
module.exports = userController;
