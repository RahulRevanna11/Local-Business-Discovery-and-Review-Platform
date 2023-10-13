import {categories, subCategories} from "../apis";

import { toast } from "react-hot-toast";

import { apiConnector } from "../apiConnector";
const {CATEGORIES_API}=categories;
const{ SUB_CATEGORIES_API}=subCategories


export const fetchCategories=async ()=>{
// const toastId=toast.loading("Loading");
let result;
try{
const responce=await apiConnector("GET",CATEGORIES_API);
console.log(`SERVICE CATAGORIES API RESPONSE ${responce}`);
result=responce;


}catch(error)
{
    console.log("COURSE_CATEGORY_API API ERROR............", error)
    toast.error(error.message)
    console.log(error);
}
// toast.dismiss(toastId);
console.log(`SERVICE CATAGORIES API RESPONSE ${result}`);
return result;
}



export const fetchAllSubCategoriesServices=async ()=>{
    // const toastId=toast.loading("Loading");
    let result;
    try{
    const responce=await apiConnector("GET", SUB_CATEGORIES_API);
    console.log(`ALL SUBCATEGORY API RESPONSE ${responce}`);
    result=responce;
    
  
    }catch(error)
    {
        console.log("ALL SUB_CATEGORY_API API ERROR............", error)
        toast.error(error.message)
        console.log(error);
    }
    // toast.dismiss(toastId);
    console.log(`ALL SUB_CATEGORY_API API  ${result.data}`);
    return result;
    }