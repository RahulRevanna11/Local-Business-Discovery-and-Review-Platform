import React from 'react';
import './footer.css';
function Footer() {
    return (
        <footer>
            <div className="footer-navigator text-center">Back to top</div>
            <div className='footer-div2'>
                <div className="footer-know-about-us mt-5">
                    <h4 className="m-5 font-bold">Get to Know Us</h4>
                    <p className="mt-5 ml-8 ">About Us</p>
                    <p className="mt-5 ml-8">Careers</p>
                </div>
                <div className="footer-contact-us mt-5">
                    <h4 className="m-5 font-bold">Connect with Us</h4>
                    <div>
                        <a src="#">Facebook</a>
                        <a src="#">Twitter</a>
                        <a src="#">Instagram</a>
                    </div>
                </div>
                <div className="footer-make-money-with-us mt-5">
                    <h4 className="m-5 font-bold">Make Money with Us</h4>
                    <p className="mt-5 ml-8  text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem</p>
                    <p className="mt-5 ml-8 text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius,</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;