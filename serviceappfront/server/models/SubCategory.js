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
     tags:[
        {
            type:String,
        required:true, 
        }
     ],
    image:{
        type:String,
        require:true
    }
});
module.exports=mongoose.model("SubCatagory",subcatagorySchama);