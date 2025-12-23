import React from "react";
import "./PremiumHomeSection.css";

const PremiumHomeSection = () => {
  return (
    <section className="premium-wrapper">
      <div className="premium-container">

        {/* LEFT CONTENT */}
        <div className="premium-left">
          <span className="premium-badge">PREMIUM SOLUTIONS</span>

          <h1>
            Build <span>Powerful</span> & <span>Modern</span>
            <br /> Digital Experiences
          </h1>

          <p>
            We create simple, scalable, and high-quality digital solutions
            focused on clean design and strong performance.
          </p>

          <div className="premium-actions">
            <button className="btn-primary">Get Started</button>
            <button className="btn-outline">View Portfolio</button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="premium-right">
          <div className="image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="Premium Work"
              className="premium-image"
            />

            <div className="image-badge top-badge">Trusted by Clients</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PremiumHomeSection;
