import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import download from "../assets/download.jpeg";
import { useParams } from "react-router";
import { createRating } from "../services/oprerations/serviceAPIs";
import { useSelector } from "react-redux";

const RateService = () => {
  const [rating, setRating] = useState(3);
  const [review, setReview] = useState("");

  const { serviceId, image, name } = useParams();
  console.log("htrgx");
  const { token } = useSelector((state) => state.auth);
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
    <form className="flex flex-col  gap-7 lg:mx-8 md:mx-5 lg:p-20 md:p-10 border-box">
      <h1 className="text-3xl font-bold drop-shadow-xl">Write Review</h1>
      <div className="flex justify-around lg:mt-8">
        <div className="flex flex-col border-2 border-gray-200 rounded-xl p-8 items-center">
          <div className="flex gap-5 ">
            <img
              src={image}
              className="lg:w-[15vw]  sm:[10vw] rounded-xl"
              alt=""
            ></img>
            <p className="font-bold text-2xl pt-7">{name}</p>
          </div>
          <h2 className="mt-8 text-lg ">How would you rate your experience?</h2>
          <ReactStars
            count={5}
            size={40}
            isHalf={true}
            value={3}
            emptyIcon={<i class="far CiStar"></i>}
            halfIcon={<i class="fa fa-star-half-alt"></i>}
            fullIcon={<i class="fa fa-star"></i>}
            activeColor="#ffd700"
            onChange={(v) => {
              setRating(v);
            }}
            // classNames={"h-42 "}
          />
        </div>
        <div className=" border-2 border-gray-300 p-8 rounded-xl flex flex-col lg:w-1/3">
          <div className="">
            <h1 className="text-xl font-bold  mb-4">What did you love?</h1>

            <input
              type="text"
              placeholder="enter some tags"
              className="border-2 border-lime-500 selection:border-amber-950 p-1 text-lg rounded-md"
            ></input>
          </div>
          <div>
            <h1>Tell us about your experience</h1>
            <textarea
              type="textarea"
              placeholder="Enter your Experience"
              onChange={(e) => {
                setReview(e.target.value);
              }}
              required={true}
              cols={8}
              className="border-2 border-lime-500 selection:border-amber-950 p-1 text-lg rounded-md w-full"
            ></textarea>
          </div>
        </div>
      </div>
      <button
        type="submit"
        onClick={() =>
          createRating({ rating: rating, review, serviceId: serviceId }, token)
        }
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full inline-block mx-auto "
      >
        Submit
      </button>
    </form>
  );
};

export default RateService;
