// Import the required modules
const express = require("express")
const router = express.Router()


const { auth } = require("../middlewares/auth")
const {
    login,
    signUp,
    sendOTP,
    changePassword,
  } = require("../controllers/Auth");

// to add  reset password


// Route for user login
router.post("/login", login)

// Route for user signup
router.post("/signup", signUp)

// Route for sending OTP to the user's email
router.post("/sendotp", sendOTP)
router.post("/changepassword", auth, changePassword)
module.exports = router