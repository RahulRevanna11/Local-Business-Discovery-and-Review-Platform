import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { fetchAllSubCategoriesServices } from "../../services/oprerations/serviceAPIs";
import LocationComponent from "./LocationComponent";
import CitySearch from "./CitySearch";
// import {createSer}

import { useDispatch, useSelector } from "react-redux";
const AddService = () => {

  const{longitude,latitude}=useSelector(state=>state.location)
  console.log(longitude)
  console.log(latitude)
  const [subcategories, setSubcategories] = useState(null);
  const dispatch=useDispatch();
  const fetchSubcategories = async () => {
    setLoading(true);
    
    const response = await fetchAllSubCategoriesServices();
   
    setLoading(false);
    setSubcategories(response?.data?.data);
    console.log(response?.data?.data);
    console.log(response);
    return response;
  };
  const [loading, setLoading] = useState(false);
  const [toggle, setToggle] = useState(true);
  useEffect(() => {
    const data = fetchSubcategories();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  

  const onSubmit = (data) => {
    
    data.latitude=latitude;
    data.longitude=longitude;
    console.log("Form data submitted:", data);
         
   
  };

  if (loading) return <div className=".spinner"></div>;
  console.log(subcategories);
  return (
    <div className="container mx-auto mt-8 overflow-none">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-lg mx-auto bg-white p-8 border border-gray-300 rounded shadow-md overflow-hidden"
      >
        <h2 className="text-2xl font-semibold mb-6">Add Service</h2>

        {/* Name input */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-600"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "Name is required" })}
            className="mt-1 p-2 w-full border rounded-md"
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>

      
        <div className="mb-4">
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-600"
          >
            Address
          </label>
          <input
            type="text"
            id="address"
            {...register("address", { required: "Address is required" })}
            className="mt-1 p-2 w-full border rounded-md"
          />
          {errors.address && (
            <p className="text-red-500 text-xs mt-1"> address required</p>
          )}
        </div>

    
        <div className="mb-4">
          <label
            htmlFor="subcategory"
            className="block text-sm font-medium text-gray-600"
          >
            Subcategory
          </label>
          <select
            id="subCategory"
            {...register("subCategory", {
              required: "subCategory is required",
            })}
            className="mt-1 p-2 w-full border rounded-md"
          >
            <option value="">Select subCategory</option>
            {subcategories &&
              subcategories?.map((subcategory) => {
                return (
                  <option key={subcategory._id} value={subcategory._id}>
                    {subcategory.name}
                  </option>
                );
              })}
          </select>
          {errors.subCategory && (
            <p className="text-red-500 text-xs mt-1">
              {errors.subCategory.message}
            </p>
          )}
        </div>
       <h1 className="text-xl font-bold mt-6">Add Your Location</h1>
     
      <div className="flex gap-3" onClick={()=>setToggle(!toggle)}><button className={`${toggle?("p-2 bg-white "):("p-2 bg-gray-300 ")}`}>Get By Current Location</button>
      <button className={`${toggle?("p-2 bg-gray-300  "):("p-2 bg-white ")}`}>Get By City Search</button>
     
      </div>
      
          <div>


           { !toggle?(<LocationComponent register={register} />)
            :(<CitySearch register={register}  />)}
              <p className="text-red-500 p-5"><sup>*</sup>Please Select Locaton Before proceding</p>
            <button
              type="submit"
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 hover:scale-110
              transition-ease-in m-5 hover:outline-1 hover:outline-amber-300"
            >
              List Service
            </button>
          </div>
      
        {/* Submit button */}
      </form>
    </div>
  );
};

export default AddService;
