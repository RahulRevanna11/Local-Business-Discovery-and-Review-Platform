import React, { useState } from 'react';
import LikeButton from '../button/LikeBtn';
import { FaTimes } from 'react-icons/fa';
import ReactStars from 'react-rating-stars-component';
import ImageSlider from '../common/ImageSlider';
import unknown from '../../assets/unknown.png';

const Card = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white rounded-lg mt-5 sm:mt-10 md:mt-16 lg:mt-20 shadow-lg flex flex-col md:flex-row md:w-[70%] mx-auto">
      {/* Image Section */}
      <div className="md:w-1/3 relative">
        {data && data.images && data.images.length > 0 ? (
          <ImageSlider images={data.images} count={1} dots={false} />
        ) : (
          <img src={unknown} alt="Item" className="w-full h-full object-cover" />
        )}
        {isOpen && (
          <div className="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <button onClick={toggleChat}><FaTimes /></button>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="md:w-2/3 p-4 max-w-full overflow-x-auto">
        <div className="text-2xl font-bold mb-2">{data.name}</div>
        <div className="text-lg mb-2">{data.address}</div>
        <div className="flex flex-wrap mb-2">
          {data && data.tag && (
            <div className="text-lg m-1 border-slate-400 border-2 p-1 rounded-lg">{data.tag}</div>
          )}
        </div>
        <div className="mb-2">
          <ReactStars
            edit={false}
            count={5}
            size={25}
            isHalf={false}
            value={data.avgRating}
            emptyIcon={<i className="far fa-star"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
          />
        </div>
        <div className="flex items-center mb-2">
          <button className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded mr-2">Enquire</button>
        </div>
        <div>
          <p>Year of Experience {data.year_of_establishment}</p>
        </div>
      </div>

      {/* Like Button Section */}
      <div className="md:absolute bottom-0 right-0 p-4">
        <LikeButton />
      </div>
    </div>
  );
};

export default Card;
