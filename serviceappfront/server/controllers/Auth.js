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
const  mailsender  = require("../utils/mailSender");
const SMSSender =require("../utils/SMSSender")
// send mail
const send = async (mobile, otp) => {
  console.log(otp);
  // try {
  //   const res = await mailsender(
  //     email,
  //     "verification email from studynotion",
  //     otp
  //   );
  //   console.log(`Email sent Successfully + ${res}`);
  // } catch (error) {
  //   console.log("Error occured while sending mails" + error);
  //   throw error;
  // }

  try {
    const res = await SMSSender(
      mobile,
      `verification email from QuickLinks otp: ${otp}`,
      
    );
    console.log(`Email sent Successfully + ${res}`);
    console.log(`Email sent Successfully `);
  } catch (error) {
    console.log("Error occured while sending mails" + error);
    throw error;
  }
};

//send oyp
exports.sendOTP = async (req, res) => {
  try {
    //fetch email
    const { mobile } = req.body;

    //check if already present
    const checkUserPresent = await User.findOne({ mobile });
    console.log(mobile)
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

    const optPayload = { mobile, otp };

    //create ans entry in dp
    const otpBody = await OTP.create(optPayload);
    console.log("OTPPAYLOAD :", optPayload );
    console.log("otp_BODY:" + otpBody);
    send(mobile, otp);

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
      mobile,
      password,
      confirmPassword,
      accountType,
      otp,
    } = req.body;
    console.log(req.body);
    // validate password
    if (
      !firstName ||
      !lastName ||
      !mobile ||
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
    const existingUser = await User.findOne({ mobile });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already registered",
      });
    }


    //check most recent otp stored
    const recentOtp = await OTP.find({ mobile })
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
      mobile,
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



//Login controller for authenticating users
exports.login = async (req, res) => {
  try {
    // Get email and password from request body
    const { mobile, password } = req.body

    // Check if email or password is missing
    if (!mobile || !password) {
      // Return 400 Bad Request status code with error message
      return res.status(400).json({
        success: false,
        message: `Please Fill up All the Required Fields`,
      })
    }

    // Find user with provided email
    const user = await User.findOne({ mobile }).populate("additionalDetails").populate("service");

    // If user not found with provided email
    if (!user) {
      // Return 401 Unauthorized status code with error message
      return res.status(401).json({
        success: false,
        message: `User is not Registered with Us Please SignUp to Continue`,
      })
    }

    // Generate JWT token and Compare Password
    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign(
        { email: user.email, id: user._id, accountType: user.accountType },
        process.env.JWT_SECRET,
        {
          expiresIn: "24h",
        }
      )

      // Save token to user document in database
      user.token = token
      user.password = undefined
      
      // Set cookie for token and return success response
      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      }
      res.cookie("token", token, options).status(200).json({
        success: true,
        token,
        user,
        message: `User Login Success`,
      })
      console.log("user at login "+user);
    } else {
      return res.status(401).json({
        success: false,
        message: `Password is incorrect`,
      })
    }
  } catch (error) {
    console.error(error)
    // Return 500 Internal Server Error status code with error message
    return res.status(500).json({
      success: false,
      message: `Login Failure Please Try Again`,
    })
  }
}


// Controller for Changing Password
exports.changePassword = async (req, res) => {
  try {
    // Get user data from req.user
    const userDetails = await User.findById(req.user.id)

    // Get old password, new password, and confirm new password from req.body
    const { oldPassword, newPassword } = req.body

    // Validate old password
    const isPasswordMatch = await bcrypt.compare(
      oldPassword,
      userDetails.password
    )
    if (!isPasswordMatch) {
      // If old password does not match, return a 401 (Unauthorized) error
      return res
        .status(401)
        .json({ success: false, message: "The password is incorrect" })
    }

    // Update password
    const encryptedPassword = await bcrypt.hash(newPassword, 10)
    const updatedUserDetails = await User.findByIdAndUpdate(
      req.user.id,
      { password: encryptedPassword },
      { new: true }
    )

    // Send notification email
    try {
      const emailResponse = await mailSender(
        updatedUserDetails.email,
        "Password for your account has been updated",
        // passwordUpdated(
        //   updatedUserDetails.email,
        //   `Password updated successfully for ${updatedUserDetails.firstName} ${updatedUserDetails.lastName}`
        // )
      )
      console.log("Email sent successfully:", emailResponse.response)
    } catch (error) {
      // If there's an error sending the email, log the error and return a 500 (Internal Server Error) error
      console.error("Error occurred while sending email:", error)
      return res.status(500).json({
        success: false,
        message: "Error occurred while sending email",
        error: error.message,
      })
    }
    return res
    .status(200)
    .json({ success: true, message: "Password updated successfully" })
} catch (error) {
  // If there's an error updating the password, log the error and return a 500 (Internal Server Error) error
  console.error("Error occurred while updating password:", error)
  return res.status(500).json({
    success: false,
    message: "Error occurred while updating password",
    error: error.message,
  })
}
}