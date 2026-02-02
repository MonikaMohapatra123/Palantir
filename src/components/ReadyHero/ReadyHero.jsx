import React from "react";
import "./ReadyHero.css";

const ReadyHero = () => {
  return (
    <section className="ready-hero">
      <div className="ready-hero-inner">
        <h1 className="ready-title">Are you ready?</h1>

        <div className="ready-logo">
          {/* Replace src with your logo path if needed */}
          <img src="/logo.png" alt="Logo" />
        </div>

        <p className="ready-subtitle">
          Help revolutionize technology and accelerate software's future.
        </p>

        <button className="ready-btn">Join Now</button>
      </div>
    </section>
  );
};

export default ReadyHero;
