import React from "react";
import "./NavBar.css";

const GetStartedOverlay = ({ close }) => {
  return (
    <div className="getstarted-overlay">

      {/* LEFT DARK AREA */}
      <div className="getstarted-left"></div>

      {/* RIGHT FORM AREA */}
      <div className="getstarted-right">

        {/* TOP BAR */}
        <div className="getstarted-topbar">
          <span>CONTACT / DEMO REQUEST + PARTNERSHIP INQUIRY</span>
          <span className="investor-link">INVESTOR RELATIONS ↗</span>
        </div>

        {/* CLOSE */}
        <button className="overlay-close" onClick={close}>✕</button>

        {/* HEADING */}
        <h1 className="getstarted-title">
          Interested in solving your problems with Axiomos software?
        </h1>

        {/* FORM */}
        <form className="getstarted-form">

          <div className="field">
            <label>FIRST NAME *</label>
            <input type="text" />
          </div>

          <div className="field">
            <label>LAST NAME *</label>
            <input type="text" />
          </div>

          <div className="field">
            <label>BUSINESS EMAIL ADDRESS *</label>
            <input type="email" />
          </div>

          <div className="field">
            <label>PHONE NUMBER *</label>
            <input type="text" />
          </div>

          <div className="field">
            <label>JOB TITLE *</label>
            <input type="text" />
          </div>

          <div className="field">
            <label>COMPANY / INSTITUTION *</label>
            <input type="text" />
          </div>

          <div className="field">
            <label>COUNTRY *</label>
            <select>
              <option>Select...</option>
              <option>India</option>
              <option>USA</option>
              <option>UK</option>
            </select>
          </div>

          <div className="field">
            <label>
              TELL US ABOUT YOUR PROJECT, A BIT OF CONTEXT WILL ALLOW US TO
              CONNECT YOU TO THE RIGHT TEAM FASTER.
            </label>
            <textarea rows="4"></textarea>
          </div>

          <button className="submit-btn">Submit</button>

          {/* CAPTCHA PLACEHOLDER */}
          <div className="captcha-box">
            <input type="checkbox" /> I'm not a robot
          </div>

          <p className="privacy-text">
            Please see our <u>Privacy Policy</u> regarding how we will handle
            this information.
          </p>

        </form>
      </div>

    </div>
  );
};

export default GetStartedOverlay;
