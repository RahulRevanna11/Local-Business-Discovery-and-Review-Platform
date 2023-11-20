// import React, { useState, useEffect } from 'react';
// import Draggable from 'react-draggable';
// // import 'styles.css'; // Import your Tailwind CSS styles

// const ImageSlider = ({ images,count }) => {
//   const [startIndex, setStartIndex] = useState(0);
//   const [endIndex, setEndIndex] = useState(count);

//   const nextSlide = () => {
//     setStartIndex((prevIndex) => (prevIndex + 1) % images.length);
//     setEndIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setStartIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//     setEndIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   const handleAutoplay = () => {
//     const intervalId = setInterval(nextSlide, 1000); // Change slide every 3 seconds

//     return () => clearInterval(intervalId); // Cleanup on component unmount
//   };

//   useEffect(handleAutoplay, []); // Start autoplay when the component mounts

//   const visibleImages = images.slice(startIndex, endIndex + 1);

//   return (
//     <Draggable axis="x" onDrag={(_, data) => data.x > 100 && nextSlide()} onStop={() => {}}>
//       <div className="image-slider relative">
//         <button
//           onClick={prevSlide}
//           className="prev-button absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full"
//         >
//           &#8249;
//         </button>
//         <div className="image-container flex space-x-2">
//           {visibleImages.map((image, index) => (
//             <img key={index} src={image} alt={`Slide ${startIndex + index + 1}`} className="10vw h-10vh" />
//           ))}
//         </div>
//         <button
//           onClick={nextSlide}
//           className="next-button absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full"
//         >
//           &#8250;
//         </button>
//       </div>
//     </Draggable>
//   );
// };

// export default ImageSlider;



// ImageSlider.js
// ImageSlider.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = ({ images ,count,dots}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: count?count:4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} className='w-50 h-52'>
       
          <img src={image} alt={`slide-${index}`} className="w-full object-cover  " />
        </div>
      ))}
    </Slider>
    
  );
};

export default ImageSlider;

