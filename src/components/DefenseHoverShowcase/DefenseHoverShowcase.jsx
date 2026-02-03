import React from "react";
import "./DefenseHoverShowcase.css";

const DefenseHoverShowcase = () => {
  return (
    <section className="dhs-wrapper">
      {/* LEFT CARD */}
      <div className="dhs-card">
        <div className="dhs-card-header">
          <h2>Explore Defense Solutions</h2>
          <div className="dhs-arrow">→</div>
        </div>

        {/* CENTER LOGO (REPLACED G WITH LOGO) */}
        <div className="dhs-center-logo">
          <img
            src="/logo.png"   // 🔁 change this to your logo path (png/svg/webp)
            alt="Company Logo"
          />
        </div>

        <div className="dhs-explore-row">
          <span>{`{EXPLORE`}</span>
          <span>{`NOW}`}</span>
        </div>

        <p className="dhs-description">
          Discover the mission-tested Palantir Solutions that confront the
          world's most complex Defense challenges.
        </p>
      </div>

      {/* RIGHT IMAGE */}
      <div className="dhs-image-box">
        <img
          src="/girl.jpg"  // 🔁 replace with your right-side image
          alt="Defense Visual"
        />
      </div>
    </section>
  );
};

export default DefenseHoverShowcase;
