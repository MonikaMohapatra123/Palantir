import React from "react";
import "./ValuesMissions.css";

const ValuesMissions = () => {
  return (
    <section className="values-section">
      <h2 className="values-heading">Values & Missions</h2>
      <div className="values-container">
        {/* Mission Card */}
        <div className="value-card">
          <div className="text-content">
            <h3>Our Mission</h3>
            <p>
              At Keenethics, we <strong>aim to empower businesses with technology that prioritizes ethics</strong>. 
              We are committed to integrity, transparency, and making a positive impact. Every line of code we write reflects our belief that technology should benefit both progress and the well-being of people and communities.
            </p>
          </div>
          <div className="image-content">
            <img src="./girl.jpg" alt="Mission" />
          </div>
        </div>

        {/* Vision Card */}
        <div className="value-card">
          <div className="text-content">
            <h3>Our Vision</h3>
            <p>
              We envision a future where technology is crafted with intention, responsibility, and care — 
              <strong> a world where ambition and ethics unite</strong>, driving meaningful innovation that uplifts businesses, individuals, and society as a whole.
            </p>
          </div>
          <div className="image-content">
            <img src="./p-1.jpg" alt="Vision" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesMissions;
