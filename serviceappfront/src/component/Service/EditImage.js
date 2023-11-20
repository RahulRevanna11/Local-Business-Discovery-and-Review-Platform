import React, { useState } from 'react';
import { FiUpload } from 'react-icons/fi';

import {UploadServiceImages} from "../../services/oprerations/serviceAPIs"
import { useSelector } from 'react-redux';
const EditImage = ({Images}) => {
  const {token }=useSelector((state)=>state.auth)
  const {service }=useSelector((state)=>state.service)
  const [images, setImages] = useState([...Images]);
  const [showAllImages, setShowAllImages] = useState(false);
  const [newImage, setNewImage] = useState(null);
  const [imgFile, setIMGFile] = useState(null);
  const [loading, setLoading] = useState(false)
  const handleShowAllImages = () => {
    setShowAllImages(true);
  };

  const handleShowLessImages = () => {
    setShowAllImages(false);
  };

  const handleAddImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setIMGFile(file)
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target.result;

        img.onload = () => {
          const canvas = document.createElement('canvas');
          const maxWidth = 400; // Set your desired max width
          const maxHeight = 400; // Set your desired max height
          let width = img.width;
          let height = img.height;

          // if (width > maxWidth || height > maxHeight) {
          //   const ratio = Math.min(maxWidth / width, maxHeight / height);
          //   width = width * ratio;
          //   height = height * ratio;
          // }

          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, width, height);

          const resizedImage = canvas.toDataURL('image/jpeg'); // Adjust format as needed
          setNewImage(resizedImage);
        };
      };
      reader.readAsDataURL(file);
      setNewImage(file)
    }
  };
  const uploadImage= async ()=>{
    setLoading(true);
      const data=new  FormData();
      data.append('imageFile',imgFile);
      data.append('serviceId',service._id);
const res=await UploadServiceImages(data,token);
console.log(res);
setLoading(false);
 setImages([...images,res.secure_url])
setNewImage(null);



  }
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Image Gallery</h1>

      <div className="flex flex-wrap gap-4">
        {showAllImages
          ? images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                className="max-w-1/4 h-auto"
              />
            ))
          : images.slice(0, 2).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                className="max-w-1/4 h-auto"
              />
            ))}
      </div>

      {!showAllImages && (
        <button
          onClick={handleShowAllImages}
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 mt-4 rounded-md focus:outline-none"
        >
          Show All Images
        </button>
      )}

      {showAllImages && (
        <button
          onClick={handleShowLessImages}
          className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 mt-4 rounded-md focus:outline-none"
        >
          Show Less Images
        </button>
      )}

      <div className="mt-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleAddImage}
          className="border border-gray-300 rounded px-2 py-1 focus:outline-none"
        />
        {newImage && (
          <div className="mt-4">
            <img
              src={newImage}
              alt="Image Preview"
              className="max-w-1/4 h-auto"
            />
          </div>
        )}

        {
          newImage&&(
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold flex items-center py-2 px-4 rounded" onClick={uploadImage}>
      <FiUpload className="inline-block mr-2 " />
      Upload Image
     { loading&&<div className="spinner"></div>}
    </button>
          )
        }
      </div>
    </div>
  );
};

export default EditImage;
