import React from "react";
import "./ContactUs.css";
import Footer from "../Footer/Footer";
import Navbar from "../TopNavbar/Navbar";

function ContactUs() {
  return (
    <>
      <Navbar />
      <div className="contact-us">
        <h2 className="contact-us__title">Contact Us</h2>
        <div className="contact-us__info">
          <div className="contact-us__details">
            <h3 className="contact-us__subtitle">General Inquiries</h3>
            <p>Email: vbsfoundation@outlook.com</p>
            <p>Phone: +1 123-456-7890</p>
            <p>Address: 123 Example Street, City, State, ZIP</p>
          </div>
          <div className="contact-us__details">
            <h3 className="contact-us__subtitle">Customer Support</h3>
            <p>Email: vbsfoundationsupport@outlook.com</p>
            <p>Phone: +1 987-654-3210</p>
            <p>Address: 456 Support Street, City, State, ZIP</p>
          </div>
        </div>
        <form className="contact-us__form">
          <h3 className="contact-us__subtitle">Send us a message</h3>
          <div className="contact-us__form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" />
          </div>
          <div className="contact-us__form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" />
          </div>
          <div className="contact-us__form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" rows="5"></textarea>
          </div>
          <button type="submit" className="contact-us__submit-button">
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
