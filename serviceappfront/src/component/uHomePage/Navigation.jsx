import React from "react";
import "./HomePage.css";
import { useDispatch ,useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import ProfileDropdown from "../Auth/ProfileDropDown";
const Navigation = () => {
    const dispatch=useDispatch();
    const { token } = useSelector((state) => state.auth)
    // console.log(token);

    return (
       <>
        <nav className="navbar font mt-5">
                <div className="navbarcontainer container">
                    <input type="checkbox" name="" id=""></input>
                    <div className="hamburgerlines">
                        <span className="line line1"></span>
                        <span className="line line2"></span>
                        <span className="line line3"></span>
                    </div>
                    <ul className="menuitems">
                        <li><a href="#showcase">Home</a></li>
                        <li><a href="#food">Services</a></li>
                        <li><a href="#foodmenu">Features</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#testimonial">Testimonial</a></li>
                        <li><a href="#contact">Contact</a></li>
                        {token===null&& <li>
                  <Link className="text-white hover:text-gray-300   p-2 rounded-xl border-2 bg-gray-600" to="/Login" >Login </Link>
                </li>
                }
               { token===null&&<li>
                  <Link className="text-white hover:text-gray-300   p-2 rounded-xl border-2 bg-gray-600" to="/signup" >Sign In </Link>
                </li>
                 }
                 {
                  token!==null&&<ProfileDropdown/>
                 }
                    </ul>
                    <h1 className="logo">Quicklinks</h1>
                </div>
            </nav>
       </>
    );
}
export default Navigation;