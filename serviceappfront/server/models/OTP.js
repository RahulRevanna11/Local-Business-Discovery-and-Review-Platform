const mongoose = require("mongoose");
// const { mailsender } = require("../utils/mailSender");

const otpSchema = new mongoose.Schema({
  // email: {
  //   type: String,
  //   required: true,
  // },

  mobile: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    expires: 20 * 5 * 60,
  },
});

// const send = async (email, otp) => {
//   try {
//     const res = await mailsender(
//       email,
//       "verification email from studynotion",
//       otp
//     );
//     console.log(`Email sent Successfully + ${res}`);
//   } catch (error) {
//     console.log("Error occured while sending mails" + error);
//     throw error;
//   }
// }

// otpSchema.post("save", async (next) => {
//   await sendVerificationEmail(this.email, this.otp);
// });

module.exports = mongoose.model("OTP", otpSchema);
// module.exports = send;
