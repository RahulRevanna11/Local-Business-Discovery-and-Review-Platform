const User=require("../models/User");
const Service=require("../models/Service");
const SubCategory=require("../models/SubCategory");
const  mongoose = require('mongoose');

const {uploadImageToCloudinary}=require("../utils/imageUploader");

exports.createService=async (req,res)=>{
   try {const userId=req.user.id;
     console.log(`userid ${userId}`)
    const user=await User.findById({_id:userId});
    //get data
    const{name,address,subCategory}=req.body;
    if (
       
        !name||
        !subCategory ||
        !address
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

      
       // Check if the tag given is valid
    const subCategoryDetail = await SubCategory.findById({_id:subCategory})
    if (!subCategoryDetail) {
      return res.status(404).json({
        success: false,
        message: "subCategory Details Not Found",
      })
    }console.log(Service);
    // subCategory=new mongoose.Types.ObjectId(subCategory);
    // const subCategoryId=subCategoryDetail._id;

    const service= await Service.create({
        name,
        address,
        subCategory:subCategoryDetail._id,owner:userId
    });
    

    const categoryDetails=await SubCategory.findByIdAndUpdate(
        {_id:subCategory},{$push:{
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
      const userId = req.user.id
      const serviceDetails = await Course.findOne({
        _id: serviceId,
      })
        .populate({
          path: "owner",
          populate: {
            path: "additionalDetails",
          },
        })
        .populate("subCategory")
        .populate("ratingAndReviews")
        
        .exec()
  
     
  
      
  
     
  
  
      return res.status(200).json({
        success: true,
        data: {
            serviceDetails,
         
        },
      })
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      })
    }
  }
  

exports.getSubCategoryServices

  // Get a list of Service for a given Business
exports.getPersonServices = async (req, res) => {
    try {
      
      const BusinessId = req.user.id
  
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
  const userId=req.user.id;
  const {serviceId}=req.body;
  const imageFile=req.files.imageFile;
  if(!imageFile)
  {
    return res.status(200).json({
        message:"image is not present"
    })
  }
  const image=uploadImageToCloudinary(imageFile,process.env.FOLDER_NAME);
  console.log(image);

  // const user=User.findById({userId},{service:true});
  // const serviceId=user.service;
  const service=Service.findByIdAndUpdate(
    {_id:serviceId},
    {$push:{
      service:image.secure_url
    }},
    {new:true}
    );
    return res.status(400).json({
      success:true,
      message:"image uploaded successfully",
      data:image
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