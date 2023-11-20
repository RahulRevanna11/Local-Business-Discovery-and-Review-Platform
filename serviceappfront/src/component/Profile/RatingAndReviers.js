import React, { useEffect, useState } from "react";
import { apiConnector } from "../../services/apiConnector";
import download from "./../../assets/download.jpeg";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
const RatingAndReviers = (Data) => {
  const [RatingData, setRatingData] = useState(Data.ratingAndReviews);
  const [avgRatingData, setAvgRatingData] = useState(0);
  useEffect(() => {
    let result = 0.0,
      n = 0;
    Data.ratingAndReviews.map((rating) => {
      result += rating.rating;
      n++;
    });
    //  result=result/n;
    setAvgRatingData(result / n);
  });

  console.log(Data);

  return (
    <div className="flex flex-col  align-top m-4 border-2 border-gray-100 p-4 gap-5">
      <h2 className="text-lg ">Reviews & Ratings</h2>
      {Data.ratingAndReviews?.length ? (
        <div className="border-b-1 border-b-gray-100">
          <div className="flex lg:gap-4 sm:gap-3 ">
            <div className="text-4xl text-white font-extrabold bg-green-600 p-3      rounded-xl">
              {avgRatingData.toFixed(1)}{" "}
            </div>
            <div className="flex flex-col text-lg">
              <div className="font-bold text-2xl ">
                {RatingData?.length} Rating{" "}
              </div>
              <div>
                QuickLink rating index based on {RatingData?.length} ratings
                across the web
              </div>
            </div>
           
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <h1 className="p-2 text-lg">User Reviews</h1>

            {RatingData ? (
              RatingData.map((rating, i) => {
                return (
                  <div
                    key={i}
                    className="border-2 border-gray-200 p-4 rounded-lg "
                  >
                    {/* <h1>{rating.user.firstName} {rating.user.lastName}</h1> */}

                    <div className="flex sm:gap-8 md:gap-8 lg:gap-10 ">
                      <div className="rounded-lg ">
                        <img
                          src={rating.user.image}
                          className="cover w-12 rounded-3xl"
                          alt="profile"
                        ></img>
                      </div>
                      <div>
                        <h1 className="text-lg text-gray-500">
                          {rating.user.firstName} {rating.user.lastName}
                        </h1>
                        <ReactStars
                          edit={false}
                          count={5}
                          // onChange={ratingChanged}
                          size={25}
                          isHalf={false}
                          value={rating?.rating}
                          emptyIcon={<i className="far fa-star"></i>}
                          // halfIcon={<i className="fa fa-star-half-alt"></i>}
                          fullIcon={<i className="fa fa-star"></i>}
                          activeColor="#ffd700"
                        />
                        <p className="text-lg">{rating.review}</p>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <></>
            )}
          </div>
        </div>
      ):(<p>Not reviewed yet</p>)}
    </div>
  );
};

export default RatingAndReviers;
