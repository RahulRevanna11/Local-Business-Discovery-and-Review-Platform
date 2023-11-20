const RatingAndReview = require("../models/RatingAndReviews");
const Service=require("../models/Service")
// const  mongoose = require("mongoose");

//createRating
exports.createRating = async (req, res) => {
    try{

        //get user id
        const userId = req.user.id;
        console.log("in create rating ")
        //fetchdata from req body
        const {rating, review, serviceId} = req.body;
        //check if user is enrolled or not

        const serviceDetails = await Service.findOne(
                                    {_id:serviceId
                                });

        if(!serviceDetails) {
            return res.status(404).json({
                success:false,
               
            });
        }
        console.log(serviceDetails)
        //check if user already reviewed the course
        const alreadyReviewed = await RatingAndReview.findOne({
                                                user:userId,
                                                service:serviceId,
                                            });
        if(alreadyReviewed) {
                    return res.status(403).json({
                        success:false,
                        message:'already reviewed by the user',
                    });
                }
        //create rating and review
        const ratingReview = await RatingAndReview.create({
                                        rating, review, 
                                        service:serviceId,
                                        user:userId,
                                    });
       
        //update course with this rating/review
        const updatedServiceDetails = await Service.findByIdAndUpdate({_id:serviceDetails._id},
                                    {
                                        $push: {
                                            ratingAndReviews: ratingReview._id,
                                        }
                                    },
                                    {new: true});
        // console.log(updatedServiceDetails);
        //return response
        return res.status(200).json({
            success:true,
            message:"Rating and Review created Successfully",
            ratingReview,
        })
    }
    catch(error) {
        // console.log(error);
        return res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}



//getAverageRating
exports.getAverageRating = async (req, res) => {
    try {
        //get course ID
        const serviceId = req.body.serviceId;
        //calculate avg rating
        console.log("API CALLED");
         console.log(serviceId);
      
        const result = await Service.findById({serviceId}).populate("ratingAndReviews");
        // console.log(result);

        //return rating
        if(result.length > 0) {

            return res.status(200).json({
                success:true,
                averageRating: result[0].averageRating,
            })

        }
        
        //if no rating/Review exist
        return res.status(200).json({
            success:true,
            message:'Average Rating is 0, no ratings given till now',
            averageRating:0,
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


// //getAllRatingAndReviews

exports.getAllRating = async (req, res) => {
    try{

        const serviceId = req.body.serviceId;
            const allReviews = await RatingAndReview.find({_id:serviceId})
                                    .sort({rating: "desc"})
                                    .populate({
                                        path:"user",
                                        // select:"firstName lastName email image",
                                    })
                                    // .populate({
                                    //     path:"service",
                                    //     select: "courseName",
                                    // })
                                    .exec();
            return res.status(200).json({
                success:true,
                message:"All reviews fetched successfully",
                data:allReviews,
            });
    }   
    catch(error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:error.message,
        })
    } 
}