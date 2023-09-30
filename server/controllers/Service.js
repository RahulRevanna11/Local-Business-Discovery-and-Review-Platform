const User=require("../models/User");
const Service=require("../models/Service");
const Category=require("../models/Category")

exports. createService=async (req,res)=>{
   try {const userId=req.user.id;
     
    const user=await User.findById({userId});
    //get data
    const{name,address,category}=req.body();
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
    const subCategoryDetail = await Category.findById(subCategory)
    if (!subCategoryDetail) {
      return res.status(404).json({
        success: false,
        message: "subCategory Details Not Found",
      })
    }
    const service= await Service.create({
        name,address,category,Owner:userId
    });
    

    const categoryDetails=await SubCategory.findByIdAndUpdate(
        {_id:subCategory},{$push:{
              service:service._id
        }},
        {new:true});

    const UserDetails= await findByIdAndUpdate({userId},{service:service._id});
    res.status(200).json({
        success: true,
        data: service,
        message: "service Created Successfully",
      })
    }

    
catch(e)
{
   
    console.error(error)
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
if(!data)
{
    res.status(400).json({
        success:false,
        message:"data not present"
    })
}

const UpdatedService=await findByIdAndUpdate({_id:data.id},data);
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
    data: updatedCourse,
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
      const allServices = await Course.find(
        {}
      );
        
      
  
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
        // .populate({
        //   path: "courseContent",
        //   populate: {
        //     path: "subSection",
        //   },
        // })
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