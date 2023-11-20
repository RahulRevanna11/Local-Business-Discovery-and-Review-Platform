// Import the required modules
const express = require("express")
const router = express.Router()

const { auth,  isAdmin, isBusiness, isUser } = require("../middlewares/auth")

const {createCategory,showAllCategories,getSubCategories}=require("../controllers/Category");


const {createSubCategory,showAllSubCategories,SubcategoryPageDetails,searchSubCategories,addTagsToSubCategory}=require("../controllers/SubCategory");

const {createService,editService,getAllServices,getFullServiceDetails,getPersonServices,uploadImages,getSubCategoryServices}=require("../controllers/Service");
// const { getAverageRating } = require("../controllers/RatingAndReviews");
const {createQuestionAnswer,updateQuestionAnswer,deleteQuestionAnswer}=require("../controllers/Question")

const {
    createRating,
    getAverageRating,
    getAllRating,
  } = require("../controllers/RatingAndReviews")



  const {deleteEnquiry,updateEnquiry,createEnquiry,getEnquiry,getUserEnquiry}=require("../controllers/Enquiry")

const {createProviousWork,updateProviousWork,deleteProviousWork,searchProviousWork}=require("../controllers/ProviousWork")


  //Services
  router.post("/createService", auth, isBusiness, createService);

  router.post("/editService", auth, isBusiness, editService);
  router.post("/uploadImage",auth,isBusiness,uploadImages);


  router.post("/getAllServices",getSubCategoryServices);
  router.get("/getSubCategoryServices",getAllServices);
  router.get("/getPersonServices",getPersonServices);
  router.get("/getPersonServices",getPersonServices);
  router.post("/get",getFullServiceDetails);



  // /service/showSubCategories
  //category
  router.post("/createCategory", auth, isAdmin, createCategory)
router.get("/showAllCategories", showAllCategories)
// getSubCategories
router.post("/showSubCategories", getSubCategories)




//subcategories
router.post("/createSubCategory", auth, isAdmin, createSubCategory)
router.get("/showAllSubCategories", showAllSubCategories)
router.post("/getSubCategoryPageDetails", SubcategoryPageDetails)
router.post("/getServicesKeyword", searchSubCategories);
router.put("/addTags", auth,isAdmin,addTagsToSubCategory);



//   Rating And Reviews
  router.post("/createRating", auth, isUser, createRating)
router.post("/getAverageRating", getAverageRating);

router.post("/getAllRating", getAverageRating);

router.post("/createRating", auth, isUser, createRating)
router.post("/getAverageRating", getAverageRating);

router.post("/getAllRating", getAverageRating);



//question
router.post("/createQuestion", auth, isBusiness, createQuestionAnswer)
router.post("/updateQuestion", auth, isBusiness,updateQuestionAnswer);

router.post("/deleteQuestion",auth, isBusiness, deleteQuestionAnswer);



// enquiry
router.post("/createEnquiry", auth, isUser, createEnquiry)
router.post("/updateEnquiry", auth, isBusiness,updateEnquiry);

router.post("/deleteEnquiry",auth, isUser, deleteEnquiry);

router.post("/getEnquiry",auth, isBusiness, getEnquiry);
router.get("/getUserEnquiry",auth, isUser, getUserEnquiry);


//ProviousWork
router.post("/createProviouswork",auth, isBusiness,createProviousWork );
router.post("/updateProviouswork", auth, isBusiness,updateProviousWork);

router.post("/deleteProviouswork",auth, isUser, deleteProviousWork);

router.post("/getProviouswork",auth, isBusiness, searchProviousWork);

module.exports = router