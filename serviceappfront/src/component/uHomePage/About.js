import React from "react";
import "./HomePage.css";

export const About = () => {
  return (
    <div id="about" className="font">
      <h3 className="menuheading">ABOUT US</h3>
      <div className="container mt-5 p-3 md:p-5">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-4 md:mb-0 text-center">
            <img
              src="img/about.jpg"
              className="w-full md:rounded"
              alt="About Us"
            />
          </div>
          <div className="md:w-1/2 md:ml-4">
            <div className="about-text text-center">
              <h2 className="font-weight-bold mb-3 text-primary text-4xl">
                Our Story
              </h2>
              <p className="text-muted text-xl">
                This utility is not just about convenience; it's about empowering local economies and fostering stronger community ties in an increasingly digital age.
              </p>
              <h3 className="font-weight-bold mt-4 text-success text-3xl">
                Why Choose Us?
              </h3>
              <p className="text-muted text-xl">
                The amalgamation of cutting-edge technology with a focus on community connections makes our platform exceptionally useful. Users can effortlessly navigate a feature-rich environment, utilizing tools such as location maps, availability checks, and reviews to make informed decisions. Simultaneously, businesses enhance their visibility and reach, enjoying a platform that not only connects them with potential customers but also facilitates the showcasing of their expertise through previous work displays.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
