import React, { useState } from "react";
import logo from "../../assets/polotno.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleMenuToggle() {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className="navbar">
      <Link to={"/"}>
        <img src={logo} alt="Logo" className="navbar__logo" />
      </Link>
      <button className="navbar__toggle" onClick={handleMenuToggle}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
      <div className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}>
        <Link to={"/"} className="navbar__link">
          Home
        </Link>
        <Link to={"/allnews"} className="navbar__link">
          News
        </Link>
        <Link to={"/about"} className="navbar__link">
          About Us
        </Link>
        <Link to={"/contactus"} className="navbar__link">
          Contact Us
        </Link>
        <Link to={"/login"} className="navbar__donate">
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
