import React from "react";
import "./About.css";
import Navbar from "../TopNavbar/Navbar";
import Footer from "../Footer/Footer";
import about from "../../assets/about.jpg";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about">
        <div className="about-header">
          <img src={about} alt="Header Image" />
        </div>
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            Welcome to Veteran Benevolent Support Africa, a platform created to
            serve retired military veterans. Our mission is to provide
            comprehensive support and resources to empower veterans in their
            service journey.We believe in enhancing the well-being, personal
            growth, and professional success of veterans. Through our platform,
            veterans have access to a wide range of resources that can improve
            that.
          </p>
          <p>
            At Veteran Benevolent Support Africa, we understand the unique
            challenges faced by retired military veterans. Our user-friendly
            platform offers a range of features and services to address diverse
            needs. From health awareness and education to education and
            training, entrepreneurship courses, employment, support services and
            much more. Join us as we provide comprehensive support to retired
            military veterans. Together, we can make a difference in the lives
            of veterans in Africa.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
