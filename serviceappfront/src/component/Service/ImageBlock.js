import React from 'react'
import { useSelector } from 'react-redux'
import {BiSolidAddToQueue} from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
const ImageBlock = () => {
 const navigate=useNavigate();
    const {service}=useSelector((state)=>state.service);


  return (
    <div className='border-2 border-stone-200 p-3 rounded-md'>
      <p>Images</p>
    <div className='flex flex-wrap gap-3'>
      
   {service?.images&&
    service?.images?.map((item,key)=>{
     return <img src={item} key={key} ></img>
    })

    }  
    
    </div >
    {/* <i></i> */}
    <button className='m-4  bg-gray-700  p-4 w-auto flex gap-2 rounded-lg' 
   
              onClick={() => {
                navigate("/dashboard/editservice");
              }}> 
    <p  className='text-gray-500 in inline' >Add Images</p>
    <p className="text-red-500 text-3xl inline" >< BiSolidAddToQueue/></p>
     </button>
    </div>
  )
}

export default ImageBlock