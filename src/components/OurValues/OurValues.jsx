import React from "react";
import "./OurValues.css";

const OurValues = () => {
  return (
    <section className="values-section">
      <div className="values-container">
        <h2 className="values-title">Our Values</h2>

        <div className="values-grid">
          <div className="value-card">
            <span className="value-tag">KEEP LEARNING, KEEP GROWING</span>
            <p>
              We stay curious, challenge ourselves, and never settle for "good
              enough."
            </p>
          </div>

          <div className="value-card">
            <span className="value-tag">WELL-BEING MATTERS</span>
            <p>
              A clear mind and a healthy body lead to better work. We respect
              balance.
            </p>
          </div>

          <div className="value-card">
            <span className="value-tag">CHALLENGE, THEN IMPROVE</span>
            <p>
              We embrace tough conversations and debates to find the best
              solutions.
            </p>
          </div>

          <div className="value-card">
            <span className="value-tag">OWN YOUR WORK</span>
            <p>
              We take full responsibility for our work, ensuring quality and
              continuous improvement in everything we do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;
