import { useState } from "react";
// import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    // e.preventDefault();
    // console.log(name, email, message);
    // emailjs
    //   .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //       clearState();
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
  };
  return (
    <div>
      <div id="contact" className="font">
        <div className="container">
          <div className="md:flex">
            <div className="md:w-1/2 md:pr-8">
              <div className="section-title">
                <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
                <p className="text-gray-600 text-xl">
                  Please fill out the form below to send us an email, and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name="sentMessage text-xl" validate onSubmit={handleSubmit}>
                <div className="md:flex md:space-x-4">
                  <div className="md:w-1/2 mb-4">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full border p-2 rounded text-xl"
                      placeholder="Name"
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div className="md:w-1/2 mb-4">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full border p-2 rounded text-xl"
                      placeholder="Email"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <textarea
                    name="message"
                    id="message"
                    className="w-full border p-2 rounded text-xl"
                    rows="4"
                    placeholder="Message"
                    required
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 text-xl"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="md:w-1/2 md:pl-8">
              <div className="contact-info">
                <div className="contact-item mb-4">
                  <h3 className="text-2xl font-bold mt-2">Contact Info</h3>
                  <p>
                    <span className="text-gray-700 text-xl">
                      <i className="fa fa-map-marker"></i> Address
                    </span>
                    {props.data ? props.data.address : "loading"}
                  </p>
                </div>
                <div className="contact-item mb-4">
                  <p>
                    <span className="text-gray-700 text-xl">
                      <i className="fa fa-phone"></i> Phone
                    </span>{" "}
                    {props.data ? props.data.phone : "loading"}
                  </p>
                </div>
                <div className="contact-item mb-4">
                  <p>
                    <span className="text-gray-700 text-xl">
                      <i className="fa fa-envelope-o"></i> Email
                    </span>{" "}
                    {props.data ? props.data.email : "loading"}
                  </p>
                </div>
              </div>
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer" className="bg-gray-200 py-4">
        <div className="container text-center">
          <p className="text-gray-700">
            &copy; 2023 qicklinks. Design by Rahul, Vishwajeet, Chinmay
          </p>
        </div>
      </div>
    </div>
  );
};
