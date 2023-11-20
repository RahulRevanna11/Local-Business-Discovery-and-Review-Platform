import React from "react";


import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// mport "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/scrollbar";
// import { Autoplay,,Navigation, Pagination}  from 'swiper'


const ProfileImages = (props) => {

  console.log(props);
  return (
    <div className=" border-slate-200 border-2 m-4 p-5">
      <div className="m-5">
        <p className="text-black font-mono text-xl">Images</p>
      </div>
      <Swiper
       loop={true}
        spaceBetween={3}
        scrollbar={{ draggable: true }}
        slidesPerView={5}
        // modules={[FreeMode, Pagination]}
        onSlideChange={() => console.log("slide change")}
        navigation={true}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{ delay: 3000 }} 
      >
        {props?.images.map((image, i) => {
          return (
            <SwiperSlide>
              <img src={image} alt="serviceimage" className="h-44 w-64 rounded-lg border-gray-500 bottom-2"></img>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ProfileImages;
