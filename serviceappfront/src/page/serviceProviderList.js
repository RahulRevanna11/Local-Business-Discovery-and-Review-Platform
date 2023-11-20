import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import HorizontalCard from "../component/ServiceProviderList/SubCategory";
import FilterOptions from "../component/button/FilterBtn";
import { useParams } from "react-router";
// import { apiConnector } from "../services/apiConnector";
import { Link } from "react-router-dom";
import { fetchSubCategories } from "../services/oprerations/serviceAPIs";
import ShowServices from "../component/ServiceProviderList/ShowServices";

function ServiceProviders() {
  const { categoryid } = useParams();
  console.log(categoryid);
  const [subcategory, setSubcategoryDeatils] = useState([]);
let service=[];
  const getCategories = async () => {
    const res = await fetchSubCategories(categoryid.split(":")[1]);
    setSubcategoryDeatils(res?.data?.data[0]?.subCategory);
     console.log(res?.data?.data[0].subCategory);
    // return res;


  
  };
  useEffect(() => {
  

    getCategories();
    // setSubcategoryDeatils(res?.data?.data[0]?.subCategory);
   
  },[]);

  const { loading: profileLoading } = useSelector((state) => state.profile)
  const { loading: authLoading } = useSelector((state) => state.auth)

  if (profileLoading || authLoading) {
    return (
      <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
        <div className="spinner"></div>
      </div>
    )
  }
  return (
    <div className="mt-24">
      {/* <FilterOptions /> */}
      {/* Filter Div */}

      <div className="flex items-center justify-center lg:gap-20 flex-wrap ">
        {subcategory?.map((item, key) => {
         return  <div key={key} className="flex md:flex:none "><Link
         
            class=" max-w-xl p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 inline"
             
          >
            <h5 
            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              <img src={item?.image} className="w-20 h-20" alt="">
              </img>
            {item?.name}
            </h5>
            <p 
            class="font-normal text-gray-700 dark:text-gray-400"
            >
              {item?.description}
            </p>
          </Link>
          </div>
        })}
      </div>
    
      <div className="w-[100%] flex flex-col space-y-4 mt-10 ml-5">
      { 
      subcategory?.map((item,key)=>{
        
          return <ShowServices item={item} />

      })
      
      }
      </div>
    </div>
  );
}

export default ServiceProviders;
