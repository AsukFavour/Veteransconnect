import React from 'react';
import './About.css';
import Navbar from '../TopNavbar/Navbar';
import Footer from '../Footer/Footer';
import about from '../../assets/image.jpg'

const About = () => {
  return (
    <>
    <Navbar/>
    <div className="about">
      <div className="about-header">
        <img src={about} alt="Header Image" />
      </div>
      <div className="about-content">
        <h2>About Us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at lacus auctor, venenatis ex et, iaculis odio. In hac habitasse platea dictumst. Praesent euismod consectetur diam ut pellentesque. Vivamus ut elit euismod, semper urna vel, sagittis nulla. Ut aliquam eros at tristique dignissim. Nullam varius vitae ipsum in scelerisque. Sed dignissim massa enim, eu finibus tortor aliquet eget.</p>
        <p>Morbi euismod odio in mi blandit auctor. Donec eu nunc ut mi gravida bibendum at id dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris dapibus ex vel efficitur laoreet. Fusce in bibendum nisi. Nam quis dolor et leo feugiat pharetra ut vel neque. Integer eget turpis nisi.</p>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default About;
