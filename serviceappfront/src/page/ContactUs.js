import React, { useState } from "react";
// rafce
import contactUs from "../assets/contactUs/contactUs.jpg";
import Navbar from "../component/common/navbar";
import { Form } from "react-router-dom";
import { useSelector } from "react-redux";
const ContactUs = () => {
  const [data, handleData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    other: "",
  });

  const onClickHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(data);
    handleData({ ...data, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(data);
   
  
  };
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
    <div className="bg-gray 100">
        <Navbar/>
      <h1 className="text-2xl font-semibold">Contact US</h1>
      <div className="flex justify-around border-2 border-cyan-600 sm:flex-row">
        <div className="  p-5 ">
          <img
            src={contactUs}
            className=" rounded-3xl border-r-blue-500 border-b-8 border-r-blue-500 border-r-8 w-[50rem]"
            alt=""
          />
        </div>
        <div className="text-black p-5 bg-red-50 rounded-2xl pm11">
          <form className="flex flex-col gap-7 rounded-lg bg-richblack-700 p-3 text-[16px] leading-[24px] text-richblack-5 shadow-[0_1px_0_0] shadow-white/50 placeholder:text-richblack-400 focus:outline-none" onSubmit={handleSubmit}>
            <div className="flex ">
              <div className="pr-4 ">
                <label className="  m-2" htmlFor="FirstName">
                  FirstName
                </label>
                <input
                  type="text "
                  id="FirstName "
                  className="w-full p-2 border rounded text-neutral-600 rounded-xl"
                  value={data.firsrtName}
                  onChange={onClickHandler}
                  name="firstName"
                />
              </div>
              <div className="pl-4">
                <label htmlFor="LastName">LastName</label>
                <input
                  type="text"
                  id="LastName"
                  value={data.lastName}
                  name="lastName"
                  onChange={onClickHandler}
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>
            <div className="flex flex-col flex-start">
              <div>
                <label htmlFor="email" className="">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={data.email}
                  name="email"
                  onChange={onClickHandler}
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>
            <div>
              <label htmlFor="phoneNumber">PhoneNumber</label>
              <input
                type="text"
                id="phoneNumber"
                value={data.phoneNumber}
                name="phoneNumber"
                onChange={onClickHandler}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label htmlFor="other">what would you like to disscus?</label>
              <input
                type="text"
                id="other"
                value={data.other}
                name="other"
                onChange={onClickHandler}
                className="w-full p-2 border rounded"
              />
            </div>
            <input type="submit" placeholder="Submit" className="bg-blue-500 rounded-md p-2  mx-auto items-start py-4 px-5" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
