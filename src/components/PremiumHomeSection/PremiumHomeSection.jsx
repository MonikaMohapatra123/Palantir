import React from "react";
import "./PremiumHomeSection.css";

const PremiumHomeSection = () => {
  return (
    <section className="premium-wrapper">
      <div className="premium-container">

        {/* LEFT CONTENT */}
        <div className="premium-left">
          <span className="premium-badge">PREMIUM</span>

          <h1>
            Build <span>Powerful</span> & <span>Modern</span>
            <br /> Digital Experiences
          </h1>

          <p>
            We design high-impact, scalable and performance-driven solutions
            with a clean UI and premium feel.
          </p>

          <div className="premium-actions">
            <button className="btn-primary">Get Started</button>
            <button className="btn-outline">View Portfolio</button>
          </div>

          <div className="premium-stats">
            <div>
              <h3>120+</h3>
              <span>Projects</span>
            </div>
            <div>
              <h3>98%</h3>
              <span>Satisfaction</span>
            </div>
            <div>
              <h3>5+ yrs</h3>
              <span>Experience</span>
            </div>
          </div>
        </div>

        {/* RIGHT DESIGN */}
        <div className="premium-right">
          <div className="card main-card">
            <h4>Premium UI</h4>
            <p>Clean · Fast · Scalable</p>
          </div>

          <div className="card floating-card top">Design</div>
          <div className="card floating-card bottom">Development</div>
        </div>

      </div>
    </section>
  );
};

export default PremiumHomeSection;
