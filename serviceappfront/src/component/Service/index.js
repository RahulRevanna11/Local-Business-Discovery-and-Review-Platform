import React from "react";
import ReactStars from "react-rating-stars-component";
import download from "../../assets/download.jpeg";
import Myservice from "./Myservice";
import { useSelector } from "react-redux";
import ImageBlock from "./ImageBlock";
import RatingStar from "../common/RatingStar";
import PreviousWork from "./PreviousWork/PreviousWork";

const Services = () => {
  const { service } = useSelector((state) => state.service);
  return (
    <div className="w-full">
      <div className="flex justify-around items-center border-2 border-gray-300 gap-10 w-full rounded-2xl">
    
        <div className="flex flex-col items-center">
        <p className="text-xl  font-bold border-2 border-zinc-600 p-1">{service.name}</p>
          <RatingStar size={50} count={5} value={3} edit={false} />
          <p className="bg-green-500 p-5 text-center rounded-2xl text-xl font-bold">
            {service?.ratingAndReviews?.length} Reviews
          </p>
        </div>
        <div className="border-x-2 border-gray-300 h-[100%] px-20 py-10 flex flex-col gap-6 items-center ">
          <h1 className="text-xl font-bold p-4">Ratings</h1>

          <div className="flex items-center gap-10 border-3 border-stone-500">
            <p className="text-center bg-red-300 text-red-700 p-4 rounded-xl">
              10
            </p>
            <div>
            
              <RatingStar size={25} count={5} value={5} edit={false} />
            </div>
          </div>

          <div className="flex items-center gap-10 border-3 border-stone-500">
            <p className="text-center bg-red-300 text-red-700 p-4 rounded-xl">
              10
            </p>
            <div>
              {" "}
              <RatingStar size={25} count={5} value={5} edit={false} />
            </div>
          </div>

          <div className="flex items-center gap-10 border-3 border-stone-500">
            <p className="text-center bg-red-300 text-red-700 p-4 rounded-xl">
              10
            </p>
            <div>
              <RatingStar size={25} count={5} value={5} edit={false} />
            </div>
          </div>

          <div className="flex items-center gap-10 border-3 border-stone-500">
            <p className="text-center bg-red-300 text-red-700 p-4 rounded-xl">
              10
            </p>
            <div>
              {" "}
              <RatingStar size={25} count={5} value={5} edit={false} />
            </div>
          </div>

          <div className="flex items-center gap-10 border-3 border-stone-500">
            <p className="text-center bg-red-300 text-red-700 p-4 rounded-xl">
              10
            </p>
            <div>
              {" "}
              <RatingStar size={25} count={5} value={5} edit={false} />
            </div>
          </div>
        </div>
        <div className="mx-auto ">
          <div className="  flex flex-col items-center gap-5 ">
            <img src={download} className=" rounded-xl border shadow-xl"></img>
            <p className="text-xl bg-blue-200 rounded-xl p-2">{service?.enquiry?.length} Enquiry</p>
          </div>
        </div>
      </div>

      <Myservice />
      <ImageBlock />
      <PreviousWork/>
    </div>
  );
};

export default Services;
