import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top-line"></div>

      <div className="footer-container">
        <div className="footer-left">
          <h3>Palantir</h3>
          <p>
            Trusted infrastructure and safety solutions delivering quality,
            reliability, and innovation.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/careers">Careers</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>info@safesite.com</p>
          <p>+91 98765 43210</p>
          <p>Hyderabad, India</p>
        </div>
      </div>

      {/* Existing bottom */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Palantir. All rights reserved.
      </div>

      {/* ✅ NEW AXIOMOS LINE */}
      <div className="footer-credit">
        Website Designed & Maintained by{" "}
        <a
          href="https://axiomos.in/"
          target="_blank"
          rel="noopener noreferrer"
        >
          AXIOMOS
        </a>
      </div>
    </footer>
  );
};

export default Footer;
