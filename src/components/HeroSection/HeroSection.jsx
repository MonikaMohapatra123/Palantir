import React from "react";
import "./HeroSection.css";

const HeroSection = ({ heroData }) => {
  if (!heroData) return null; // safety check

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

      {/* Content */}
      <div className="hero-content">
        <h1>{heroData.heading}</h1>
      </div>
    </section>
  );
};

export default HeroSection;
