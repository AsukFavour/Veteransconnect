import React from "react";
import "./Support.css";
import Navbar from "../TopNavbar/Navbar";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import telemedicine from "../../assets/supports.jpg";
import healthEducation from "../../assets/advocacy.jpg";
import backimg from "../../assets/volunteer.jpg";

const Support = () => {
  return (
    <>
      <Navbar />
      <Banner
        imgsrc={backimg}
        headerText="Assisting Our Veterans: Partnership & Support"
        bodyText="How you can contribute to improving the lives of military veterans"
      />

      <div className="support">
        <div className="support__row">
          <div className="support__section">
            <img
              src={telemedicine}
              alt="Telemedicine"
              className="support__img"
            />

            <div className="support__content">
              <h2 className="support__title">Partnership</h2>
              <p className="support__info">
                We understand the importance of support and community. Our
                platform offers a dedicated support section where you can
                connect with fellow veterans, share experiences, seek guidance,
                and find camaraderie. Engage in discussions, join support
                groups, and access resources specifically designed to address
                the unique challenges faced by retired military veterans
              </p>
              <a href="#" className="support__button">
                Join Us
              </a>
            </div>
          </div>
          <div className="support__section">
            <img
              src={healthEducation}
              alt="Health Education"
              className="support__img"
            />

            <div className="support__content">
              <h2 className="support__title">Supports</h2>
              <p className="support__info">
              We believe in the power of community and mutual support. Our platform provides a unique opportunity for individuals and organizations to contribute their skills and expertise to assist with the features and services we offer to retired military veterans. We welcome passionate individuals who are willing to lend a helping hand and make a positive impact on the lives of our veteran community.
              </p>
              <a href="#" className="support__button">
                Donate
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Support;
