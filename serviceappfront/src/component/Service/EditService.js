import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { updateProfile } from "../../services/oprerations/SettingsAPI";
import { editCourseDetails, fetchProfile } from "../../services/oprerations/serviceAPIs";
import IconBtn from "../common/IconBtn";
import EditQuestion from "./EditQuestion";
import { useEffect, useState } from "react";
import EditImage from "./EditImage";
const genders = ["Male", "Female", "Non-Binary", "Prefer not to say", "Other"];

export default function EditProfile() {
  const { user } = useSelector((state) => state.profile);
  const { service } = useSelector((state) => state.service);
  const { token } = useSelector((state) => state.auth);
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
// console.log(` : ${token}`);

const getData=async()=>{
  const responce=await fetchProfile(user?.service,true);
  if(responce&&responce?.data?.data)
   localStorage.setItem("service", JSON.stringify(responce?.data?.data))
}
useEffect(()=>{
getData();
},[])
if(!service)
  {
    return <button onClick={()=>(navigate('/dashboard/add-service'))} className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full custom-btn mx-auto">
    Please Add your service
  </button>
  }
console.log('service '+service);
  const submitProfileForm = async (data) => {
    console.log("Form Data - ", data)
    try {
      data.id=service._id
     await  dispatch(editCourseDetails(data, token));
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(submitProfileForm)}>
   
        {/* Profile Information */}
        <div className="my-10 flex flex-col gap-y-6 rounded-md border-[1px] border-richblack-700  p-8 px-12">
          <h2 className="text-lg font-semibold text-richblack-5">
            Service Details
          </h2>
          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="firstName" className="lable-style">
                Name
              </label>
              <input
                type="text"
                name="serviceName"
                id="serviceName"
                placeholder="Enter first name"
                className="form-style"
                {...register("name", { required: true })}
                defaultValue={service?.name}
              />
              {errors.firstName && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your service name.
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="lastName" className="lable-style">
                tags
              </label>
              <input
                type="text"
                name="tags"
                id="tags"
                placeholder="Enter tags"
                className="form-style"
                {...register("tags")}
                defaultValue={service?.tags}
              />
              {errors.lastName && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter tags
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="dateOfBirth" className="lable-style">
                Address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                className="form-style"
                {...register("address", {
                  required: {
                    value: true,
                    message: "Please enter your Date of Birth.",
                  },
                })}
                defaultValue={service?.address}
              />
              {errors.dateOfBirth && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  {errors.dateOfBirth.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="year_of_establishment" className="lable-style">
                Experience
              </label>
              <input
                type="number"
                name="year_of_establishment"
                id="year_of_establishment"
                placeholder="Enter Your Expirence"
                className="form-style"
                {...register("year_of_establishment",)}
                defaultValue={service?.year_of_establishment}
              ></input>
              {errors?.year_of_establishment && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your Experience.
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="contactNumber" className="lable-style">
                Contact Number
              </label>
              <input
                type="tel"
                name="contactNumber"
                id="contactNumber"
                placeholder="Enter Contact Number"
                className="form-style"
                {...register("contactNumber", {
                  required: {
                    value: true,
                    message: "Please enter your Contact Number.",
                  },
                  maxLength: { value: 12, message: "Invalid Contact Number" },
                  minLength: { value: 10, message: "Invalid Contact Number" },
                })}
                defaultValue={user?.additionalDetails?.contactNumber}
              />
              {errors.contactNumber && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  {errors.contactNumber.message}
                </span>
              )}
            </div>
            {/* <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="about" className="lable-style">
                About
              </label>
              <input
                type="text"
                name="about"
                id="about"
                placeholder="Enter Bio Details"
                className="form-style"
                {...register("about", { required: true })}
                defaultValue={user?.additionalDetails?.about}
              />
              {errors.about && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your About.
                </span>
              )}
            </div> */}
          </div>
        </div>

        <div />
        <div></div>

        <div className="my-10 flex flex-col gap-y-6 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
          <h2 className="text-lg font-semibold text-richblack-5">Quick Info</h2>
          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="avalableDays" className="lable-style">
                AvalableDays
              </label>
              <input
                type="text"
                name="avalableDays"
                id="avalableDays"
                placeholder="Enter Avalable Days"
                className="form-style"
                {...register("avalableDays", { required: true })}
                defaultValue={service?.avalableDays}
              />
              {errors.avalableDays && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your Avalable Days.
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="GSTIN" className="lable-style">
                GSTIN
              </label>
              <input
                type="text"
                name="GSTIN"
                id="GSTIN"
                placeholder="Enter GSTIN"
                className="form-style"
                {...register("GSTIN")}
                defaultValue={service?.GSTIN}
              />
              {errors.GSTIN && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter GSTIN
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="landMark" className="lable-style">
                landMark
              </label>
              <input
                type="text"
                name="landMark"
                id="landMark"
                placeholder="Enter Landmark"
                className="form-style"
                {...register("landMark", {
                  
                })}
                defaultValue={service?.landMark}
              />
            </div>
            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="pinCode" className="lable-style">
                Pin Code
              </label>
              <input
                type="text"
                name="pinCode"
                id="pinCode"
                placeholder="Enter PinCode"
                className="form-style"
                {...register("pinCode")}
                defaultValue={service?.pinCode}
              ></input>
              {errors.pinCode && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your Pin Code.
                </span>
              )}
            </div>
          </div>

          {/* <div className="flex flex-col gap-5 lg:flex-row">
            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="contactNumber" className="lable-style">
                Contact Number
              </label>
              <input
                type="tel"
                name="contactNumber"
                id="contactNumber"
                placeholder="Enter Contact Number"
                className="form-style"
                {...register("contactNumber", {
                  required: {
                    value: true,
                    message: "Please enter your Contact Number.",
                  },
                  maxLength: { value: 12, message: "Invalid Contact Number" },
                  minLength: { value: 10, message: "Invalid Contact Number" },
                })}
                defaultValue={user?.additionalDetails?.contactNumber}
              />
              {errors.contactNumber && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  {errors.contactNumber.message}
                </span>
              )}
            </div>
            {/* <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="about" className="lable-style">
                About
              </label>
              <input
                type="text"
                name="about"
                id="about"
                placeholder="Enter Bio Details"
                className="form-style"
                {...register("about", { required: true })}
                defaultValue={user?.additionalDetails?.about}
              />
              {errors.about && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your About.
                </span>
              )}
            </div> 
              </div>*/}
        </div>

        <div />
        <div></div>



        <div className="my-10 flex flex-col gap-y-6 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">

        <div className="flex flex-col gap-2 ">
              <label htmlFor="about" className="lable-style">
                About
              </label>
              <text
                // type="textarea"
                name="about"
                id="about"
                placeholder="Enter About Your Service"
                className="form-style"
                {...register("about", { required: true })}
                defaultValue={service?.about}
                rows="8" cols="50"/>
              {errors.GSTIN && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter GSTIN
                </span>
              )}
            </div>
          </div>
        <div className="flex justify-end gap-2">
          <button
            onClick={() => {
              navigate("/dashboard/my-profile");
            }}
            className="cursor-pointer rounded-md bg-richblack-700 py-2 px-5 font-semibold text-richblack-50"
          >
            Cancel
          </button>
          <IconBtn type="submit" text="Save" />
        </div>
        
      </form>

      { service&& <EditQuestion data={service?.questionAnswer}/>}

{ service&& <EditImage Images={service?.images}/>}
    </>
  );
}
