import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// import { create } from '../../../../server/models/ProviousWork';
import { createProviousWork } from '../../../services/oprerations/serviceAPIs';

const PreviousWork = () => {
    const [formData, setFormData] = useState({
        completeDate: '',
        OwnerName: '',
        address:'',
        OwnerContact: '',
        cost: '',
        images:[]
      
    });
const {token}=useSelector(state=>state.auth);
const {service}=useSelector(state=>state.service);
    const [errors, setErrors] = useState({});
    if (!service) {
        return <button>List Your service</button>;
      }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        // Clear the error message when the user starts typing
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: '',
        }));
    };

    const handleImageChange = (e) => {
        const files = e.target.files;
        setFormData((prevData) => ({
            ...prevData,
            images: [...prevData.images, ...files],
        }));
    };

    const handleRemoveImage = (index) => {
        setFormData((prevData) => {
            const newImages = [...prevData.images];
            newImages.splice(index, 1);
            return {
                ...prevData,
                images: newImages,
            };
        });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        // Validate the form data
        const newErrors = {};

        // Validate date (simple check for non-empty value)
        if (!formData.completeDate) {
            newErrors.completeDate = 'Date is required';
        }

        // Validate name (simple check for non-empty value)
        if (!formData.OwnerName) {
            newErrors.OwnerName = 'Name is required';
        }

        // Validate type (simple check for non-empty value)
        if (!formData.address) {
            newErrors.address = 'address is required';
        }

        // Validate mobile (check for non-empty value and if it is an integer)
        if (!formData.OwnerContact) {
            newErrors.OwnerContact = 'Mobile is required';
        } else if (!/^\d+$/.test(formData.OwnerContact) || formData.OwnerContact.length !== 10) {
            newErrors.OwnerContact = 'Enter a valid 11-digit mobile number';
        }

        // Validate userId (simple check for non-empty value)
        if (!formData.cost) {
            newErrors.cost = 'cost  is required';
        }

        // If any errors are found, set them and stop form submission
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        formData.service=service._id;

        await createProviousWork(token,formData);
        // If no errors, you can proceed with form submission or further processing
        console.log('Form submitted:', formData);
    };

    return (
        <div className="flex items-center justify-center  mt-20">
            <div className="w-[70%]">
                <h1>Add Services</h1>
                <div className="container mx-auto p-4 bg-gray-100 rounded-md shadow-md">
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">

                        {/* Date */}
                        <label className="text-sm font-bold">Completion Date:</label>
                        <input
                            type="date"
                            name="completeDate"
                            value={formData.completeDate}
                            onChange={handleChange}
                            className={`p-2 border rounded-md ${errors.completeDate ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.completeDate && <p className="text-red-500">{errors.completeDate}</p>}

                        {/* Name */}
                        <label className="text-sm font-bold">Owner Name:</label>
                        <input
                            type="text"
                            name="OwnerName"
                            value={formData.OwnerName}
                            onChange={handleChange}
                            className={`p-2 border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.OwnerName && <p className="text-red-500">{errors.OwnerName}</p>}

                        
                        <label className="text-sm font-bold">Address:</label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className={`p-2 border rounded-md ${errors.type ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.address && <p className="text-red-500">{errors.address}</p>}

                        {/* Mobile */}
                        <label className="text-sm font-bold">Owner Contact No:</label>
                        <input
                            type="tel"
                            name="OwnerContact"
                            value={formData.OwnerContact}
                            onChange={handleChange}
                            className={`p-2 border rounded-md ${errors.OwnerContact ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.cost && <p className="text-red-500">{errors.cost}</p>}
                        {/* User ID */}
                        <label className="text-sm font-bold">Cost:</label>
                        <input
                            type="text"
                            name="cost"
                            value={formData.cost}
                            onChange={handleChange}
                            className={`p-2 border rounded-md ${errors.userId ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.cost && <p className="text-red-500">{errors.cost}</p>}

                        {/* Images */}
                        <label className="text-sm font-bold">Images:</label>
                        <input type="file" multiple onChange={handleImageChange} className="p-2 border rounded-md" />

                        {/* Preview images with remove button */}
                        <div className="flex mt-4 mb-4 ">
                            {formData?.images&&formData.images.map((image, index) => (
                                <div key={index} className="relative mr-4 object-contain ">
                                    <img
                                        src={URL.createObjectURL(image)}
                                        alt={`Preview ${index}`}
                                        className=" w-15 h-10 rounded-md object-contain"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => handleRemoveImage(index)}
                                        className="absolute top-0 right-0 p-1 bg-red-500 text-white rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline-red active:bg-red-800"
                                    >
                                        X
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* Submit button */}
                        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PreviousWork;