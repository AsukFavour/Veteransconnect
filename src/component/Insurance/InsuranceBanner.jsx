import React from 'react';
import './InsuranceBanner.css';
import Navbar from '../TopNavbar/Navbar';
import Footer from '../Footer/Footer';

function InsuranceBanner() {
  return (
    <>
    <Navbar/>
    <div className="insurance-banner">
      <div className="insurance-banner__content">
        <h1 className="insurance-banner__title">Protect Your Future</h1>
        <p className="insurance-banner__text">Get the right insurance coverage for your needs. Our team of experts is here to help you.</p>
        <div className="insurance-banner__buttons">
          <a href="contact-us.html" className="insurance-banner__button insurance-banner__button--contact">Contact Us</a>
          <a href="discover.html" className="insurance-banner__button insurance-banner__button--discover">Discover</a>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default InsuranceBanner;
