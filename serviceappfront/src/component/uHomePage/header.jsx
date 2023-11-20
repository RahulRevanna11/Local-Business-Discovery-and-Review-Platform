import React from "react";
import './style.css';
export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                Fast, FREE way to get experts
                  <span></span>
                </h1>
                <p>Search Across many Products & Services</p>
                <label for="cities" className="chooseCity">Choose a City:</label>
                <br></br>
                    <select name="cities" id="cities" className="cities">
                        <option value="a">Sangli</option>
                        <option value="b">Ichalkaranji</option>
                        <option value="c">Miraj</option>
                        <option value="d">Kolhapur</option>
                    </select>
                    <br></br>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll addMargin"
                >
                  Explore
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
