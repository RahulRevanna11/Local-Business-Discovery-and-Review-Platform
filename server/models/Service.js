const mongoose=require("mongoose");

const serviceSchama=new mongoose.Schema({

    name:{
        type:String,
        required:true,
        trim:true
    },

    year_of_establishment:{
        type:Number
    },

    mode_of_payment:{
           enum:["Cash,UPI,Card"]
    },

    avalableDays:{
       type:String,
    //    required:true,
       default:Mon-Sat
    },

    GSTIN:{
         type:String
    },

    address:{
        type:String,
        required:true
    },

    pinCode:{
        type:String,
        // required:true
    },
    about:{
        type:String
    },
    
    landMark:{
        type:String
    },
    Photos:{
        type:String
    },
    totalEnquires:{
        type:Number,
        default:0,
    }





})

mongoose.export=mongoose.model("Service",serviceSchama);
