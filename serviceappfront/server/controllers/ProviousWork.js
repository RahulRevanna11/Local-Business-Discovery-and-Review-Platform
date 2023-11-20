const ProviousWork = require('../models/ProviousWork');
const { uploadImageToCloudinary } = require("../utils/imageUploader")
const Service=require("../models/Service");
exports.createProviousWork = async (req, res) => {
  try {
    const { OwnerName, completeDate, OwnerContact, address, cost,service } = req.body;


    if(!OwnerName||! completeDate||! OwnerContact||! address|| !cost||!service )
   return  res.status(500).json({
        success:false,
         message: 'All fields are required' });
  
    // Your validation logic goes here
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).json({ error: "No files were uploaded." });
      }
  
      const images = [];
  
      // Upload each file to Cloudinary
      for (const file of Object.values(req.files)) {
        const result = await await uploadImageToCloudinary(
           file ,
      
            process.env.FOLDER_NAME,
            1000,
            1000
          )
        images.push(result.secure_url);
      }
      const newProviousWork = new ProviousWork({
        OwnerName: req.body.OwnerName,
        completeDate: req.body.completeDate,
        OwnerContact: req.body.OwnerContact,
        address: req.body.address,
        cost: req.body.cost,
        images,
        service
      });
  
      const savedProviousWork = await newProviousWork.save();
      if (service) {
        const service = await Service.findByIdAndUpdate(
            service,
          { $push: { proviousWorks: savedProviousWork._id } },
          { new: true, runValidators: true }
        );
  
        if (!service) {
          return res.status(404).json({ error: 'Service not found' });
        }
      }
    
   return  res.status(201).json({
        success:true,
        message:"Work posted successfully",
        data:savedProviousWork
    });
  } catch (error) {
    console.error(error);
   return res.status(500).json({
        success:false,
         error: 'Internal Server Error' });
  }
};


exports.updateProviousWork = async (req, res) => {
  try {
    const { OwnerName, completeDate, OwnerContact, address, cost,service } = req.body;

    // Your validation logic goes here

    const updatedProviousWork = await ProviousWork.findByIdAndUpdate(
      req.user._id, 
      { OwnerName, completeDate, OwnerContact, address, cost,service },
      { new: true }
    );

    if (!updatedProviousWork) {
        res.status(500).json({
            success:false,
             message: 'service not found' });
    }

    // res.json(updatedProviousWork);
    return  res.status(201).json({
        success:true,
        message:"Work posted successfully",
        data:updatedProviousWork
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
        success:false,
         error: 'Internal Server Error' });
  }
};




exports.deleteProviousWork = async (req, res) => {
  try {
    const deletedProviousWork = await ProviousWork.findByIdAndDelete(req.user._id);

    if (!deletedProviousWork) {
      return res.status(404).json({ success:true,
        error: 'ProviousWork not found' });
    }

    // res.json(deletedProviousWork);
    return  res.status(201).json({
        success:true,
        message:"Work deleted successfully",
        
    });
  } catch (error) {
    console.error(error);
    console.error(error);
    return res.status(500).json({
        success:false,
         error: 'Internal Server Error' });  }
};

// module.exports = { deleteProviousWork };

// controllers/getAll.js



exports.searchProviousWork = async (req, res) => {
  try {
    const { service } = req.query;

    if (!service) {
      return res.status(400).json({ 
        success:false,
        message: "service parameter is required for the search." });
    }

    const results = await ProviousWork.find({ service });

    return  res.status(201).json({
        success:true,
        message:"Work getched successfully",
        data:results
    });
  } catch (error) {
    console.error(error);
    console.error(error);
    return res.status(500).json({
        success:false,
         error: 'Internal Server Error' });  }

};


