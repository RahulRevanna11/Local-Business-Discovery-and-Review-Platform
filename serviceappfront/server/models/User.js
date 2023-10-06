const mongoose=require("mongoose");


const userSchema=new mongoose.Schema(
  {
    firstName:{
        type:String,
        required:true,
        trim:true
    },

    lastName:{
        type:String,
        required:true,
        trim:true
    },

    email:{
        type:String,
        required:true,
        trim:true
    },

    password:{
        type:String,
        required:true
    },

    token:{
        type:String
    },

    resetPasswordExpires:{
        type:Date,
       },
       accountType:{
          type:String,
          enum:["Admin","User","Business"],
          required:true,
       },



      approved:{
        type: Boolean,
        default: true,
      },

      additionalDetails:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Profile"
     },
     
         service:
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Service"
        }
     ,

     image:{
        type:String,
        required:true
     },

  }  
)

module.exports=mongoose.model("User",userSchema);