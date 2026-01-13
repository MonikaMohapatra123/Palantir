import React from "react";
import "./HeroSection.css";

const HeroSection = ({ heroData }) => {
  if (!heroData) return null;

  return (
    <section className="hero-container">
      {/* Background Video */}
      <video
        className="hero-video"
        src={heroData.video}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="hero-overlay0"></div>

      {/* Hero Content */}
      <div className="hero-content">
        <h1>{heroData.heading}</h1>
      </div>

      {/* Scroll Arrow & Text */}
      <div className="scroll-down">
  <div className="arrow"></div>
  <span className="scroll-text">Scroll to Explore</span>
</div>

    </section>
  );
};

export default HeroSection;
