import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll'; // Uncomment this line

import ProfileDropdown from '../Auth/ProfileDropDown';
import SidebarLink from '../Dashboard/SiderBarLink';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import { logout } from '../../services/oprerations/authAPI';

const Sidebar = ({ isSidebarOpen, setSidebarOpen }) => {
  const ref = useRef(null);
  
  useOnClickOutside(ref, () => setSidebarOpen(false));
  return (
    <div
      className={`z-[1000] fixed  h-full  w-[70vw] bg-blue-500 mt-14 text-white transition-transform transform sm:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
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
          <ScrollLink to="about" smooth={true} className="block px-4 py-2 hover:bg-blue-600">
            About
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="food" smooth={true} className="block px-4 py-2 hover:bg-blue-600">
            Services
          </ScrollLink>
        </li>
        <li>
          <Link to="/contact" className="block px-4 py-2 hover:bg-blue-600">
            Contact
          </Link>
        </li>
       {token&& <li>
          <Link to="/dashboard/my-profile" className="block px-4 py-2 hover:bg-blue-600">
            Dashboard
          </Link>
        </li>}
{     token &&   <li className="block px-4 py-2 hover:bg-blue-600"  onClick={() => {
              console.log("inside onclick lonout");
              navigate('/');
              dispatch(logout(navigate));
              setSidebarOpen(false);
            }}>
          logout

        </li>}
        {     !token &&   <li className="block px-4 py-2 hover:bg-blue-600"  onClick={() => {
              // console.log("inside onclick lonout");
              navigate('/login');
              setSidebarOpen(false);
            }}>
          Login

        </li>}
        {     !token &&   <li className="block px-4 py-2 hover:bg-blue-600"  onClick={() => {
              // console.log("inside onclick lonout");
              navigate('/signup');
              setSidebarOpen(false);
            }}>
          SignUp

        </li>}
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
      {isSidebarOpen && <Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />}

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

                <li>
                  <ScrollLink to="about" smooth={true} className="text-white hover:text-gray-300">
                    About
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink to="food" smooth={true} className="text-white hover:text-gray-300">
                    Services
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink to="foodmenu" smooth={true} className="text-white hover:text-gray-300">
                    Features
                  </ScrollLink>
                </li>
                {!token && (
                  <>
                    <li>
                      <Link
                        to="/login"
                        className="text-white hover:text-gray-300 p-1 h-10 w-24 rounded-xl border-2 bg-gray-600"
                      >
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/signup"
                        className="text-white hover:text-gray-300 p-1 h-10 w-24 rounded-xl border-2 bg-gray-600"
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
