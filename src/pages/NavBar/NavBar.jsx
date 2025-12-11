import React, { useState } from "react";
import "./NavBar.css";
import MobileNavBar from "./MobileNavBar";

const NavBar = () => {
  const [openMobile, setOpenMobile] = useState(false);

  return (
    <>
      <header className="navbar">
        {/* Left: Logo */}
        <div className="nav-left">
          <div className="logo">A</div>
        </div>

        {/* Center: Desktop Links */}
        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">Projects</a>
          <a href="#">Services</a>
          <a href="#">Industries</a>
          <a href="#">Technologies</a>
          <a href="#">About Us</a>
          <a href="#">Blog</a>
          <a href="#">Career</a>
        </nav>

        {/* Right: Contact button (desktop) + Hamburger (mobile) */}
        <div className="nav-right">
          <button className="contact-btn">Contact Us</button>

          <button
            className="menu-btn"
            onClick={() => setOpenMobile(true)}
          >
            ☰
          </button>
        </div>
      </header>

      {openMobile && <MobileNavBar close={() => setOpenMobile(false)} />}
    </>
  );
};

export default NavBar;
