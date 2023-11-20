import React, { useState } from 'react';

const PreviousWork = () => {
    const [formData, setFormData] = useState({
        date: '',
        name: '',
        type: '',
        mobile: '',
        userId: '',
        images: [],
    });

    const [errors, setErrors] = useState({});

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

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate the form data
        const newErrors = {};

        // Validate date (simple check for non-empty value)
        if (!formData.date) {
            newErrors.date = 'Date is required';
        }

        // Validate name (simple check for non-empty value)
        if (!formData.name) {
            newErrors.name = 'Name is required';
        }

        // Validate type (simple check for non-empty value)
        if (!formData.type) {
            newErrors.type = 'Type is required';
        }

        // Validate mobile (check for non-empty value and if it is an integer)
        if (!formData.mobile) {
            newErrors.mobile = 'Mobile is required';
        } else if (!/^\d+$/.test(formData.mobile) || formData.mobile.length !== 10) {
            newErrors.mobile = 'Enter a valid 11-digit mobile number';
        }

        // Validate userId (simple check for non-empty value)
        if (!formData.userId) {
            newErrors.userId = 'User ID is required';
        }

        // If any errors are found, set them and stop form submission
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // If no errors, you can proceed with form submission or further processing
        console.log('Form submitted:', formData);
    };

    return (
        <div className="flex items-center justify-center  ">
            <div className="w-[70%]">
                <div className="container mx-auto p-4 bg-gray-100 rounded-md shadow-md">
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">

                        {/* Date */}
                        <label className="text-sm font-bold">Date:</label>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className={`p-2 border rounded-md ${errors.date ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.date && <p className="text-red-500">{errors.date}</p>}

                        {/* Name */}
                        <label className="text-sm font-bold">Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`p-2 border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.name && <p className="text-red-500">{errors.name}</p>}

                        {/* Type */}
                        <label className="text-sm font-bold">Type:</label>
                        <input
                            type="text"
                            name="type"
                            value={formData.type}
                            onChange={handleChange}
                            className={`p-2 border rounded-md ${errors.type ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.type && <p className="text-red-500">{errors.type}</p>}

                        {/* Mobile */}
                        <label className="text-sm font-bold">Mobile:</label>
                        <input
                            type="tel"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            className={`p-2 border rounded-md ${errors.mobile ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.mobile && <p className="text-red-500">{errors.mobile}</p>}
                        {/* User ID */}
                        <label className="text-sm font-bold">User ID:</label>
                        <input
                            type="text"
                            name="userId"
                            value={formData.userId}
                            onChange={handleChange}
                            className={`p-2 border rounded-md ${errors.userId ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.userId && <p className="text-red-500">{errors.userId}</p>}

                        {/* Images */}
                        <label className="text-sm font-bold">Images:</label>
                        <input type="file" multiple onChange={handleImageChange} className="p-2 border rounded-md" />

                        {/* Preview images with remove button */}
                        <div className="flex mt-4 mb-4 ">
                            {formData.images.map((image, index) => (
                                <div key={index} className="relative mr-4 object-contain ">
                                    <img
                                        src={URL.createObjectURL(image)}
                                        alt={`Preview ${index}`}
                                        className=" w-20 h-20 rounded-md object-contain"
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