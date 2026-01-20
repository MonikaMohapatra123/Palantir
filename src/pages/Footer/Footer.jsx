import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="pl-footer">
      <div className="pl-footer-inner">

        {/* LEFT COLUMN */}
        <div className="pl-footer-left">
          <p className="copyright">
            © 2026 Axiomos Technologies LLP.
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
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <button>YOUTUBE</button>
            </a>
            <a href="https://x.com" target="_blank" rel="noreferrer">
              <button>X</button>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <button>LINKEDIN</button>
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <button>GITHUB</button>
            </a>
            <button>STORE</button>
          </div>
        </div>

        {/* OFFERINGS */}
        <div className="pl-footer-col">
          <h5>OFFERINGS</h5>
          <button className="footer-btn">American Tech Fellowship</button>
          <button className="footer-btn">Anti-Money Laundering</button>
          <button className="footer-btn">Automotive & Mobility</button>
          <button className="footer-btn">Data Protection</button>
          <button className="footer-btn">Defense</button>
          <button className="footer-btn">Energy</button>
          <button className="footer-btn">Federal Health</button>
          <button className="footer-btn">Financial Services</button>
          <button className="footer-btn">Food & Beverage</button>
          <button className="footer-btn">Hospital Operations</button>
          <button className="footer-btn">Insurance</button>
          <button className="footer-btn">Life Sciences</button>
        </div>

        {/* IMPACT STUDIES */}
        <div className="pl-footer-col">
          <h5>IMPACT STUDIES</h5>
          <button className="footer-btn">Airbus</button>
          <button className="footer-btn">Cleveland Clinic</button>
          <button className="footer-btn">Concordance</button>
          <button className="footer-btn">Doosan Infracore</button>
          <button className="footer-btn">Fujitsu</button>
          <button className="footer-btn">Jacobs</button>
          <button className="footer-btn">NHS</button>
          <button className="footer-btn">Pacific Gas & Electric</button>
          <button className="footer-btn">Swiss Re</button>
          <button className="footer-btn">World Food Programme</button>
        </div>

        {/* CAPABILITIES */}
        <div className="pl-footer-col">
          <h5>CAPABILITIES</h5>
          <button className="footer-btn">AI + ML</button>
          <button className="footer-btn">Data Integration</button>
          <button className="footer-btn">Digital Twin</button>
          <button className="footer-btn">Edge AI</button>
          <button className="footer-btn">Marketplace</button>
          <button className="footer-btn">Pipeline Builder</button>
          <button className="footer-btn">Process Mining</button>
          <button className="footer-btn">Real-Time Alerting</button>
          <button className="footer-btn">Streaming</button>
          <button className="footer-btn">Titanium</button>
        </div>

        {/* DOCUMENTS */}
        <div className="pl-footer-col">
          <h5>DOCUMENTS</h5>
          <a href="/docs">Developer Community</a>
          <a href="/docs">Platform Documentation</a>
          <a href="/trust">Trust Center</a>
          <a href="/cookies">Cookies</a>
          <a href="/privacy">Privacy Statement</a>
          <a href="/terms">Terms of Use</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
