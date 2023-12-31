import React from "react";
import "./HomePage.css";
import CitySearch from "../HomePage/SearchCity";
import { TypeAnimation } from "react-type-animation";
const Header = () => {
  return (
    <>
      <section className="showcasearea bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%" id="showcase ">
        <div className="showcasecontainer">
          <h1 className="maintitle1  text-md align-middle ">FAST, FREE WAY</h1>
          {/* <h1 className="maintitle">TO GET EXPERTS</h1> */}
          <div className="max-w-screen-md mx-auto overflow-hidden">
            <div className="min-w-64 min-h-32 mx-auto ">
            <h1 className="maintitle text-2xl p-5 text-yellow-400 font-bold shadow-md line-" style={{ maxWidth: '80vw', whiteSpace: 'wrap' }}>
  <TypeAnimation
    sequence={[
      'TO GET EXPERTS',
      1000,
      'TO GET LISTING',
      1000,
      'TO GET SEARCHING',
      1000,
      'TO GET EXPERTS',
      1000,
      () => {
        // console.log('Sequence completed');
      },
    ]}
    wrapper="span"
    cursor={true}
    repeat={Infinity}
    style={{ color: 'green', minHeight:"80vh" ,lineHeight:"10vh" }}
  />
</h1>
            </div>
          </div>

          <p className="subtitle">Search Across many Products & Services</p>
          <br></br>
          <br></br>

          {/* <label for="cities" className="chooseCity">Choose a City:</label>
                    <br></br>
                    <select name="cities" id="cities" className="cities">
                        <option value="a">Sangli</option>
                        <option value="b">Ichalkaranji</option>
                        <option value="c">Miraj</option>
                        <option value="d">Kolhapur</option>
                    </select>
                    <br></br>
                    <a href="#foodmenu" className="btn btnpri">Search</a> */}
          <CitySearch />
        </div>
      </section>
    </>
  );
};
export default Header;
