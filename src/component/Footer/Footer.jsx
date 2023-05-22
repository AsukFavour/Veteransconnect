import React from 'react';
import './Footer.css';
import { Link } from "react-router-dom";


function Footer() {
  return (
    <footer className="footer">
      <div className="footer__links">
      <Link to={'/'} >Home</Link>
      <Link to={'/about'} >About Us</Link>
      <Link to={'/contactus'} >Contact Us</Link>
        <a href="#">Donate</a>
      </div>
      <p className="footer__text">&copy; 2023 VBSAfrica. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
