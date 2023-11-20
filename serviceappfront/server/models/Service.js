const mongoose=require("mongoose");

const serviceSchema=new mongoose.Schema({

    name:{
        type:String,
        required:true,
        trim:true
    },
    latitude: {
        type: Number,
        required: true,
      },
      longitude: {
        type: Number,
        required: true,
      },
    contactNo:{
        type:String,
       
        trim:true
    },

    year_of_establishment:{
        type:Number
    },

    mode_of_payment:{
        type:String,
           enum:["Cash,UPI,Card"]
    },

    avalableDays:{
       type:String,
    //    required:true,
       default:"Mon-Sat"
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
    ,
    subCategory:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"SubCatagory"
    }
    ,owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    images:[{
        type:String
    }],
   ratingAndReviews:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"RatingAndReview"
   }],
   tags:[
    {
        type:String
    }
   ],
  
  questionAnswer:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Question"
  }   ],

  
  enquiry:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Enquiry"
  }   ],
  averageRating:{
    type:Number
  },
  proviousWorks:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"ProviousWork"
  }

});

module.exports=mongoose.model("Service",serviceSchema);
