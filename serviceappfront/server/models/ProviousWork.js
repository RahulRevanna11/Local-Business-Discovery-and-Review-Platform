
const mongoose=require("mongoose");

const proviousWorkSchema=new mongoose.Schema({
    
    OwnerName:{
        type:String
     },

     completeDate:{
       type:Date,
     }, 
     
     OwnerContact:{
        type:String,
        trim:true
     },

     address:{
        type:String,
        
     },
     cost:{
        type:Number
     },
     Images:[{
        type:String
     }],

     service:[{
        type:mongoose.Schema.Types.ObjectId,
                
        ref:"Service"
     }],

    

});
module.exports=mongoose.model("ProviousWork",proviousWorkSchema);