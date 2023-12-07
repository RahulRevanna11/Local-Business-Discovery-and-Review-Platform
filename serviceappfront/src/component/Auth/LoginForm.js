import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { login } from "../../services/oprerations/authAPI";

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    mobile: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const { mobile, password } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(login(mobile, password, navigate));
  };

  return (
    <div className="mt-[100px] sm:mx-auto sm:w-full sm:max-w-md ">
      <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
      <form onSubmit={handleOnSubmit} className="space-y-6">

        <label className="block text-sm font-medium text-gray-700">
          <p className="mb-1 text-sm leading-5 text-gray-500">
           Contact No <sup className="text-pink-500">*</sup>
          </p>
          <input
            required
            type="text"
            name="mobile"
            value={mobile}
            onChange={handleOnChange}
            placeholder="Enter contact number"
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </label>
        <label className="block text-sm font-medium text-gray-700">
          <p className="mb-1 text-sm leading-5 text-gray-500">
            Password <sup className="text-pink-500">*</sup>
          </p>
          <input
            required
            type={showPassword ? "text" : "password"}
            name="password"
            value={password}
            onChange={handleOnChange}
            placeholder="Enter Password"
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <span
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute top-2 right-4 cursor-pointer"
          >
            {showPassword ? (
              <AiOutlineEyeInvisible fontSize={18} fill="#666" />
            ) : (
              <AiOutlineEye fontSize={18} fill="#666" />
            )}
          </span>
          <Link to="/forgot-password" className="text-xs text-blue-500 hover:underline">
            Forgot Password?
          </Link>
        </label>
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Sign In
        </button>

      </form>
    </div>
    </div>
  );
}

export default LoginForm;