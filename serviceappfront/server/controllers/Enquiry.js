const Enquiry =require("../models/Enquiry");
const Service=require("../models/Service");
const User=require("../models/User")

exports.createEnquiry=async(req,res)=>{
    try {
      
      const {  name ,contact,   message  ,address,serviceId,availableDate,availableTime}=req.body;
  const sender=req.user.id;
console.log(req.body)
      if(!name||!message||!contact||!serviceId||!address||!availableDate||!availableTime||!sender)
    {
        return res.status(400).json({
            success:false,
            message: "all fields are required"
        })
      }

        const result = await Enquiry.create({name,sender,contact,message,address,service:serviceId,availableDate,availableTime});
        // console.log(result);

        //return rating
        if(!result) {

            return res.status(400).json({
                success:false,
                message: "Internal server Error"
            })

        }
        
        const serviceDetails= await Service.findOneAndUpdate({_id:serviceId},{
            $push:{
                enquiry :result._id
            }
        }, {new:true});
        //if no rating/Review exist
        console.log(serviceDetails);
        if(!serviceDetails)
        return res.status(400).json({
            success:false,
            message:'Internal server error',
            
        })


        const userDetails= await User.findOneAndUpdate({_id:req.user.id},{
            $push:{
                enquiry :result._id
            }
        }, {new:true});
     
        if(!userDetails)
        return res.status(400).json({
            success:false,
            message:'Internal server error',
            
        })
        console.log(userDetails)
        return res.status(200).json({
            success:true,
            message:'Question answer upadted successifully',
           data:result
        })
}
catch(error) {
    console.log(error);
    return res.status(500).json({
        success:false,
        message:error.message,
    })
}
}


exports.updateEnquiry=async(req,res)=>{
    try {
  
        const {   enquiryId ,name ,contact,availableDate,approved,message,availableTime,address,response}=req.body;


        // if(!sender||!message||!serviceId||!serviceId||!enquiryId)
        // {
        //   return res.status(400).json({
        //       success:false,
        //       message: "all fields are required"
        //   })
        // }

    //     const enquiry=await Enquiry.findOne({_id:enquiryId});
    //     if(!enquiry) {
  
    //         return res.status(400).json({
    //             success:false,
    //             message: "ENquiry Not found"
    //         })

    //     }
    //     if(response)
    //     enquiry.response=response;
    // if(approved)
    // enquiry.approved=true;
    //       const result = await enquiry.save();
          console.log(req.body);
    const result = await Enquiry.findOneAndUpdate(
        { _id: enquiryId },
        {
            $set: {
                response: response?response:"",
                approved: approved?true:false,
            },
        },
        { new: true } // This ensures you get the updated document in the result
    );
          //return rating
          if(!result) {
  
              return res.status(400).json({
                  success:false,
                  message: "Internal server Error"
              })
  
          }
          
        console.log(result);
          return res.status(200).json({
              success:true,
              message:'Enquiry upadted successifully',
             data:result
          })
}
catch(error) {
    console.log(error);
    return res.status(500).json({
        success:false,
        message:error.message,
    })
}}

exports.deleteEnquiry=async(req,res)=>{
    try {
  
      const {enquiryId}=req.body;
      if(!enquiryId)
      {
        return res.status(400).json({
            success:false,
            message: "all fields are required"
        })
      }
        const result = await Enquiry.findOneAndDelete({_id:enquiryId});
        // console.log(result);

        //return rating
        if(!result) {

            return res.status(400).json({
                success:true,
                message: "Internal server Error"
            })

        }
        
       
     
        return res.status(200).json({
            success:true,
            message:'Enquiry deleted successifully',
           data:result
        })
}
catch(error) {
    console.log(error);
    return res.status(500).json({
        success:false,
        message:error.message,
    })
}}

exports.getEnquiry=async(req,res)=>{
    try {
      
      const { serviceId}=req.body;


      if(!serviceId)
    {
        return res.status(400).json({
            success:false,
            message: "all fields are required"
        })
      }

        const result = await Enquiry.find({service:serviceId});
        // console.log(result);

        //return rating
        if(!result) {

            return res.status(400).json({
                success:false,
                message: "Internal server Error"
            })

        }
        
       
        console.log(result);
        


      
        return res.status(200).json({
            success:true,
            message:'Question answer upadted successifully',
           data:result
        })
}
catch(error) {
    console.log(error);
    return res.status(500).json({
        success:false,
        message:error.message,
    })
}
}


exports.getUserEnquiry=async(req,res)=>{
    try {
      
     const id=req.user.id;


      if(!id)
    {
        return res.status(400).json({
            success:false,
            message: "all fields are required"
        })
      }

        const result = await Enquiry.find({sender:id});
        // console.log(result);

        //return rating
        if(!result) {

            return res.status(400).json({
                success:false,
                message: "Internal server Error"
            })

        }
        
       
        console.log(result);
        


      
        return res.status(200).json({
            success:true,
            message:'inquiry fetched  successifully',
           data:result
        })
}
catch(error) {
    console.log(error);
    return res.status(500).json({
        success:false,
        message:error.message,
    })
}
}