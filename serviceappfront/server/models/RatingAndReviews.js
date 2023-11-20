const mongoose=require("mongoose");

const ratingAndReviewSchama=new mongoose.Schema({
    
    user:{
        type:mongoose.Schema.Types.ObjectId,
                required:true,
        ref:"User"
     },
      createdAt:{
type:Date,
default:Date.now()
      },
    rating:{
        type:Number,
        required:true
    },
    review:{
        type:String,
        required:true,
    }
    ,service:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
ref:"Service"
    },
    tags:[
        {
            type:String,
        }
    ]


});
module.exports=mongoose.model("RatingAndReview",ratingAndReviewSchama);