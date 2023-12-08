// import React, { useState, useEffect } from 'react';
// import { useDispatch ,useSelector} from 'react-redux';
// import { Link } from 'react-router-dom';
// import ProfileDropdown from '../Auth/ProfileDropDown';

// function Navbar() {
//   const [isSidebarOpen, setSidebarOpen] = useState(false);
//   const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 640);
 
//   const toggleSidebar = () => {
//     setSidebarOpen(!isSidebarOpen);
//   };
 
//   useEffect(() => {
//     const handleResize = () => {
//       setIsSmallScreen(window.innerWidth <= 640);
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, [setIsSmallScreen]);
  
   
//   const dispatch=useDispatch();
//   const { token } = useSelector((state) => state.auth)
//   // console.log(token);
//   return (
//     <div className=''>
//       {/* Sidebar */}
//       <div
//         className={`fixed h-full w-64  bg-blue-500 mt-14 text-white transition-transform transform  8 first:${
//           isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
//         } sm:translate-x-0 ${ isSmallScreen ? 'visible' : 'invisible'} `}
//       >
//         <ul className="pt-6 space-y-2">
//           <li>
//             <a href="#" className="block px-4 py-2 hover:bg-blue-600">Home</a>
//           </li>
//           <li>
//             <a href="#" className="block px-4 py-2 hover:bg-blue-600">About</a>
//           </li>
//           <li>
//             <a href="#" className="block px-4 py-2 hover:bg-blue-600">Services</a>
//           </li>
//           <li>
//             <a href="#" className="block px-4 py-2 hover:bg-blue-600">Contact</a>
//           </li>
//         </ul>
//       </div>
      
//       {/* Navbar */}
//       <nav className="bg-blue-500 p-4 h-18">
//         <div className="container mx-auto">
//           <div className="flex justify-between items-center">
//             <div className="text-white font-bold text-xl">My Navbar</div>
//             {isSmallScreen ? (
//               <a
//                 onClick={toggleSidebar}
//                 className="text-white hover:text-gray-300 p-0 rounded-md sm:hidden"
//               >
//                 Menu
//               </a>
//             ) : (
//               <ul className="hidden sm:flex space-x-4 ">
//                 <li>
//                   <a href="#" className="text-white hover:text-gray-300">Home</a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-white hover:text-gray-300">About</a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-white hover:text-gray-300">Services</a>
//                 </li>

//                {token===null&& <li>
//                   <Link className="text-white hover:text-gray-300   p-2 rounded-xl border-2 bg-gray-600" to="/Login" >Login </Link>
//                 </li>
//                 }
//                { token===null&&<li>
//                   <Link className="text-white hover:text-gray-300   p-2 rounded-xl border-2 bg-gray-600" to="/signup" >Sign In </Link>
//                 </li>
//                  }
//                  {
//                   token!==null&&<ProfileDropdown/>
//                  }
//               </ul>
//             )}
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;

import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ProfileDropdown from '../Auth/ProfileDropDown';
import SidebarLink from '../Dashboard/SiderBarLink';
import useOnClickOutside from '../../hooks/useOnClickOutside';

const Sidebar = ({ isSidebarOpen,setSidebarOpen }) => {
  const ref = useRef(null);
useOnClickOutside(ref, () => setSidebarOpen(false));
  return (
    <div
      className={`z-[1000] fixed  h-full  w-[70vw] bg-blue-500 mt-14 text-white transition-transform transform sm:translate-x-0 ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
      ref={ref}
    >
      <ul className="pt-6 space-y-2">
        <li>
          <Link to="" className="block px-4 py-2 hover:bg-blue-600">
            Home
          </Link>
        </li>
        <li>
          <Link to="#about" className="block px-4 py-2 hover:bg-blue-600">
            About
          </Link>
        </li>
        <li>
          <Link to="/services" className="block px-4 py-2 hover:bg-blue-600">
            Services
          </Link>
        </li>
        <li>
          <Link to="/contact" className="block px-4 py-2 hover:bg-blue-600">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/dashboard/my-profile" className="block px-4 py-2 hover:bg-blue-600">
            Dashboard
          </Link>
        </li>
      </ul>
    </div>
  );
};

function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 640);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setIsSmallScreen]);

  const { token } = useSelector((state) => state.auth);

  // const gotoVoi
  return (
    <div>
      {/* Sidebar */}
    { isSidebarOpen&& <Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen}/>}

      {/* Navbar */}
      <nav className="bg-blue-500 p-4 h-15 fixed z-50 w-[100vw]">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-white font-bold text-xl">
             QuickLinks
            </Link>
            {isSmallScreen ? (
              <a
                onClick={toggleSidebar}
                className="text-white hover:text-gray-300 p-0 rounded-md sm:hidden"
              >
                Menu
              </a>
            ) : (
              <ul className="flex justify-between items-center sm:flex space-x-4 w-[40vw] text-xl font-bold ">
                <li>
                  <Link to="/" className="text-white hover:text-gray-300">
                    Home
                  </Link>
                </li>
                
                <li >
                  <Link to="#about" className="text-white hover:text-gray-300">
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="#food"
                    className="text-white hover:text-gray-300"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="#foodmenu"
                    className="text-white hover:text-gray-300"
                  >
                    Features
                  </Link>
                </li>
                {!token && (
                  <>
                    <li>
                      <Link
                        to="/login"
                        className="text-white hover:text-gray-300 p-2 rounded-xl border-2 bg-gray-600"
                      >
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/signup"
                        className="text-white hover:text-gray-300 p-2 rounded-xl border-2 bg-gray-600"
                      >
                        Sign Up
                      </Link>
                    </li>
                  </>
                )}
                {token && <ProfileDropdown />}
              </ul>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
