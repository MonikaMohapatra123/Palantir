import React from "react";
import "./MobileNavBar.css";

const MobileNavBar = ({ close }) => {
  return (
    <div className="mobile-overlay">
      <div className="mobile-nav">

        {/* Header */}
        <div className="mobile-header">
          <div className="logo">A</div>

          <div className="header-icons">
            <button className="close-btn" onClick={close}>✕</button>
            <span className="menu-icon">☰</span>
          </div>
        </div>

        {/* Menu */}
        <ul>
          <li>Projects <span>›</span></li>
          <li>Services <span>›</span></li>
          <li>Industries <span>›</span></li>
          <li>Technologies <span>›</span></li>
          <li>About Us</li>
          <li>Blog</li>
          <li>Career</li>
          <li className="contact-mobile">Contact Us</li>
        </ul>

      </div>
    </div>
  );
};

export default MobileNavBar;
