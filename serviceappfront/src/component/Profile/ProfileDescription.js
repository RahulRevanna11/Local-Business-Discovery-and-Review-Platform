import React, { useState } from "react";
import download from "../../assets/download.jpeg";
import { MdOutlineInsights } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { BsWhatsapp } from "react-icons/bs";
import { FaShare } from "react-icons/fa";
// import ReactStars
import { RiAiGenerate } from "react-icons/ri";
import ReactStars from "react-rating-stars-component";
import { toast } from "react-hot-toast";
import ConfirmationModal from "./ConfirmationModal";
import EnquireNow from "./EnquireNow";
import { Link } from "react-router-dom";
// import {toast} frsom "react-hot-toast";

const ProfileDescription = (props) => {
  const [confirmationModal, setConfirmationModal] = useState(null);

  const handleClick = () => {
    navigator.clipboard.writeText(
      `localhost:3000/services/profile/serviceId:${props._id}`
    );
    const toastId = toast.success("Link Copied Successfully");
    toast.success("Link Copied Successfully", "", "", "3000");
    toast.dismiss(toastId);
  };
  console.log(props);
  // const toaster = useToaster();
  const showToast = () => {
    // const toastId = toast.success("This is a toast notification!", {
    //   duration: 10000, // Set the duration for the toast to be displayed
    // });
    // console.log(toastId);
  };
  return (
    <div className="flex flex-col md:flex-row md:align-top md:mt-10 rounded-lg gap-6 border-2 lg:mx-5 justify-between min-w-min">
      <div className="m-10 block">
        <img
          src={props?.owner?.image}
          className="w-full md:w-[40vh] rounded-lg object-cover"
          alt="jkfd"
        />
      </div>
      <div className="mt-3 lg:mt-0 lg:ml-5 flex flex-col gap max-w-full md:max-w-[60vw] inline ml-2 mr-2">
        <h2 className="text-black text-3xl font-bold from-stone-300 p-2">
          {props.name}
        </h2>
        {props?.address && (
          <h2 className="text-gray-500 text-xl font-bold from-stone-300 p-2">
            {props?.address}
          </h2>
        )}
        <div className="flex flex-row gap-3 items-center justify-center md:justify-start">
          <p className="bg-green-500 inline px-2 py-1 rounded-lg text-white text-sm md:text-base">
            {props?.avgRating || 0}
          </p>
          <ReactStars
            count={5}
            size={20} // Adjust as needed
            isHalf={true}
            value={3}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
          />
          <p className="text-lg text-gray-600 font-bold mt-2">
            {props?.contact || 0}
          </p>
        </div>
        <div className="flex mt-2 gap-4 flex-wrap">
          <div className="font-semibold flex gap-2">
            <MdOutlineInsights />
            {props?.totalEnquires || 0} People recently enquired
          </div>
          <p className="bg-gray-500 inline p-1 rounded-md text-white text-sm md:text-base">
            Since{' '}
            <span className="text-white px-1">
              {props?.year_of_establishment || 0.1}
            </span>{' '}
            Year
          </p>
        </div>
        <div className="flex flex-col mt-6 pt-6 md:flex-row justify-between font-semibold gap-4 md:mt-1">
          <div className="bg-green-600 h-8 p-1 rounded-xl pl-2 pr-2 flex justify-center hover:bg-green-700 hover:scale-110 transition duration-150 ease-out hover:ease-in">
            <IoIosCall className="font-bold text-xl md:text-2xl mr-2 text-white" />
            <p className="text-white h-2 p-0 text-base md:text-md">
              {props?.owner?.mobile || 'not available'}
            </p>
          </div>
          <div className="text-md p-2 h-8 border-gray-100 border-2 rounded-lg hover:scale-110 transition duration-150 ease-out hover:ease-in flex gap-2 items-center">
            <RiAiGenerate className="text-xl mt-1 text-red-500" />
            <p>
              <Link
                to={`/addRating/${props?._id}/${'empty'}/${props?.name} `}
                className="inline-block bg-pink-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded-full custom-button text-sm md:text-base"
              >
                Tap to Rate
              </Link>{' '}
            </p>
          </div>
          <div className="text-md border-gray-100 px-2 h-8 border-2 rounded-lg hover:scale-110 transition duration-150 ease-out hover:ease-in flex gap-2 justify-center align-center">
            <FaShare className="flex flex-col h-6 md:flex-row justify-between mt-4 font-semibold gap-4 md:mt-1 ml-2 mr-2" />
            <p onClick={handleClick} >Share</p>
          </div>
        </div>
        <div
          className="text-2xl rounded-xl my-5 text-white font-bold inline w-full md:w-44 cursor-pointer "
          onClick={() =>
            setConfirmationModal({
              btn1Text: 'Logout',
              btn2Text: 'Cancel',
              btn2Handler: () => setConfirmationModal(null),
              id: props._id,
            })
          }
        >
          <div className="p-2 inline w-20 box-border ">
            <EnquireNow />
          </div>
        </div>
      </div>
      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </div>
  );
};


export default ProfileDescription;

// <div
//   className="flex  align-top  mt-10  rounded-lg
//  gap-6  border-2  lg:mx-5 justify-between  min-w-min "
// >
//   <div className="m-10 inline-block">

//         <img
//           src={download}
//           className="w-[40vh] rounded-lg object-cover"
//           alt="jkfd"
//         ></img>

//   </div>

//   <div className="mt-3  lg:ml-[20vh] flex flex-col gap  max-w-[60vw] inline">
//     <h2 className="text-black text-3xl font-bold from-stone-300  p-2 ">
//       {props.name}
//     </h2>

//     <div className="flex flex-row gap-3 justify-center">
//       <p className="bg bg-green-500 inline px-2 py-1 rounded-lg ">4.2</p>
//       <ReactStars
//         count={5}
//         // onChange={ratingChanged}
//         size={30}
//         isHalf={true}
//         value={3}
//         emptyIcon={<i className="far fa-star"></i>}
//         halfIcon={<i className="fa fa-star-half-alt"></i>}
//         fullIcon={<i className="fa fa-star"></i>}
//         activeColor="#ffd700"
//       />
//       <p className="text-lg text-gray-600 font-bold mt-2">
//         Naupada-Thane West,Thane
//       </p>
//     </div>

//     <div className="flex mt-2 gap-4">
//       <div className="font-semibold flex gap-2">
//         <MdOutlineInsights />
//         {props.totalEnquires ? props.totalEnquires : ""} People recently
//         enquired
//       </div>
//       <p className="bg-gray-500 inline p-1 rounded-md ">
//         Since{" "}
//         {props.year_of_establishment ? props.year_of_establishment : 0.1}{" "}
//         Year
//       </p>
//     </div>
//     <div className="flex justify-between mt-4 font-semibol  gap-4 sm:mt-1">
//       <div className="bg-green-600 rounded-xl p-2 flex justify-center hover:bg-green-700 hover:scale-110 ransition duration-150 ease-out hover:ease-in">
//         <IoIosCall className="font-bold text-2xl mr-2 text-white   " />
//         <p className=" text-white font-bold text-xl md:text-md">
//           {/* {props.contactNo ? props.contactNo : ""} */}
//           9694655211
//         </p>
//       </div>
//       <div className=" rounded-lg p-2 flex gap-2 justify-center border-gray-200 border-2 hover:scale-110 ransition duration-150 ease-out hover:ease-in">
//         <BsWhatsapp className="text-2xl font-bold text-green-600" />
//         <p className="text-lg font-">Chat</p>
//       </div>
//       <div className="text-md  p-2 border-gray-100 border-2 rounded-lg hover:scale-110 ransition duration-150 ease-out hover:ease-in flex gap-2">
//         <RiAiGenerate className="text-xl mt-1 text-red-500" />
//         <p>Tap to Rate</p>
//       </div>
//       <div className="text-md  p-2 border-gray-100 border-2 rounded-lg hover:scale-110 ransition duration-150 ease-out hover:ease-in flex gap-2 justify-center align-center">
//         <FaShare className="text-red-400 font-bold text-lg  mt-1" />
//         <p>Share</p>
//       </div>
//     </div>
//     <div className=" text-2xl  bg-blue-400  rounded-xl my-5 text-white font-bold inline w-44">
//       <p className="p-2 inline">Enquire Now</p>
//     </div>
//   </div>
// </div>
