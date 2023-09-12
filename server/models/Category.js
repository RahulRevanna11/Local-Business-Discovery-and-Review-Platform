const mongoose=require("mongoose");

const catagorySchama=new mongoose.Schema({
    name:{
        type:String, 
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
    },
    // service:[{
    //     type:mongoose.Schema.Types.ObjectId,
    //             required:true,
    //     ref:"Service"
    //  }],

});
module.exports=mongoose.model("Catagory",catagorySchama);