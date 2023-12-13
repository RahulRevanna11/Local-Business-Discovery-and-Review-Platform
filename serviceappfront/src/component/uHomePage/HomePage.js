// import React from "react";
// // import "./HomePage.css";
// import office from './images/office.jpg';
// import education from './images/education.jpg';
// import business from './images/business.jpg';
// import health from './images/health.jpg';
// import home from './images/homeservice.jpg';
// import property from './images/properties.jpg';
// import travel from './images/travel.jpeg';
// import feature1 from './images/feature1.jpg';
// import feature2 from './images/feature2.png';
// import feature3 from './images/feature3.jpg';
// import feature4 from './images/feature4.jpg';
// import feature5 from './images/feature5.png';
// import feature6 from './images/feature6.png';
// import about from './images/about.jpg';
// import review1 from './images/review1.jpg';
// import review2 from './images/review2.jpg';
// import review3 from './images/review3.jpg';
// import review4 from './images/review4.png';
// import review5 from './images/review5.jpg';
// import review6 from './images/review6.jpg';

// const HomePage = () => {
//     return (
//         <>
//             {/* Navigation Bar ................. */}
//             <nav className="navbar">
//                 <div className="navbarcontainer container">
//                     <input type="checkbox" name="" id=""></input>
//                     <div className="hamburgerlines">
//                         <span className="line line1"></span>
//                         <span className="line line2"></span>
//                         <span className="line line3"></span>
//                     </div>
//                     <ul className="menuitems">
//                         <li><a href="#showcase">Home</a></li>
//                         <li><a href="#food">Services</a></li>
//                         <li><a href="#foodmenu">Features</a></li>
//                         <li><a href="#about">About Us</a></li>
//                         <li><a href="#testimonial">Testimonial</a></li>
//                         <li><a href="#contact">Contact</a></li>
//                     </ul>
//                     <h1 className="logo">Quicklinks</h1>
//                 </div>
//             </nav>


//             {/* ################## Showcase Area ##################### */}
//             <section className="showcasearea" id="showcase">
//                 <div className="showcasecontainer">
//                     <h1 className="maintitle">FAST, FREE WAY</h1>
//                     <h1 className="maintitle">TO GET EXPERTS</h1>
//                     <p className="subtitle">Search Across many Products & Services</p>
//                     <br></br>
//                     <br></br>
//                     <label for="cities" className="chooseCity">Choose a City:</label>
//                     <br></br>
//                     <select name="cities" id="cities" className="cities">
//                         <option value="a">Sangli</option>
//                         <option value="b">Ichalkaranji</option>
//                         <option value="c">Miraj</option>
//                         <option value="d">Kolhapur</option>
//                     </select>
//                     <br></br>
//                     <a href="#foodmenu" className="btn btnpri">Search</a>
//                 </div>
//             </section>

//             {/* ############ Services Types ############### */}
//             <section className="foodarea" id="food">
//                 <h2>Our Services</h2>
//                 <div className="foodcontainer container">
//                     <div className="foodtype fruit">
//                         <div className="imagecontainer">
//                             <img src={education} alt=""></img>
//                             <div className="imagecontent">
//                                 <h3>Education</h3>
//                                 <p>Study for the differnt exams like MPSC , UPSE , NDA , CAT , GATE, GRE, MHT-CET , JEE , NEET , SSC  RRB , Banking. Also language training, spoken english</p>
//                                 <a href="" className="btn btnpri" target="_blank">Explore</a>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="foodtype vegetable">
//                         <div className="imagecontainer">
//                             <img src={home} alt=""></img>
//                             <div className="imagecontent">
//                                 <h3>Home Services</h3>
//                                 <p>Domestic help service, Home appliances repairs and srvices, Furnitures dealers, Pest control sevices, Solar energy product, Plumbers, Wiremans, Carpenters,</p>
//                                 <a href="" className="btn btnpri" target="_blank">Explore</a>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="foodtype grain">
//                         <div className="imagecontainer">
//                             <img src={business} alt=""></img>
//                             <div className="imagecontent">
//                                 <h3>Business Services</h3>
//                                 <p>Web designers, Internet service providers, generator dealers, Computer repair, Security related, Forex services, Charted accountants, Courier services</p>
//                                 <a href="" className="btn btnpri" target="_blank">Explore</a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <br></br>
//                 <br></br>
//                 <div className="foodcontainer container">
//                     <div className="foodtype fruit">
//                         <div className="imagecontainer">
//                             <img src={property} alt=""></img>
//                             <div className="imagecontent">
//                                 <h3>Properties</h3>
//                                 <p>Property to buy, New residental project, Properties to rent, PG services, Mess services, and many more</p>
//                                 <a href="" className="btn btnpri" target="_blank">Explore</a>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="foodtype vegetable">
//                         <div className="imagecontainer">
//                             <img src={health} alt=""></img>
//                             <div className="imagecontent">
//                                 <h3>Health & Wellness</h3>
//                                 <p>Docters, Medicals, Beauty parlers, Gyms, Yoga classes, Zumba classes, skin care & treatment, Hair care centers, Aurvedic centers, Dietcians and Nutrionists</p>
//                                 <a href="" className="btn btnpri" target="_blank">Explore</a>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="foodtype grain">
//                         <div className="imagecontainer">
//                             <img src={travel} alt=""></img>
//                             <div className="imagecontent">
//                                 <h3>Travel & Transport</h3>
//                                 <p>Air travel agent, Bus travel agent, Train travel agent, car rents, tempo rentals, bike rentals, various tour packages, domestic & international cargo</p>
//                                 <a href="" className="btn btnpri" target="_blank">Explore</a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* ########### Features ################ */}

//             <section className="menuarea" id="foodmenu">
//                 <h2 className="menuheading">Our Features</h2>
//                 <div className="menucontainer container">
//                     <div className="menuitem">
//                         <div className="menuimage">
//                             <img src={feature1}></img>
//                         </div>
//                         <div className="menudescription">
//                             <h2 className="foodtitle foodprice">Local Business Listings</h2>
//                             <p>We allows users to easily find and explore local businesses</p>

//                         </div>
//                     </div>
//                     <div className="menuitem">
//                         <div className="menuimage">
//                             <img src={feature2}></img>
//                         </div>
//                         <div className="menudescription">
//                             <h2 className="foodtitle foodprice">User-Friendly Search</h2>
//                             <p>Emphasize a powerful and user-friendly search functionality to help users quickly find what they're looking for.</p>

//                         </div>
//                     </div>
//                     <div className="menuitem">
//                         <div className="menuimage">
//                             <img src={feature3}></img>
//                         </div>
//                         <div className="menudescription">
//                             <h2 className="foodtitle foodprice">Map Integration</h2>
//                             <p>Our website integrates maps to provide users with the location of businesses.</p>

//                         </div></div>
//                     <div className="menuitem">
//                         <div className="menuimage">
//                             <img src={feature4}></img>
//                         </div>
//                         <div className="menudescription">
//                             <h2 className="foodtitle foodprice">Personalized User Accounts</h2>
//                             <p>We allow users to create accounts, save favorites, or personalize their experience.</p>

//                         </div></div>
//                     <div className="menuitem">
//                         <div className="menuimage">
//                             <img src={feature5}></img>
//                         </div>
//                         <div className="menudescription">
//                             <h2 className="foodtitle foodprice">Deals and Offers</h2>
//                             <p>We offers special deals, discounts, or promotions from businesses</p>

//                         </div></div>
//                     <div className="menuitem">
//                         <div className="menuimage">
//                             <img src={feature6}></img>
//                         </div>
//                         <div className="menudescription">
//                             <h2 className="foodtitle foodprice">Reviews and Ratings</h2>
//                             <p>Our website includes reviews and ratings for businesses, helping users make informed decisions.</p>

//                         </div></div>
//                 </div>
//             </section>
//             {/* ################ About Us ####################### */}

//             <section className="aboutarea" id="about">
//                 <div className="aboutwrap container">
//                     <div className="abouttext">
//                         <h2 className="maintitle">About us</h2>

//                         <p>At Quicklinks, we're on a mission to connect people with the best local businesses and services in a seamless and efficient way. Our platform is built on a foundation of trust, transparency, and convenience. With a passion for simplifying the search for local solutions, we've created a user-friendly environment that empowers both consumers and businesses. We believe in the power of local communities and are committed to promoting and supporting local enterprises.Quicklinks is not just a directory; it's a community, a bridge, and a solution. Join us in making local experiences better, easier, and more rewarding</p>
//                     </div>
//                     <div className="aboutimage ">
//                         <img src={about}></img>
//                     </div>
//                     <div className="clearfix"></div>
//                 </div>
//             </section>

//             {/* ###################### Reviews & Rating ################## */}

//             <section class="reviewarea" id="testimonial">
//                 <h2 class="reviewtitle">Reviews & Rating</h2>
//                 <div class="reviewcontainer container">
//                     <div class="reviewbox">
//                         <div class="reviewrating">
//                             <i>⭐</i>
//                             <i>⭐</i>
//                             <i>⭐</i>
//                             <i>⭐</i>
//                             <i>⭐</i>
//                         </div>
//                         <p class="reviewtext">I had an amazing dining experience at 'Hotel great Maratha'. The food was delicious, the service was impeccable, and the ambiance was perfect. I'll definitely be back!</p>
//                         <div class="customer">
//                             <div class="customerimage">
//                                 <img src={review1}></img>
//                                 <p class="customername">Pooja Hegde</p>
//                             </div>
//                         </div>
//                     </div>

//                     <div class="reviewbox">
//                         <div class="reviewrating">
//                             <i>⭐</i>
//                             <i>⭐</i>
//                             <i>⭐</i>
//                             <i>⭐</i>
//                         </div>
//                         <p class="reviewtext">I called 'PATIL Plumbres' for a plumbing emergency, and they arrived promptly and fixed the issue efficiently. Their service saved the day!</p>
//                         <div class="customer">
//                             <div class="customerimage">
//                                 <img src={review2}></img>
//                                 <p class="customername">Joe Biden</p>
//                             </div>
//                         </div>
//                     </div>

//                     <div class="reviewbox">
//                         <div class="reviewrating">
//                         <i>⭐</i>
//                             <i>⭐</i>
//                             <i>⭐</i>
//                             <i>⭐</i>
//                             <i>⭐</i>
//                         </div>
//                         <p class="reviewtext">I always leave Orchid Unisex Salon feeling like a million bucks! The stylists are talented, and the salon is clean and inviting. I highly recommend it</p>
//                         <div class="customer">
//                             <div class="customerimage">
//                                 <img src={review3}></img>
//                                 <p class="customername">Alia Bhatt</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="reviewcontainer container">
//                     <div class="reviewbox">
//                         <div class="reviewrating">
//                             <i>⭐</i>
//                             <i>⭐</i>
//                             <i>⭐</i>
//                             <i>⭐</i>
//                             <i>⭐</i>
//                         </div>
//                         <p class="reviewtext">I love my gym 'Redekar gym'! The trainers are knowledgeable, the equipment is top-notch, and the classes are fantastic. It's the perfect place to stay in shape.</p>
//                         <div class="customer">
//                             <div class="customerimage">
//                                 <img src={review4}></img>
//                                 <p class="customername">Rohit Sharma</p>
//                             </div>
//                         </div>
//                     </div>

//                     <div class="reviewbox">
//                         <div class="reviewrating">
//                             <i>⭐</i>
//                             <i>⭐</i>
//                             <i>⭐</i>
//                             <i>⭐</i>
//                         </div>
//                         <p class="reviewtext">The team at Shatau Hospital is dedicated and professional. They provide top-notch healthcare services, and I always feel well taken care of when I visit.</p>
//                         <div class="customer">
//                             <div class="customerimage">
//                                 <img src={review5}></img>
//                                 <p class="customername">Kiara Advani</p>
//                             </div>
//                         </div>
//                     </div>

//                     <div class="reviewbox">
//                         <div class="reviewrating">
//                         <i>⭐</i>
//                             <i>⭐</i>
//                             <i>⭐</i>
//                             <i>⭐</i>
//                             <i>⭐</i>
//                         </div>
//                         <p class="reviewtext">I can't get enough of the coffee at Retro Cafe. It's the perfect place to unwind, and the baristas know how to make a mean cappuccino!</p>
//                         <div class="customer">
//                             <div class="customerimage">
//                                 <img src={review6}></img>
//                                 <p class="customername">Virat Kohli</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* ####################### Contact Us ################### */}
//             <section className="contactarea" id="contact">
//                 <div className="contactcontainer container">
//                     <div className="contactimage">
//                         <img src={office}></img>
//                     </div>
//                     <div className="formcontainer">
//                         <h2>Contact Us</h2>
//                         <input type="text" placeholder=" Name"></input>
//                         <input type="email" placeholder=" Email"></input>
//                         <textarea name="" id="" cols="30" rows="10" placeholder="Type Your Message"></textarea>
//                         <a href="#" className="btn btnpri">Submit</a>
//                     </div>
//                 </div>
//             </section>
//             {/* ################# Footer ################# */}
//             <footer className="footer">
//                 <h2>City Inn &copy; all rights reserved</h2>
//             </footer>
//         </>
//     )
// }
// export default HomePage;








import React from "react";
import Navigation from './Navigation';
import Header from './Header';
import Services from './Services';
import Features from './Features';
import {About} from './About';
import Reviews from './Reviews';
import Contact from './Contact';
import Footer from '../common/Footer';

// import Div4 from "../HomePage/homeDiv4";
import HomeDiv3 from "./HomeDiv3";
import { Gallery } from "./gallery";
import Div4 from "../HomePage/homeDiv4";
const HomePage = () => {
  return(
    <div>
       {/* <Navigation></Navigation> */}
       <Header></Header>
       <Services></Services>
       <HomeDiv3 />
       <Features></Features>
       <About></About>
       <Reviews></Reviews>
       {/* <Gallery/> */}
       <Contact></Contact>
       {/* <Footer></Footer> */}
    </div>
  );
}

export default HomePage;