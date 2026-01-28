import React from "react";
import "./WhyWeAreHere.css";

const WhyWeAreHere = () => {
  return (
    <section className="why-section">

      {/* ---------- TOP CONTENT ---------- */}
      <div className="why-top">
        <h2 className="why-title">Why We’re Here</h2>

        <p className="why-text">
          We believe in augmenting human intelligence, not replacing it.
        </p>
      </div>

      {/* ---------- IMAGE + GRADIENT BLOCK ---------- */}
      <div className="why-image">
        <div className="grid-overlay"></div>
      </div>

    </section>
  );
};

export default WhyWeAreHere;
