import React from "react";
import "./HomePage.css";
export const About = (props) => {
  return (
    <div id="about" className="font">
      <h3 className="menuheading">ABOUT US</h3>
      <div className="container mt-5 p-5">
        <div className="flex justify-around">
          <div className="col-md-6 d-flex align-items-center m-5">
            <img src="img/about.jpg" className="img-fluid" alt="About Us" />
          </div>
          <div className="col-md-6 m-5 ">
            <div className="about-text">
              <h2 className="font-weight-bold mb-3 text-primary text-4xl">Our Story</h2>
              <p className="text-muted text-xl">
                {props.data ? props.data.paragraph : "Loading..."}
              </p>
              <h3 className="font-weight-bold mt-4 text-success text-xl">
                Why Choose Us?
              </h3>
              <div className="row">
                <div className="col-6">
                  <ul className="list-unstyled">
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`} className="text-info">
                            {d}
                          </li>
                        ))
                      : "Loading"}
                  </ul>
                </div>
                <div className="col-6">
                  <ul className="list-unstyled">
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`} className="text-info">
                            {d}
                          </li>
                        ))
                      : "Loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
