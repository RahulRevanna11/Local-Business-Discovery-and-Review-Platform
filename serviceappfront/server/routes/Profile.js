// Import the required modules
const express = require("express")
const router = express.Router()


const { auth, isBusiness } = require("../middlewares/auth")
const {
//   deleteAccount,
  updateProfile,
  getAllUserDetails,
  updateDisplayPicture,
  

} = require("../controllers/Profile")

router.put("/updateProfile", auth, updateProfile)
router.get("/getUserDetails", auth, getAllUserDetails)
// Get Enrolled Courses

router.put("/updateDisplayPicture",auth,updateDisplayPicture)


module.exports = router