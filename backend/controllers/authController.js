const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {sendEmailOtp} = require('../utils/nodemailer');
const { sendSmsOtp } = require('../utils/otpService');
require('dotenv').config();

const defaults = (req,res) =>{
    res.send("Hello world.....")
};
const register = async (req,res) =>{
    try {
        const{firstname , lastname , email , phone , country , state , city , society , password , role , confpass } = req.body;

        // check if the password is match 
        if (password !== confpass) {
            return res.status(400).json({message : "Password do not match"})
        }
        // check if the user already User exists
        const existedUser = await User.findOne({email});
        if (existedUser) {
            return res.status(400).json({message : "User already exists"})
        } 
        // hasd the password
        const hassedPassword = await bcrypt.hash(password , 10) ; 
        const user = new User({
            firstname ,
            lastname ,
            email ,
            phone ,
            country ,
            state ,
            city ,
            society ,
            password : hassedPassword ,
            role
        })
        await user.save();
        return res.status(201).json({message : "User registered successfully"})
        
    } catch (error) {
        return res.status(500).json({message : "Error registering user" , error : error.message})
    }
};
const login = async (req,res) =>{
    try {
        const{identifier , password } = req.body;  //identifier can be email or phone

        // find user by email or phone
        const user = await User.findOne({
            $or : [{email : identifier} , {phone : identifier}],
        });
        
        // check if user user exists and password is match 
        if (!user || !(await bcrypt.compare(password , user.password)) ) {
            return res.status(401).json({message : "Invalid credentials"})
        }
        // generate a jwt token 
        const token = jwt.sign({userId : user._id , role: user.role }, process.env.JWT_SECRET , {expiresIn : '1h'})
        res.cookie('token', token , {httpOnly : true , secure : true})
        return res.status(201).json({message : "User login successfully" , token})
        
    } catch (error) {
        return res.status(500).json({message : "Error loging user" , error : error.message})
    }
};
const forgotPassword = async (req, res) => {
    const { identifier } = req.body;
    const user = await User.findOne({ $or: [{ email: identifier }, { phone: identifier }] });

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    user.otp = otp;
    await user.save();

    if (user.email) {
        await sendEmailOtp(user.email, otp);
    } else if (user.phone) {
        await sendSmsOtp(user.phone, otp);
    }

    return res.status(200).json({ message: 'OTP sent successfully' });
};

const verifyOtp = async (req, res) => {
    const { identifier, otp } = req.body;
    const user = await User.findOne({ $or: [{ email: identifier }, { phone: identifier }] });

    if (!user || user.otp !== otp) {
        return res.status(401).json({ message: 'Invalid OTP' });
    }

    user.otp = undefined; // Clear OTP after verification
    await user.save();

    return res.status(200).json({ message: 'OTP verified successfully' });
};

const resetPassword = async (req, res) => {
    const { identifier, newPassword } = req.body;
    const user = await User.findOne({ $or: [{ email: identifier }, { phone: identifier }] });

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    user.password = await bcrypt.hash(newPassword, 10);
    await user.save();

    return res.status(200).json({ message: 'Password reset successfully' });
};

const logout = async (req,res) =>{
    try {
        res.clearCookie();
        return res.status(201).json({message : "Logout successfully" })
        
    } catch (error) {
        return res.status(500).json({message : "Server Error" , error : error.message})
    }
};

module.exports = {
    defaults ,
    register ,
    login , 
    forgotPassword ,
    verifyOtp ,
    resetPassword ,
    logout
}
