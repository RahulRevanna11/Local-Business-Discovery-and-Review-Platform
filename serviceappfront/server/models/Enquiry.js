const  mongoose = require('mongoose');

const enquirySchama = new mongoose.Schema({
    name: {
      type:String,
        required:true,
      
    },
    sender:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User",
      required:true,
    },
    contact: {
      type:String,
        required:true,
      
    }, 
    availableDate:{
      type:Date
    },
    availableTime:{
      type:String
    },
    approved:{
      type:Boolean,
      default:false
    }
  ,
    message: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
     
    },
    address:{
        type: String,
    },
    response:{
        type:String,
    },
    service:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Service",
        required:true,
    }
  });
  module.exports = mongoose.model("Enquiry", enquirySchama);