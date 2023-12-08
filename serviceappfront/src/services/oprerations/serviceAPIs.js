import { categories, subCategories, service, ratingsEndpoints,questionAnswerEndpoints ,EnquiryEndpoints, ProviousWork} from "../apis";

import { toast } from "react-hot-toast";

import { apiConnector } from "../apiConnector";
const { CATEGORIES_API,CATEGORIES_DETAILS_API } = categories;
const { SUB_CATEGORIES_API,SEARCH_KEYWORD_API } = subCategories;
const { GET_FULL_SERVICE_API, GET_ALL_SERVICE_API,EDIT_SERVICE_API ,UPLOAD_IMAGE_API,CREATE_SERVICE_API} = service;
const { CREATE_RATING_API } = ratingsEndpoints;
const{CREATE_QUESTION_ANSWER_API,UPDATE_QUESTION_ANSWER_API,DELETE_QUESTION_ANSWER_API}=questionAnswerEndpoints;

const {CREATE_ENQUIRY_API,UPDATE_ENQUIRY_API,DELETE_ENQUIRY_API,GET_USER_ENQUIRY_API}=EnquiryEndpoints

const {CREATE_PROVIOUSWORK_API,UPDATE_PROVIOUSWORK_API,DELETE_PROVIOUSWORK_API,GET_PROVIOUSWORK_API}=ProviousWork;


export const createService = async (data,token) => {
  const toastId=toast.loading("Loading");
  let result;
  try {
    const response = await apiConnector(
      "POST",
      CREATE_SERVICE_API,
      data,
      {
        Authorization: `Bearer ${token}`,
      }
    );
    console.log(`SERVICE CATAGORIES API RESPONSE ${response}`);
    result = response;
  } catch (error) {
    console.log("COURSE_CATEGORY_API API ERROR............", error);
    toast.error(error.message);
    console.log(error);
  }
  // toast.dismiss(toastId);
  console.log(`SERVICE CATAGORIES API RESPONSE ${result}`);
  localStorage.setItem("service", JSON.stringify(result?.data?.data?.service))
  toast.dismiss(toastId)
  return result;
  
};

export const fetchCategories = async () => {
  const toastId=toast.loading("Loading");
  let result;
  try {
    const responce = await apiConnector("GET", CATEGORIES_API);
    console.log(`SERVICE CATAGORIES API RESPONSE ${responce}`);
    result = responce;
  } catch (error) {
    console.log("COURSE_CATEGORY_API API ERROR............", error);
    toast.error(error.message);
    console.log(error);
  }
  // toast.dismiss(toastId);
  console.log(`SERVICE CATAGORIES API RESPONSE ${result}`);
  toast.dismiss(toastId)
  return result;
  
};




export const fetchSubCategories = async (id) => {
  const toastId=toast.loading("Loading");
  let result;
  try {
    const responce = await apiConnector("POST", CATEGORIES_DETAILS_API, {
      subCategoryId: id,
    });
    console.log(`ALL SUBCATEGORY API RESPONSE ${responce}`);
    result = responce;
  } catch (error) {
    console.log("ALL SUB_CATEGORY_API API ERROR............", error);
    toast.error(error.message);
    console.log(error);
  }
  // toast.dismiss(toastId);
  console.log(`ALL SUB_CATEGORY_API API  ${result.data}`);
  toast.dismiss(toastId)
  return result;
};

export const  fetchAllSubCategoriesServices= async (id) => {
  const toastId=toast.loading("Loading");

  let result;
  try {
    const responce = await apiConnector("GET", SUB_CATEGORIES_API, {});
    console.log(`ALL SUBCATEGORY API RESPONSE ${responce}`);
    result = responce;
  } catch (error) {
    console.log("ALL SUB_CATEGORY_API API ERROR............", error);
    toast.error(error.message);
    console.log(error);
  }
  // toast.dismiss(toastId);
  console.log(`ALL SUB_CATEGORY_API API  ${result?.data}`);
  toast.dismiss(toastId)
  return result;
};

export const fetchProfile = async (serviceId,flag=false) => {
  const toastId=toast.loading("Loading");
  let result;
  console.log(serviceId);
  //  const   serviceId=id;
  try {
    const responce = await apiConnector("POST", GET_FULL_SERVICE_API, {
      serviceId,
    });
    console.log(`ALL SERVICE DETAILS API RESPONSE ${responce}`);
    result = responce;

    // if(flag)
    // localStorage.setItem("service", JSON.stringify(responce.data.data))
    toast.success("successfully")
  } catch (error) {
    console.log("ALL SERVICE DETAILS API ERROR............", error);
    toast.error(error.message);
    console.log(error);
  }
  // toast.dismiss(toastId);
  console.log(`ALL SERVICE DETAILS API  ${result?.data}`);
  toast.dismiss(toastId)
  return result;
};

export const createRating = async (data, token) => {
  const toastId = toast.loading("Loading...");
  let success = false;
  try {
    const response = await apiConnector(
      "POST",
      CREATE_RATING_API,
      { ...data, token: token },
      {
        Authorization: `Bearer ${token}`,
      }
    );
    console.log("CREATE RATING API RESPONSE............", response);
    if (!response?.data?.success) {
      throw new Error("Could Not Create Rating");
    }
    toast.success("Rating Created");
    success = true;
  } catch (error) {
    success = false;
    console.log("CREATE RATING API ERROR............", error);
    toast.error('already reviewed by the user');
  }
  toast.dismiss(toastId);
  return success;
};

export const fetchCategoriesServices = async (id) => {
  const toastId=toast.loading("Loading");
  let result;
  try {
    const responce = await apiConnector("POST",  GET_ALL_SERVICE_API,{subCategoryId:id});
    console.log(`SERVICE CATAGORIES API RESPONSE ${responce}`);
    result = responce;
  } catch (error) {
    console.log("COURSE_CATEGORY_API API ERROR............", error);
    toast.error(error.message);
    console.log(error);
  }
  // toast.dismiss(toastId);
  console.log(`SERVICE CATAGORIES API RESPONSE ${result}`);
  toast.dismiss(toastId)
  return result;
};






// question answer 

export const createQuestionAnswer = async (question,answer,serviceId,token) => {
  const toastId=toast.loading("Loading");
  let result;
  try {
    const responce = await apiConnector("POST",  CREATE_QUESTION_ANSWER_API,{question,answer,serviceId}, {
      Authorization: `Bearer ${token}`,
    });
    console.log(`CREATE QUESTION ANSWER API RESPONSE ${responce}`);
    result = responce;
    toast.success("Updated Successfully")
  } catch (error) {
    console.log("SCREATE QUESTION ANSWER API RESPONSEERROR............", error);
    toast.error(error.message);
    console.log(error);
  }
  // toast.dismiss(toastId);
  console.log(`CREATE QUESTION ANSWER API RESPONSEE ${result}`);
  toast.dismiss(toastId)
  return result;
};

export const updateQuestionAnswer = async (QuestionId,question,answer,token) => {
  const toastId=toast.loading("Loading");
  let result;
  try {
    const responce = await apiConnector("POST",  UPDATE_QUESTION_ANSWER_API,{QuestionId,question,answer}, {
      Authorization: `Bearer ${token}`,
    });
    console.log(`UPDATE QUESTION ANSWER API RESPONSE ${responce}`);
    result = responce;
  } catch (error) {
    console.log("UPDATE QUESTION ANSWER API RESPONSEERROR............", error);
    toast.error(error.message);
    console.log(error);
  }
  toast.success(toastId);
  console.log(`UPDATE QUESTION ANSWER API RESPONSEE ${result}`);
  toast.dismiss(toastId)
  return result;
};


export const deleteQuestionAnswer = async (questionId) => {
  const toastId=toast.loading("Loading");
  let result;
  try {
    const responce = await apiConnector("POST",  DELETE_QUESTION_ANSWER_API,{questionId,});
    console.log(`DELETE QUESTION ANSWER API RESPONSE ${responce}`);
    result = responce;
  } catch (error) {
    console.log("DELETE QUESTION ANSWER API RESPONSEERROR............", error);
    toast.error(error.message);
    console.log(error);
  }
  toast.dismiss(toastId);
  console.log(`DELETE QUESTION ANSWER API RESPONSEE ${result}`);
  return result;
};








//Enqiiry


export const createInquiry = async (data,token) => {
  const toastId=toast.loading("Loading");
  let result;
  try {
    const responce = await apiConnector("POST",  CREATE_ENQUIRY_API,data,{
      Authorization: `Bearer ${token}`,
    });
    console.log(`CREATE Inquiry API RESPONSE ${responce}`);
    result = responce;
  } catch (error) {
    console.log("SCREATEInquiry API RESPONSEERROR............", error);
    toast.error(error.message);
    console.log(error);
  }
  toast.dismiss(toastId);
  console.log(`CREATE Inquiry API RESPONSEE ${result}`);
  return result;
};

export const updateInquiry = async (data,token) => {
  const toastId=toast.loading("Loading");
  let result;
  try {
    const responce = await apiConnector("POST", UPDATE_ENQUIRY_API,data,{
      Authorization: `Bearer ${token}`,
    });
    console.log(`APPROVE ENQUIRY RESPONSE ${responce}`);
    result = responce;
    toast.success("Approved Successfully")
  } catch (error) {
    console.log("APPROVE ENQUIRY API RESPONSEERROR............", error);
    toast.error(error.message);
    console.log(error);
  }
  toast.dismiss(toastId);
  console.log(`UPDATE QUESTION ANSWER API RESPONSEE ${result}`);
  return result;
};
export const deleteInquiry = async (questionId) => {
  const toastId=toast.loading("Loading");
  let result;
  try {
    const responce = await apiConnector("POST",  DELETE_ENQUIRY_API,{questionId,});
    console.log(`DELETE QUESTION ANSWER API RESPONSE ${responce}`);
    result = responce;
  } catch (error) {
    console.log("DELETE QUESTION ANSWER API RESPONSEERROR............", error);
    toast.error(error.message);
    console.log(error);
  }
  toast.dismiss(toastId);
  console.log(`DELETE QUESTION ANSWER API RESPONSEE ${result}`);
  return result;
};




export const editCourseDetails = async (data, token) => {
  let result = null
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("POST", EDIT_SERVICE_API, data, {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    })
    console.log("EDIT COURSE API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Update Course Details")
    }
    toast.success("Course Details Updated Successfully")
    result = response?.data?.data
    localStorage.setItem("service", JSON.stringify(response.data.data))
  } catch (error) {
    console.log("EDIT COURSE API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}



export const fetchCourseDetails = async (data, token) => {
  let result = null
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("POST", EDIT_SERVICE_API, data, {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    })
    console.log("EDIT COURSE API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Update Course Details")
    }
    toast.success("Course Details Updated Successfully")
    result = response?.data?.data
    localStorage.setItem("service", JSON.stringify(response.data.data))
  } catch (error) {
    console.log("EDIT COURSE API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}




export const UploadServiceImages = async (data, token) => {
  let result = null
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("POST", UPLOAD_IMAGE_API, data, {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`
    })
    console.log("EDIT COURSE API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Update Picture")
    }
    toast.success("Picture Update Updated Successfully")
    // result = response?.data?.data
    // localStorage.setItem("service", JSON.stringify(response.data.data))
  } catch (error) {
    console.log("Update PictureAPI ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}


export const SearckKeyword = async (keyword) => {
  let result = null
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("Post", SEARCH_KEYWORD_API, {keyword})
    console.log("EDIT COURSE API RESPONSE............", response);
    if (!response?.data?.success) {
      throw new Error("Could Not Update Picture")
    }
    toast.success("search Successfully")
    result = response?.data?.data.result
    // localStorage.setItem("service", JSON.stringify(response.data.data))
  } catch (error) {
    console.log("Update PictureAPI ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}


export const getUserInquiry = async (token) => {
  let result = null
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("GET", GET_USER_ENQUIRY_API,{},{
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    })
    console.log("GET USER ENQUIRY API...........", response);
    if (!response?.data?.success) {
      throw new Error("Could Not GET ENQUIRES")
    }
    toast.success("search Successfully")
    result = response?.data?.data
    // localStorage.setItem("service", JSON.stringify(response.data.data))
  } catch (error) {
    console.log("GET USER ENQUIRY API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}



//PROVIOUS WORK


export const createProviousWork = async (token,data) => {
  let result = null
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("POST", CREATE_PROVIOUSWORK_API,data,{
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    })
    console.log("GET USER PROVIOUSWORK API...........", response);
    if (!response?.data?.success) {
      throw new Error("Could Not GET PROVIOUSWORK")
    }
    toast.success("search Successfully")
    result = response?.data?.data
    // localStorage.setItem("service", JSON.stringify(response.data.data))
  } catch (error) {
    console.log("GET USER PROVIOUSWORK API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}


export const getProviousWork = async (data,token) => {
  let result = null
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("POST", GET_PROVIOUSWORK_API,data,{
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    })
    console.log("GET USER PROVIOUSWORK API...........", response);
    if (!response?.data?.success) {
      throw new Error("Could Not GET PROVIOUSWORK")
    }
    toast.success("search Successfully")
    result = response?.data?.data
    // localStorage.setItem("service", JSON.stringify(response.data.data))
  } catch (error) {
    console.log("GET USER PROVIOUSWORK API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}


export const updateProviousWork = async (data,token) => {
  let result = null
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("POST", UPDATE_PROVIOUSWORK_API,data,{
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    })
    console.log("GET USER PROVIOUSWORK API...........", response);
    if (!response?.data?.success) {
      throw new Error("Could Not GET PROVIOUSWORK")
    }
    toast.success("search Successfully")
    result = response?.data?.data
    // localStorage.setItem("service", JSON.stringify(response.data.data))
  } catch (error) {
    console.log("GET USER PROVIOUSWORK API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}

export const deleteProviousWork = async (data,token) => {
  let result = null
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("POST", DELETE_PROVIOUSWORK_API,data,{
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    })
    console.log("GET USER PROVIOUSWORK API...........", response);
    if (!response?.data?.success) {
      throw new Error("Could Not GET PROVIOUSWORK")
    }
    toast.success("search Successfully")
    result = response?.data?.data
    // localStorage.setItem("service", JSON.stringify(response.data.data))
  } catch (error) {
    console.log("GET USER PROVIOUSWORK API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}
