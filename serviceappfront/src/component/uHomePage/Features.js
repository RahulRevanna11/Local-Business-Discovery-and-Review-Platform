import React from "react";
import "./HomePage.css";
import feature1 from '../../assets/images/feature1.jpg';
import feature2 from '../../assets/images/feature2.png';
import feature3 from '../../assets/images/feature3.jpg';
import feature4 from '../../assets/images/feature4.jpg';
import feature5 from '../../assets/images/feature5.png';
import feature6 from '../../assets/images/feature6.png';

const Features = () => {
    return (
        <>
            <section className="menuarea font" id="foodmenu">
                <h2 className="menuheading">Our Features</h2>
                <div className="menucontainer container">
                    <div className="menuitem">
                        <div className="menuimage">
                            <img src={feature1}></img>
                        </div>
                        <div className="menudescription">
                            <h2 className="foodtitle foodprice">Local Business Listings</h2>
                            <p>We allows users to easily find and explore local businesses</p>

                        </div>
                    </div>
                    <div className="menuitem">
                        <div className="menuimage">
                            <img src={feature2}></img>
                        </div>
                        <div className="menudescription">
                            <h2 className="foodtitle foodprice">User-Friendly Search</h2>
                            <p>Emphasize a powerful and user-friendly search functionality to help users quickly find what they're looking for.</p>

                        </div>
                    </div>
                    <div className="menuitem">
                        <div className="menuimage">
                            <img src={feature3}></img>
                        </div>
                        <div className="menudescription">
                            <h2 className="foodtitle foodprice">Map Integration</h2>
                            <p>Our website integrates maps to provide users with the location of businesses.</p>

                        </div></div>
                    <div className="menuitem">
                        <div className="menuimage">
                            <img src={feature4}></img>
                        </div>
                        <div className="menudescription">
                            <h2 className="foodtitle foodprice">Personalized User Accounts</h2>
                            <p>We allow users to create accounts, save favorites, or personalize their experience.</p>

                        </div></div>
                    <div className="menuitem">
                        <div className="menuimage">
                            <img src={feature5}></img>
                        </div>
                        <div className="menudescription">
                            <h2 className="foodtitle foodprice">Deals and Offers</h2>
                            <p>We offers special deals, discounts, or promotions from businesses</p>

                        </div></div>
                    <div className="menuitem">
                        <div className="menuimage">
                            <img src={feature6}></img>
                        </div>
                        <div className="menudescription">
                            <h2 className="foodtitle foodprice">Reviews and Ratings</h2>
                            <p>Our website includes reviews and ratings for businesses, helping users make informed decisions.</p>

                        </div></div>
                </div>
            </section>
        </>
    )
}
export default Features;