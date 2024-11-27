const { Router } = require("express");
const asyncHandler = require('express-async-handler');
const userController = require("../controllers/UserController");

const userRouter = Router()

userRouter.post("/auth", asyncHandler(userController.authenticationPermission))
userRouter.post("/login", asyncHandler(userController.loginUser))
userRouter.post("/forgot-password", asyncHandler(userController.forgotPassword))
userRouter.post("/verify-otp", asyncHandler(userController.verifyOtp))
userRouter.post("/reset-passsword", asyncHandler(userController.resetPassword))

module.exports = userRouter