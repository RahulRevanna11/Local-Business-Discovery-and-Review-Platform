const { default: mongoose } = require("mongoose");
const Question =require("../models/Question");
const Service=require("../models/Service");


exports.createQuestionAnswer=async(req,res)=>{
    try {
  
      const {question,answer,serviceId}=req.body;
      if(!question||!answer||!serviceId)
      {
        return res.status(400).json({
            success:false,
            message: "all fields are required"
        })
      }
      
        const result = await Question.create({question:question,answer:answer});
        console.log(result);

        //return rating
        if(!result) {

            return res.status(400).json({
                success:false,
                message: "Internal server Error"
            })

        }
        // findByIdUpdate
        // Service.findByIdAndUpdate
        const serviceDetails = await Service.findByIdAndUpdate(
           
            serviceId,
            
            {
              $push: {
                questionAnswer: result._id,
              },
            },
            { new: true }
          );
        
        //if no rating/Review exist
        console.log(serviceDetails);
        if(!serviceDetails)
        return res.status(400).json({
            success:false,
            message:'Internal server error',
            
        })
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
}}



exports.getQuestionAnswer=async(req,res)=>{
    try {
  
      const {question,answer,serviceId}=req.body;
      if(!question||!answer||!serviceId)
      {
        return res.status(400).json({
            success:false,
            message: "all fields are required"
        })
      }
      
        const result = await Question.create({question:question,answer:answer});
        // console.log(result);

        //return rating
        if(!result) {

            return res.status(400).json({
                success:false,
                message: "Internal server Error"
            })

        }
        
        const serviceDetails=Service.findOneAndUpdate({_id:serviceId},{
            $push:{
                question:result._id
            }
        }, {new:true});
        //if no rating/Review exist
        if(!serviceDetails)
        return res.status(400).json({
            success:false,
            message:'Internal server error',
            
        })
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
}}

exports.updateQuestionAnswer=async(req,res)=>{
    try {
  
      const {QuestionId,question,answer}=req.body;

      if(!question||!answer||!QuestionId)
      {
        return res.status(400).json({
            success:false,
            message: "all fields are required"
        })
      }
        const result = await Question.findByIdAndUpdate({_id:QuestionId},{question:question,answer:answer},{new:true});
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
}}

exports.deleteQuestionAnswer=async(req,res)=>{
    try {
  
      const {questionId}=req.body;
      if(!questionId)
      {
        return res.status(400).json({
            success:false,
            message: "all fields are required"
        })
      }
        const result = await Question.findOneAndDelete({_id:questionId});
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
            message:'Question answer deleted successifully',
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