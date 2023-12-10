const express = require("express");
const app = express();
const { database } = require("./config/database");
const { cloudinaryConnect } = require("./config/cloudinary");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const userRoutes = require("./routes/User");
// console.log(userRoutes);
const profileRoutes = require("./routes/Profile");
const serviceRoutes = require("./routes/Services");
const SMSSender = require("./utils/SMSSender");

const port = process.env.PORT || 5000;
app.use(cors({
  origin: "*",
 
}))
app.use(cookieParser());
app.use(express.json());

app.use(
	fileUpload({
		useTempFiles:true,
		tempFileDir:"/tmp",
	})
)

database();
cloudinaryConnect();

app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/service", serviceRoutes);

app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "your server is activated",
  });
});

// app.use(
//   cors({
//     origin: "http://localhost:3000",credentials:true
//   })
// );

// 
// SMSSender(9096834645,"jhgvh")
app.listen(port, () => {
  console.log(`your server is successfully activated at port ${port}`);
});
