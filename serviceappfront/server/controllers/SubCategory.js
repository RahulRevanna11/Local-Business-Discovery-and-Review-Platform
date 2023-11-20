const { Mongoose } = require("mongoose");
const SubCatagory = require("../models/SubCategory");
const Catagory = require("../models/Category");
const { uploadImageToCloudinary } = require("../utils/imageUploader");
function getRandomInt(max) {
    return Math.floor(Math.random() * max)
  }

exports.createSubCategory = async (req, res) => {
	try {
		const { name, description,category,tags } = req.body;
		if (!name||!category||!tags) {
			return res
				.status(400)
				.json({ success: false, message: "All fields are required" });
		}
    const imageFile=req.files.imageFile;
    const image=await uploadImageToCloudinary(imageFile,process.env.FOLDER_NAME,200,200);
		console.log(image);
    
    if(!imageFile)
    {
      return res.status(200).json({
          message:"image is not present"
      })
    }
		const SubCategorysDetails = await SubCatagory.create({
			name: name,
			description: description,
      image:image.secure_url,
      tags
		});
    console.log(` subcategoryDetails: ${SubCategorysDetails}`);
// const categoryId=category._id;
console.log(category)
     const categoryDetails=await Catagory.findByIdAndUpdate({_id:category}
      ,{
        $push:{
          subCategory:SubCategorysDetails._id
        }
      },{new:true}).populate("subCategory");
		console.log(` categoryDetails: ${categoryDetails}`);
		return res.status(200).json({
			success: true,
			message: "SubCategorys Created Successfully",
      data:categoryDetails
		});
	} catch (error) {
		return res.status(500).json({
			success: true,
			message: error.message,
		});
	}
};

exports.showAllSubCategories = async (req, res) => {
	try {

		// res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    //     console.log("INSIDE SHOW ALL CATEGORIES");
		const allSubCategorys = await SubCatagory.find({}).populate("service");
    console.log(allSubCategorys)
		res.status(200).json({
			success: true,
			data: allSubCategorys,
		});

	} catch (error) {
		return res.status(500).json({
			success: false,
			message: error.message,
		});
	}
};

//SubcategoryPageDetails 

exports.SubcategoryPageDetails = async (req, res) => {
    try {
      const { SubcategoryId } = req.body
      console.log("PRINTING SubCATEGORY ID: ", SubcategoryId);
      // Get courses for the specified Subcategory
      const selectedSubCategory = await SubCatagory.findById(SubcategoryId)
        .populate({
          path: "service",
          
          populate: "ratingAndReviews",
        })
        .exec()
  
      //console.log("SELECTED COURSE", selectedSubCategory)
      // Handle the case when the Subcategory is not found
      if (!selectedSubCategory) {
        console.log("SubCategory not found.")
        return res
          .status(404)
          .json({ success: false, message: "SubCategory not found" })
      }
      // Handle the case when there are no courses
      if (selectedSubCategory.courses.length === 0) {
        console.log("No services found for the selected Subcategory.")
        return res.status(404).json({
          success: false,
          message: "No services found for the selected Subcategory.",
        })
      }
  
      // Get courses for other categories
    //   const categoriesExceptSelected = await SubCategory.find({
    //     _id: { $ne: SubcategoryId },
    //   })
    //   let differentSubCategory = await SubCategory.findOne(
    //     categoriesExceptSelected[getRandomInt(categoriesExceptSelected.length)]
    //       ._id
    //   )
    //     .populate({
    //       path: "courses",
    //       match: { status: "Published" },
    //     })
    //     .exec()
    //     //console.log("Different COURSE", differentSubCategory)
    //   // Get top-selling courses across all categories
    //   const allCategories = await SubCategory.find()
    //     .populate({
    //       path: "courses",
    //       match: { status: "Published" },
    //       populate: {
    //         path: "instructor",
    //     },
    //     })
    //     .exec()
    //   const allCourses = allCategories.flatMap((Subcategory) => Subcategory.courses)
    //   const mostSellingCourses = allCourses
    //     .sort((a, b) => b.sold - a.sold)
    //     .slice(0, 10)
       // console.log("mostSellingCourses COURSE", mostSellingCourses)
      res.status(200).json({
        success: true,
        data: {
          selectedSubCategory,
         
        },
      })
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Internal server error",
        error: error.message,
      })
    }
  }


// Function to search for a keyword in subcategories
exports.searchSubCategories = async (req,res) => {
  try {
  

    const {keyword}=req.body
    // const keyword=['plumbing'];
      console.log(keyword)
    const result = await SubCatagory.find({ tags: { $in: keyword } }).populate('service');

console.log(result);
    return res.status(200).json({
      success: true,
      data: {
        result,
       
      },
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    })
  }
};



exports.addTagsToSubCategory = async (req, res) => {
  try {
    const { tags, subcategoryId } = req.body;

    // Validate if subcategory ID is provided
    if (!subcategoryId) {
      return res.status(400).json({ error: 'Subcategory ID is required.' });
    }

    // Find the subcategory by ID
    const subcategory = await SubCatagory.findById(subcategoryId);

    // Check if the subcategory exists
    if (!subcategory) {
      return res.status(404).json({ error: 'Subcategory not found.' });
    }

    // Add tags to the subcategory
    subcategory.tags = subcategory.tags.concat(tags);

    // Save the updated subcategory
    await subcategory.save();

    // Respond with the updated subcategory
    res.status(200).json({ message: 'Tags added to subcategory successfully', subcategory });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


