import React from "react";
import "./HomePage.css";
import office from '../../assets/images/office.jpg';   


const Contact = () => {
    return(
        <>
            <section className="contactarea font" id="contact">
                <div className="contactcontainer container">
                    <div className="contactimage">
                        <img src={office}></img>
                    </div>
                    <div className="formcontainer">
                        <h2>Contact Us</h2>
                        <input type="text" placeholder=" Name"></input>
                        <input type="email" placeholder=" Email"></input>
                        <textarea name="" id="" cols="30" rows="10" placeholder="Type Your Message"></textarea>
                        <a href="#" className="btn btnpri">Submit</a>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Contact;