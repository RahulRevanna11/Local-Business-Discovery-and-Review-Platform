const mongoose=require("mongoose");

const catagorySchema=new mongoose.Schema({
    name:{
        type:String, 
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
    },
    subCategory:[{
        type:mongoose.Schema.Types.ObjectId,
                
        ref:"SubCatagory"
     }],

});
module.exports=mongoose.model("Catagory",catagorySchema);