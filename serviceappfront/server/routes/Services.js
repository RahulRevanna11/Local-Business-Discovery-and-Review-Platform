// Import the required modules
const express = require("express")
const router = express.Router()

const { auth,  isAdmin, isBusiness, isUser } = require("../middlewares/auth")

const {createCategory,showAllCategories}=require("../controllers/Category");


const {createSubCategory,showAllSubCategories,SubcategoryPageDetails}=require("../controllers/SubCategory");

const {createService,editService,getAllServices,getFullServiceDetails,getPersonServices,uploadImages}=require("../controllers/Service");


const {
    createRating,
    getAverageRating,
    getAllRating,
  } = require("../controllers/RatingAndReviews")



  //Services
  router.post("/createService", auth, isBusiness, createService);

  router.post("/editService", auth, isBusiness, editService);
  router.post("/uploadImage",auth,isBusiness,uploadImages);


  router.get("/getAllServices",getAllServices);

  router.get("/getPersonServices",getPersonServices);

  router.get("/get",getFullServiceDetails);




  //category
  router.post("/createCategory", auth, isAdmin, createCategory)
router.get("/showAllCategories", showAllCategories)


//subcategories
router.post("/createSubCategory", auth, isAdmin, createSubCategory)
router.get("/showAllSubCategories", showAllSubCategories)
router.post("/getSubCategoryPageDetails", SubcategoryPageDetails)

  //Rating And Reviews
  router.post("/createRating", auth, isUser, createRating)
router.get("/getAverageRating", getAverageRating)
router.get("/getReviews", getAllRating)




module.exports = router