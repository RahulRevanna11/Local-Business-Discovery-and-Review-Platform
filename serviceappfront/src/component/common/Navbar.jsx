// import { useEffect, useState } from "react"
// import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai"
// import { BsChevronDown } from "react-icons/bs"
// import { useSelector } from "react-redux"
// import { Link, matchPath, useLocation } from "react-router-dom"

// import logo from "../../assets/download.jpeg"
// import { NavbarLinks } from "../../data/navbar-links"
// import { apiConnector } from "../../services/apiConnector"
// import { categories } from "../../services/apis"
// // import { ACCOUNT_TYPE } from "../../utils/constants"
// import ProfileDropdown from "../Auth/ProfileDropDown"

// function Navbar() {
//   const { token } = useSelector((state) => state.auth)
//   const location = useLocation()

  

//   const matchRoute = (route) => {
//     return matchPath({ path: route }, location.pathname)
//   }

//   return (
//     <div
//       className={`flex h-14 items-center justify-center border-b-[1px] border-b-red-700 ${
//         location.pathname !== "/" ? "bg-gray-800" : ""
//       } transition-all duration-200`}
//     >
//       <div className="flex w-11/12 max-w-maxContent items-center justify-between">
//         {/* Logo */}
//         <Link to="/">
//           <img src={logo} alt="Logo" width={100} height={20} loading="lazy" />
//         </Link>
//         {/* Navigation links */}
//         <nav className=" md:block lg:block ">
//           <ul className="flex  gap-10 text-gray-500 m-10 ">
//             {NavbarLinks.map((link, index) => (
//               <li key={index} className="mx-10">
               
//                   <Link to={link?.path} >
//                     <p
//                       className={`  text-gray-500 text-xl mx-10`}
//                     >
//                       {link.title}
//                     </p>
//                   </Link>
             
//               </li>
//             ))}
//           </ul>
//         </nav>
      
//         <div className="hidden items-center gap-x-4 md:flex  lg:flex">
       
//           {token === null && (
//             <Link to="/login">
//               <button className="rounded-[8px] border border-gray-700 bg-gray-800 px-[12px] py-[8px] text-gray-100">
//                 Log in
//               </button>
//             </Link>
//           )}
//           {token === null && (
//             <Link to="/signup">
//               <button className="rounded-[8px] border border-gray-700 bg-gray-800 px-[12px] py-[8px] text-black bg-red-100">
//                 Sign up
//               </button>
//             </Link>
//           )}
//           {token !== null && <ProfileDropdown />}
//         </div>
//         <button className="mr-4 md:hidden">
//           <AiOutlineMenu fontSize={24} fill="#AFB2BF" />
//         </button>
//       </div>
//     </div>
//   )
// }

// export default Navbar


import { useState } from 'react';
import { Link } from 'react-router-dom';

import companyLogo from '../../assets/download.jpeg';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='relative container mx-auto p-6'>
      {/* Flex Container */}
      <div className='flex items-center justify-between'>
        {/* Logo */}
        <div className='pt-2'>
          <img src={companyLogo} alt='' />
        </div>
        {/* Menu Items */}
        <div className='hidden space-x-6 md:flex'>
          <Link to='#' className='hover:text-teal-500'>
            Pricing
          </Link>
          <Link to='#' className='hover:text-teal-500'>
            Product
          </Link>
          <Link to='#' className='hover:text-teal-500'>
            About Us
          </Link>
          <Link to='#' className='hover:text-teal-500'>
            Careers
          </Link>
          <Link to='#' className='hover:text-teal-500'>
            Community
          </Link>
        </div>
        {/* Button */}
        <Link
          to='#'
          className='hidden p-3 px-6 pt-2 text-white bg-teal-500 rounded-full baseline hover:bg-teal-600 md:block'
        >
          Get Started
        </Link>

        {/* Hamburger Icon */}
        <button
          className={`${
            toggleMenu
              ? 'open block hamburger md:hidden focus:outline-none'
              : 'block hamburger md:hidden focus:outline-none'
          }`}
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <span className='hamburger-top'></span>
          <span className='hamburger-middle'></span>
          <span className='hamburger-bottom'></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className='md:hidden'>
        <div
          className={`${
            toggleMenu
              ? 'absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-black sm:w-auto sm:self-center left-6 right-6 drop-shadow-md'
              : 'absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-black sm:w-auto sm:self-center left-6 right-6 drop-shadow-md'
          }`}
        >
          <Link to='#' className='text-teal-500 hover:text-teal-600'>
            Pricing
          </Link>
          <Link to='#' className='text-teal-500 hover:text-teal-600'>
            Product
          </Link>
          <Link to='#' className='text-teal-500 hover:text-teal-600'>
            About Us
          </Link>
          <Link to='#' className='text-teal-500 hover:text-teal-600'>
            Careers
          </Link>
          <Link to='#' className='text-teal-500 hover:text-teal-600'>
            Community
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
