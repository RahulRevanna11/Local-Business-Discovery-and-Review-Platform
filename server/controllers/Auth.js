const User = require("../models/User");
const OTP = require("../models/OTP");
const optGenerator = require("otp-generator");
const bcrypt = require("bcrypt");
const Profile = require("../models/Profile");
const jwt = require("jsonwebtoken");
const { mailSender } = require("../utils/mailSender");
// const { passwordUpdated } = require("../mail/templates/passwordUpdate");
require("dotenv").config();
const Service = require("../models/Service");
const mongoose = require("mongoose");
const { mailsender } = require("../utils/mailSender");

// send mail
const send = async (email, otp) => {
  try {
    const res = await mailsender(
      email,
      "verification email from studynotion",
      otp
    );
    console.log(`Email sent Successfully + ${res}`);
  } catch (error) {
    console.log("Error occured while sending mails" + error);
    throw error;
  }
};

//send oyp
exports.sendOTP = async (req, res) => {
  try {
    //fetch email
    const { email } = req.body;

    //check if already present
    const checkUserPresent = await User.findOne({ email });
    if (checkUserPresent) {
      return res.status(401).json({
        success: false,
        message: "user already present",
      });
    }

    //genetrate opt
    var otp = optGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });
    // console.log(otp);

    const optPayload = { email, otp };

    //create ans entry in dp
    const otpBody = await OTP.create(optPayload);
    // console.log("OTPPAYLOAD :", optPayload );
    // console.log("otp_BODY:" + otpBody);
    send(email, otp);

    //return response
    return res.status(200).json({
      success: true,
      message: "otp sent successfully",
      body: otpBody,
    });
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};

//sign up
exports.signUp = async (req, res) => {
  try {
    // data fetch
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      accountType,
      otp,
    } = req.body;
    // console.log("709277!firstName ||!lastName ||");
    // validate password
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !confirmPassword ||
      !otp
    ) {
      return res.status(403).json({
        success: false,
        message: "all fields are requied",
      });
    }


    //2 password match info
    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message:
          "Password and confirmed password does not match please try again",
      });
    }

    //check user already exist or not
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already registered",
      });
    }


    //check most recent otp stored
    const recentOtp = await OTP.find({ email })
      .sort({ createdAt: -1 })
      .limit(1);
    console.log("recent otp" + recentOtp);

    //validate otp
    if (recentOtp.length === 0) {
      return res.status(400).json({
        success: false,
        message: "otp not found",
      });
    } else if (otp !== recentOtp[0].otp) {
      return res.status(400).json({
        success: false,
        message: "Invalid otp",
      });
    }

    //hash passord
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);


    // Create the user
    let approved = "";
    approved === "Business" ? (approved = false) : (approved = true);



    //entry create int db
    const profileDetails = await Profile.create({
      gender: null,
      dateOfBirth: null,
      about: null,
      contactNumber: null,
    });
    console.log(profileDetails);
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      accountType,
      additionalDetails: profileDetails._id,
      image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`,
    });



    // return res
    return res.status(200).json({
      success: true,
      message: "user is registered successfully",
      user,
    });

    
  } catch (error) {
    // console.log(error);
    return res.status(500).json({
      success: false,
      message: "user is not registered Please try again",
      error: error.message,
    });
  }
};
