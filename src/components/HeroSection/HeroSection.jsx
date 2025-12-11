import React from "react";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero-container">
      {/* Background Video */}
      <video
        className="hero-video"
        src="/AI.mp4" // place video inside public folder
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-content">
        <h1>AI-Powered Automation for Every Decision</h1>
        {/* <p>Your subheading text goes here. Describe something attractive.</p>
        <button>Explore More</button> */}
      </div>
    </section>
  );
}
