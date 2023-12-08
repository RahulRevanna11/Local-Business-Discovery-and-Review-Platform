const User=require("../models/User");
const Service=require("../models/Service");
const SubCategory=require("../models/SubCategory");
const  mongoose = require('mongoose');

const Enquiry = require('../models/Enquiry'); 
const {uploadImageToCloudinary}=require("../utils/imageUploader");

exports.createService=async (req,res)=>{
   try {const userId=req.user.id;
     console.log(`userid ${userId}`)
    const user=await User.findById({_id:userId});
    //get data
    const{name,address,subCategory,latitude,longitude}=req.body;
    if (
       
        !name||
        !subCategory ||
        !address||!longitude||!latitude
      ) {
        return res.status(400).json({
          success: false,
          message: "All Fields are Mandatory",
        })
      }

      const personDetails = await User.findById(userId, {
        accountType: "Business",
      });

      if (!personDetails) {
        return res.status(404).json({
          success: false,
          message: "Person Details Not Found",
        })
      }

      
      if (personDetails?.service) {
        return res.status(404).json({
          success: false,
          message: "Person have only one service",
        })
      }
       // Check if the tag given is valid
    const subCategoryDetail = await SubCategory.findById({_id:subCategory})
    if (!subCategoryDetail) {
      return res.status(404).json({
        success: false,
        message: "subCategory Details Not Found",
      })
    }
    // // console.log(S ervice);
    // subCategory=new mongoose.Types.ObjectId(subCategory);
    const subCategoryId=subCategoryDetail._id;

    const service= await Service.create({
        name,
        address,
        subCategory:subCategoryDetail._id,owner:userId,
        latitude,longitude
    });
    console.log("service "+service)

    const categoryDetails=await SubCategory.findByIdAndUpdate(
        {_id:subCategoryId},{$push:{
              service:service._id
        }},
        {new:true});

    const UserDetails= await User.findByIdAndUpdate({_id:userId},{service:service._id});
    res.status(200).json({
        success: true,
        data: service,
        message: "service Created Successfully",
      })
    }

    
catch(error)
{
   
    console.log(error)
    res.status(500).json({
      success: false,
      message: "Failed to create service",
      error: error.message,
    })
}

}

exports.editService=async (req,res)=>{
try{
const data=req.body;
console.log(data);;
if(!data)
{
    res.status(400).json({
        success:false,
        message:"data not present"
    })
}

const UpdatedService=await Service.findByIdAndUpdate({_id:data.id},data);
if(!UpdatedService)
{
    res.status(400).json({
        success:false,
        message:"service not found"
    })
}

res.json({
    success: true,
    message: "services updated successfully",
    data: UpdatedService,
  })
}catch(error)
{
    console.error(error)
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    })
}
}


// Get Course List
exports.getAllServices = async (req, res) => {
    try {
      const allServices = await Service.find({});
        
      
  
      return res.status(200).json({
        success: true,
        data: allServices,
      })
    } catch (error) {
      console.log(error)
      return res.status(404).json({
        success: false,
        message: `Can't Fetch Services Data`,
        error: error.message,
      })
    }
  }



  exports.getFullServiceDetails = async (req, res) => {
    try {
      const { serviceId } = req.body
      // const userId = req.user.id
      console.log(req.body);
      const serviceDetails = await Service.findOne({
        _id: serviceId,
      })
        .populate({
          path: "owner",
          populate: {
            path: "additionalDetails",
          },
        })
        // .populate("ratingAndReviews")
        .populate("ratingAndReviews")
        .populate({
          path: "ratingAndReviews",
          populate: {
            path: "user",
          },
        })
        .populate("questionAnswer")
        .populate({
          path: "enquiry",
          populate: {
            path: "sender",
          },
        })
        .exec()
  
     
  
      
  
     console.log(` serviceDetails  ${serviceDetails}`)
  
      return res.status(200).json({
        success: true,
        data: 
            serviceDetails,
         
        
      })
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      })
    }
  }
  

exports.getSubCategoryServices=async (req,res)=>{
const {subCategoryId}=req.body;

if(!subCategoryId)
{
  return res.status(400).json({
    success:false,
    message:"subcatagoryid not present"
  });

}
const subCategoryDetails=await SubCategory.findById(subCategoryId).populate("service");

if(!subCategoryDetails)
{
  return res.status(400).json({
    success:false,
    message:"subCategory not be fetched "
  });
}
return res.status(400).json({
  success:true,
  data:subCategoryDetails,
  message:"subCategoryDetails fetched  successfully"
});
}

  // Get a list of Service for a given Business
exports.getPersonServices = async (req, res) => {
    try {
      
      const {BusinessId} = req.body
  
      const Services = await Services.find({
        Owner: BusinessId,
      });
  
      res.status(200).json({
        success: true,
        data: Services,
      })
    } catch (error) {
      console.error(error)
      res.status(500).json({
        success: false,
        message: "Failed to retrieve Bussness Data",
        error: error.message,
      })
    }
  }

exports.uploadImages=async(req,res)=>{
  try
  {
  const {serviceId}=req.body;
 
  const imageFile=req.files.imageFile;
  if(!imageFile||!serviceId)
  {
    return res.status(200).json({
        message:"image is not present"
    })
  }
  const image=await uploadImageToCloudinary(imageFile,process.env.FOLDER_NAME,200,200);
  console.log(image);

  // const user=User.findById({userId},{service:true});
  // const serviceId=user.service;
  const service=await Service.findByIdAndUpdate(
    {_id:serviceId},
    {$push:{
      images:image.secure_url
    }},
    {new:true}
    );
    return res.status(200).json({
      success:true,
      message:"image uploaded successfully",
      data:image,
      service:service
    })

  } catch(error){
    console.log(error);
    return res.status(200).json({
      success:false
      ,message:"error in uploading image",
      error:error.message

    })
  }

}




exports.createEnquiry = async (req, res) => {
  try {
    const {  message, address, response="" ,serviceId} = req.body;
    const sender=req.user.id
    const newEnquiry = new Enquiry({
      sender,
      message,
      address,
      response,
     service: serviceId

    });
    const savedEnquiry = await newEnquiry.save();

    const service=await Service.findByIdAndUpdate(
      {_id:serviceId},
      {$push:{
        enquiry:savedEnquiry._id
      }},
      {new:true}
      );
      console.log('service')
       console.log(service);

      const UserDetails=await User.findByIdAndUpdate(
        {_id:sender},
        {$push:{
          enquiry:savedEnquiry._id
        }},
        {new:true}
        );

   
    return res.status(200).json({
      success:true,
      message:"enquiry  done successfully",
      data:savedEnquiry,
     
    })
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create enquiry',
  error:error });
  }
};


exports.updateEnquiry = async (req, res) => {
  try {
    const {message, address, response,enquiryId } = req.body;

    const updatedEnquiry = await Enquiry.findByIdAndUpdate(enquiryId, {
     
      message,
      address,
      response,
    }, { new: true });
    
    if (!updatedEnquiry) {
      return res.status(404).json({ error: 'Enquiry not found' });
    }

    res.json(updatedEnquiry);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update enquiry' });
  }
};
