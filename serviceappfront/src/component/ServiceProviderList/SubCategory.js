import React from 'react';
import { useState } from 'react';
import LikeButton from '../button/LikeBtn';
// import Chat from '../chat/chat';
import { FaTimes } from 'react-icons/fa';
import ReactStars from "react-rating-stars-component";
import ImageSlider from '../common/ImageSlider';
import unknown from "../../assets/unknown.png"
const defaultData = {
    image: 'your_default_image_url',
    rating: '4.5',
    location: 'New York, USA',
    tag: 'Travel',
    phoneNumber: '123-456-7890',
};

const HorizontalCard = ({ data }) => {
    // data = data || defaultData;

    const [isOpen, setIsOpen] = useState(false);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="bg-white rounded-lg  mt-20 Sshadow-lg  flex border-slate-400 border-2 w-[70%]">
            <div className='h-50 w-52 m-5 border-slate-400 border-2'>
                {/* <img src={data.image} alt="Item" className="w-full h-40 object-cover" /> */}
                {
                    data&&!data?.images.length>0?(<img src={unknown} alt="Item" className="w-[100%] h-[100% ] " />):(
                
                    
                    <ImageSlider images={data?.images} count={1} dots={false}  />)
                }
            </div>
            {isOpen &&
                <div className='fixed left-[33.33%] top-[33.33%] '>
                    <button onClick={toggleChat}>< FaTimes /></button>
                    {/* <Chat /> */}
                </div>}
            <div className='position: relative left-[52%] '> <LikeButton /></div>
            <div className="w-3/5 p-4">
                <div className="text-2xl font-bold">{data.name} </div>
                <div className="text-lg mt-2">{data.address}</div>
                <div className='flex mt-2 '>
                   { data?.tag&&<div className="text-lg  m-1 border-slate-400 border-2 max-w-max p-1 rounded-lg">{data.tag}</div>}
                    {/* <div className="text-lg  m-1 border-slate-400 border-2 max-w-max p-1 rounded-lg">Plumbining</div> */}
                </div>
                <div>
                <ReactStars
                    edit={false}
                  count={5}
                  // onChange={ratingChanged}
                  size={25}
                  isHalf={false}
                  value={data.avgRating}
                  emptyIcon={<i className="far fa-star"></i>}
                  // halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                  
                />
                </div>
                <div className="flex items-center mt-4">
                    <button className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 `rounded mr-2">Enquire</button>
                   
                </div>
                <div>
                    <p>Year of Expirance {data?.year_of_establishment}</p>
                </div>
                {/* <div className="text-lg mt-4 font-bold">Phone Number: {data?.owner?.mobile}</div> */}
            </div>
        </div>
    );
};

export default HorizontalCard;