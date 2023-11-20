const { Mongoose } = require("mongoose");
const Category = require("../models/Category");
const SubCategory = require("../models/SubCategory");
const { uploadImageToCloudinary } = require("../utils/imageUploader");
require("dotenv").config();
function getRandomInt(max) {
    return Math.floor(Math.random() * max)
  }

exports.createCategory = async (req, res) => {
	try {
		
		const { name, description } = req.body;
		const imageFile=req.files.imageFile;
  if(!imageFile)
  {
    return res.status(200).json({
        message:"image is not present"
    })
  }
	
  if (!name) {
			return res
				.status(400)
				.json({ success: false, message: "All fields are required" });
		}
	
		const image=await uploadImageToCloudinary(imageFile,process.env.FOLDER_NAME,200,200);
		console.log(image);
		const CategorysDetails = await Category.create({
			name: name,
			description: description,
			image:image.secure_url
		});
		console.log(CategorysDetails);
		return res.status(200).json({
			success: true,
			message: "Categorys Created Successfully",
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			success: true,
			message: error,
		});
	}
};

exports.showAllCategories = async (req, res) => {
	try {
		// console.log(Category)
		const allCategorys = await Category.find({});
		
		res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
		// console.log(allCategorys);
		return  res.status(200).json({
			success: true,
			data: allCategorys,
		});
		
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: error.message,
		});
	}
};


exports.getSubCategories = async (req, res) => {
	try {
		console.log("ALL SUBCATEGORY  RESPONSE")
		const {subCategoryId}=req.body;
		console.log("ALL SUBCATEGORY  RESPONSE")
		const subCategorys = await Category.find({_id:subCategoryId})
		.populate({
			path: "subCategory",
			populate: {
			  path: "service",
			},
		  })
		//   .populate("subCategory").exec();
		console.log(subCategorys);
		return  res.status(200).json({
			success: true,
			data: subCategorys,
		});
		
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			success: false,
			message: error.message,
		});
	}
};