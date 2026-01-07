import React from "react";
import "./NavBar.css";

const GetStartedOverlay = ({ close }) => {
  return (
    <div className="getstarted-overlay">
      {/* LEFT DARK */}
      <div className="getstarted-left"></div>

      {/* RIGHT FORM */}
      <div className="getstarted-right">
        <button className="overlay-close" onClick={close}>✕</button>

        <h2>Interested in solving your problems with Axiomos software?</h2>

        <form className="getstarted-form">
          <input placeholder="First name *" />
          <input placeholder="Last name *" />
          <input placeholder="Business email address *" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default GetStartedOverlay;
