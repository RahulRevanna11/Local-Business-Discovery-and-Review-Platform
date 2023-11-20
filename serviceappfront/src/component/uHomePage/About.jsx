import React from "react";
import "./HomePage.css";
import about from '../../assets/images/about.jpg';

const About = () => {
    return (
        <>
            <section className="aboutarea font" id="about">
                <div className="aboutwrap container">
                    <div className="abouttext">
                        <h2 className="maintitle">About us</h2>

                        <p>At Quicklinks, we're on a mission to connect people with the best local businesses and services in a seamless and efficient way. Our platform is built on a foundation of trust, transparency, and convenience. With a passion for simplifying the search for local solutions, we've created a user-friendly environment that empowers both consumers and businesses. We believe in the power of local communities and are committed to promoting and supporting local enterprises.Quicklinks is not just a directory; it's a community, a bridge, and a solution. Join us in making local experiences better, easier, and more rewarding</p>
                    </div>
                    <div className="aboutimage ">
                        <img src={about}></img>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </section>

        </>
    )
}
export default About;