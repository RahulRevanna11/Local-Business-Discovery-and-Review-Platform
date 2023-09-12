const express=require("express");
const app=express();
const {database}=require("./config/database");
const {cloudinaryConnect}=require("./config/cloudinary")
const cookieParser=require("cookie-parser");
const fileUpload = require("express-fileupload");

const userRoutes=require("./routes/User");
console.log(userRoutes);
const profileRoutes=require("./routes/Profile");
const serviceRoutes=require("./routes/Service");

const port=process.env.PORT||5000;


app.use(express.json());
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));

database();
// cloudinaryConnect();

app.use("/api/v1/auth",userRoutes);
app.use("/api/v1/profile",profileRoutes);
app.use("/api/v1/service",serviceRoutesRoutes);

app.get("/",(req,res)=>{
 
    return res.json({
        success:true,
        message:"your server is activated"
    }) ;
});




app.listen(port,()=>{
<<<<<<< HEAD
    console.log(`your server is successfully activated at port ${port}`);
=======
    console.log(`your server is activated at port ${port}`);
>>>>>>> 1f8526928358f65db5fe589d4c73011ea2ae3a3f
});