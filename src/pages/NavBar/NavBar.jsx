import React, { useState, useEffect } from "react";
import "./NavBar.css";
import MobileNavBar from "./MobileNavBar";
import data from "../../Json/data.json";

const NavBar = () => {
  const [openMobile, setOpenMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navbar = data["0"]; // ID based

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        {/* Left: Logo */}
        <div className="nav-left">
          <img src={navbar.logo} alt="logo" className="logo" />
        </div>

        {/* Center: Desktop Menu */}
        <nav className="nav-links">
          {navbar.menu.map((item, index) => (
            <a key={index} href={item.link}>
              {item.name}
            </a>
          ))}
        </nav>

        {/* Right */}
        <div className="nav-right">
          <a href={navbar.contact.link} className="contact-btn">
            {navbar.contact.text}
          </a>

          <button className="menu-btn" onClick={() => setOpenMobile(true)}>
            ☰
          </button>
        </div>
      </header>

      {openMobile && (
        <MobileNavBar data={navbar} close={() => setOpenMobile(false)} />
      )}
    </>
  );
};

export default NavBar;
