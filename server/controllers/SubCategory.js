const { Mongoose } = require("mongoose");
const SubCategory = require("../models/SubCategory");
function getRandomInt(max) {
    return Math.floor(Math.random() * max)
  }

exports.createSubCategory = async (req, res) => {
	try {
		const { name, description } = req.body;
		if (!name) {
			return res
				.status(400)
				.json({ success: false, message: "All fields are required" });
		}
		const SubCategorysDetails = await SubCategory.create({
			name: name,
			description: description,
		});
		console.log(SubCategorysDetails);
		return res.status(200).json({
			success: true,
			message: "SubCategorys Created Successfully",
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
        console.log("INSIDE SHOW ALL CATEGORIES");
		const allSubCategorys = await SubCategory.find({});
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
      const selectedSubCategory = await SubCategory.findById(SubcategoryId)
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