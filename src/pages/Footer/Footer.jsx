import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="pl-footer">
      <div className="pl-footer-inner">
        {/* LEFT COLUMN */}
        <div className="pl-footer-left">
          <p className="copyright">
            © 2026 Palantir Technologies Inc.
            <br />
            All rights reserved.
          </p>

          <div className="footer-divider"></div>

          <a href="/" className="footer-link">
            Cookies Settings
          </a>

          <div className="footer-divider"></div>

          <div className="regions">US&nbsp;&nbsp;UK&nbsp;&nbsp;JP&nbsp;&nbsp;KR</div>

          <div className="social-buttons">
            <button>YOUTUBE</button>
            <button>X</button>
            <button>LINKEDIN</button>
            <button>GITHUB</button>
            <button>STORE</button>
          </div>
        </div>

        {/* OFFERINGS */}
        <div className="pl-footer-col">
          <h5>OFFERINGS</h5>
          <a>American Tech Fellowship</a>
          <a>Anti-Money Laundering</a>
          <a>Automotive & Mobility</a>
          <a>Data Protection</a>
          <a>Defense</a>
          <a>Energy</a>
          <a>Federal Health</a>
          <a>Financial Services</a>
          <a>Food & Beverage</a>
          <a>Hospital Operations</a>
          <a>Insurance</a>
          <a>Life Sciences</a>
        </div>

        {/* IMPACT STUDIES */}
        <div className="pl-footer-col">
          <h5>IMPACT STUDIES</h5>
          <a>Airbus</a>
          <a>Cleveland Clinic</a>
          <a>Concordance</a>
          <a>Doosan Infracore</a>
          <a>Fujitsu</a>
          <a>Jacobs</a>
          <a>NHS</a>
          <a>Pacific Gas & Electric</a>
          <a>Swiss Re</a>
          <a>World Food Programme</a>
        </div>

        {/* CAPABILITIES */}
        <div className="pl-footer-col">
          <h5>CAPABILITIES</h5>
          <a>AI + ML</a>
          <a>Data Integration</a>
          <a>Digital Twin</a>
          <a>Edge AI</a>
          <a>Marketplace</a>
          <a>Pipeline Builder</a>
          <a>Process Mining</a>
          <a>Real-Time Alerting</a>
          <a>Streaming</a>
          <a>Titanium</a>
        </div>

        {/* DOCUMENTS */}
        <div className="pl-footer-col">
          <h5>DOCUMENTS</h5>
          <a>Developer Community</a>
          <a>Platform Documentation</a>
          <a>Trust Center</a>
          <a>Cookies</a>
          <a>Privacy Statement</a>
          <a>Terms of Use</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
