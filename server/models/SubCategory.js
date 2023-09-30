const mongoose=require("mongoose");

const subcatagorySchama=new mongoose.Schema({
    name:{
        type:String, 
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
    },
    service:[{
        type:mongoose.Schema.Types.ObjectId,
                required:true,
        ref:"Service"
     }],

});
module.exports=mongoose.model("SubCatagory",subcatagorySchama);