const mongoose = require("mongoose");
// const { mailsender } = require("../utils/mailSender");

const contractSchema = new mongoose.Schema({
  workType: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
 images:[{
    type:String

 }],
 approved:{
    type:String,
    enum:["yes","no"],
   default:"no"
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

module.exports = mongoose.model("Contract", contractSchema);
// module.exports = send;
