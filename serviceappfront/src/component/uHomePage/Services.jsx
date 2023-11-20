import React from "react";
import "./HomePage.css";
import education from '../../assets/images/education.jpg';
import business from '../../assets/images/business.jpg';
import health from '../../assets/images/health.jpg';
import home from '../../assets/images/homeservice.jpg';
import property from '../../assets/images/properties.jpg';
import travel from '../../assets/images/travel.jpeg';

const Services = () => {
    return (
        <>
            <section className="foodarea font" id="food">
                <h2>Our Services</h2>
                <div className="foodcontainer container">
                    <div className="foodtype fruit">
                        <div className="imagecontainer">
                            <img src={education} alt=""></img>
                            <div className="imagecontent">
                                <h3>Education</h3>
                                <p>Study for the differnt exams like MPSC , UPSE , NDA , CAT , GATE, GRE, MHT-CET , JEE , NEET , SSC  RRB , Banking. Also language training, spoken english</p>
                                <a href="" className="btn btnpri" target="_blank">Explore</a>
                            </div>
                        </div>
                    </div>
                    <div className="foodtype vegetable">
                        <div className="imagecontainer">
                            <img src={home} alt=""></img>
                            <div className="imagecontent">
                                <h3>Home Services</h3>
                                <p>Domestic help service, Home appliances repairs and srvices, Furnitures dealers, Pest control sevices, Solar energy product, Plumbers, Wiremans, Carpenters,</p>
                                <a href="" className="btn btnpri" target="_blank">Explore</a>
                            </div>
                        </div>
                    </div>
                    <div className="foodtype grain">
                        <div className="imagecontainer">
                            <img src={business} alt=""></img>
                            <div className="imagecontent">
                                <h3>Business Services</h3>
                                <p>Web designers, Internet service providers, generator dealers, Computer repair, Security related, Forex services, Charted accountants, Courier services</p>
                                <a href="" className="btn btnpri" target="_blank">Explore</a>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
                <div className="foodcontainer container">
                    <div className="foodtype fruit">
                        <div className="imagecontainer">
                            <img src={property} alt=""></img>
                            <div className="imagecontent">
                                <h3>Properties</h3>
                                <p>Property to buy, New residental project, Properties to rent, PG services, Mess services, and many more</p>
                                <a href="" className="btn btnpri" target="_blank">Explore</a>
                            </div>
                        </div>
                    </div>
                    <div className="foodtype vegetable">
                        <div className="imagecontainer">
                            <img src={health} alt=""></img>
                            <div className="imagecontent">
                                <h3>Health & Wellness</h3>
                                <p>Docters, Medicals, Beauty parlers, Gyms, Yoga classes, Zumba classes, skin care & treatment, Hair care centers, Aurvedic centers, Dietcians and Nutrionists</p>
                                <a href="" className="btn btnpri" target="_blank">Explore</a>
                            </div>
                        </div>
                    </div>
                    <div className="foodtype grain">
                        <div className="imagecontainer">
                            <img src={travel} alt=""></img>
                            <div className="imagecontent">
                                <h3>Travel & Transport</h3>
                                <p>Air travel agent, Bus travel agent, Train travel agent, car rents, tempo rentals, bike rentals, various tour packages, domestic & international cargo</p>
                                <a href="" className="btn btnpri" target="_blank">Explore</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Services;