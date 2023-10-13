const BASE_URL = "http://localhost:4000/api/v1"

// AUTH ENDPOINTS
export const endpoints = {
  SENDOTP_API: BASE_URL + "/auth/sendotp",
  SIGNUP_API: BASE_URL + "/auth/signup",
  LOGIN_API: BASE_URL + "/auth/login",
  
}

// PROFILE ENDPOINTS
export const profileEndpoints = {
  GET_USER_DETAILS_API: BASE_URL + "/profile/getUserDetails",
  GET_USER_ENROLLED_COURSES_API: BASE_URL + "/profile/getEnrolledCourses",
  GET_INSTRUCTOR_DATA_API: BASE_URL + "/profile/instructorDashboard",
}



//SERVICE ENDPOINTS
export const service = {
    CREATE_SERVICE_API: BASE_URL + "/service/createService",
    EDIT_SERVICE_API: BASE_URL + "/service/editService",
    UPLOAD_IMAGE_API: BASE_URL + "/service/uploadImage",
    GET_ALL_SERVICE_API: BASE_URL + "/service/getAllServices",
   GET_PERSON_SERVICE_API: BASE_URL + "/service/getPersonServices",
   GET_FULL_SERVICE_API: BASE_URL + "/service/get",
   GET_SUBCATEGORY_SERVICE_API: BASE_URL + "/service/get",


  }




// CATAGORIES API
export const categories = {
  CATEGORIES_API: BASE_URL + "/service/showAllCategories",
}

//SUBCATEGORIES
export const subCategories = {
    SUB_CATEGORIES_API: BASE_URL + "/service/showAllSubCategories",
  }
  

// REVIEWS
export const ratingsEndpoints = {
    REVIEWS_DETAILS_API: BASE_URL + "/service/getReviews",
    GET_AVG_RATING_API: BASE_URL + "/service/getAverageRating",
    // GET_AVG_RATING_API: BASE_URL + "/service/getAverageRating",


  }

  

// SETTINGS PAGE API
export const settingsEndpoints = {
  UPDATE_DISPLAY_PICTURE_API: BASE_URL + "/profile/updateDisplayPicture",
  UPDATE_PROFILE_API: BASE_URL + "/profile/updateProfile",
 
  
}