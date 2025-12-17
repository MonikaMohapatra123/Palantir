import React, { useState } from "react";
import "./NavBar.css";
import MobileNavBar from "./MobileNavBar";
import data from "../../Json/data.json";

const NavBar = () => {
  const [openMobile, setOpenMobile] = useState(false);
  const navbar = data["0"]; // ✅ ID based

  return (
    <>
      <header className="navbar">
        {/* Left: Logo */}
        <div className="nav-left">
          <img src={navbar.logo} alt="logo" className="logo" />
        </div>

        {/* Center: Desktop Links */}
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
        <MobileNavBar
          data={navbar}
          close={() => setOpenMobile(false)}
        />
      )}
    </>
  );
};

export default NavBar;
