import React, { useState } from "react";
import HamburgerMenu from "react-hamburger-menu";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="nav-container">

        {/*  Logo  */}
        <div className="nav-left">
          <img src={logo} alt="logo" className="nav-logo" />
          <h2 className="brand">Artiflex</h2>
        </div>

        {/* Hamburger (mobile only) */}
        <div className="hamburger-wrapper">
          <HamburgerMenu
            isOpen={open}
            menuClicked={() => setOpen(!open)}
            width={28}
            height={22}
            strokeWidth={2}
            rotate={0}
            color="#333"
            borderRadius={0}
            animationDuration={0.4}
          />
        </div>

        {/* Center Navigation Links */}
        <ul className={open ? "nav-links open" : "nav-links"}>
          <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
          <li><a href="#contact" onClick={() => setOpen(false)}>Contact Us</a></li>

          {/* Mobile Contact Button inside menu */}
          <button className="cta-btn mobile-btn">Contact</button>
        </ul>

        {/* Desktop Contact Button */}
        <div className="nav-right">
          <button className="cta-btn">Contact</button>
        </div>

      </div>
    </header>
  );
};

export default Navbar;
