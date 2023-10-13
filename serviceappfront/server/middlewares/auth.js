const jwt=require("jsonwebtoken");
require("dotenv").config();

const User=require("../models/User");

exports.auth=async(req,res,next)=>{

    //extract token from req
    try{
        const token=req.cookies.token||req.body.token||req.header("Authorisation").replace("Bearer","");
        
        // if token missing
        if(!token)
        {
            return res.status(401).json({
                success:false,
                message:"token mising "
            });
        }

        // verify token
        try{
            const decode=await jwt.verify(token,process.env.JWT_SECRET);
            console.log(decode);  
            req.user=decode;
        }
        catch(error){
            return res.status(401).json({
                success:false,
                message:"token is invalid",
                error:error.message
            });
        }
        

        next();
    }
    catch(error)
    {    console.log(error);
        return res.status(401).json({
            success:false,
            message:"something went wrong while validating token",
            error:error.message
        });
    }
}

exports.isBusiness=async(req,res,next)=>
{
    try{
       if(req.user.accountType!=="Business")
       {

    return res.status(401).json({
        success:false,
        message:"this is protected route for Business only",
        // error:error.message
    });
   
       }

       next();
    }catch(error)
    {
         
    return res.status(401).json({
        success:false,
        message:"user role cannot be verifyed",
        error:error.message
    });
    }
}

//isUser
exports.isUser=async(req,res,next)=>
{
    // console.log("jhvjh");
    try{
       if(req.user.accountType!=="User")
       {

    return res.status(401).json({
        success:false,
        message:"this is protected route for User only",
        // error:error.message
    });
  
       }
       next();
    }catch(error)
    {
         
    return res.status(401).json({
        success:false,
        message:"user role cannot be verifyed",
        // error:error.message
    });
    }
}


//isAdmin

exports.isAdmin=async(req,res,next)=>
{
   
    try{
       if(req.user.accountType!=="Admin")
       {
        //  console.log("user"+req.user);
    return res.status(401).json({
        success:false,
        message:"this is protected route for Admin only",
        // error:error.message
    });
  
       } 
    //    console.log("this is isadmin function");
       next();
    }catch(error)
    {
         
    return res.status(401).json({
        success:false,
        message:"user role cannot be verifyed",
        error:error.message
    });
    }
}
