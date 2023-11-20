
const mongoose=require("mongoose");

const questionSchama=new mongoose.Schema({
    
   question:{
      type:String
   },
    answer:{
        type:String
     },

    
    

});
module.exports=mongoose.model("Question",questionSchama);