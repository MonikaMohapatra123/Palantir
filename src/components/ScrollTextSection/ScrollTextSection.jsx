import React, { useEffect, useState } from "react";
import "./ScrollTextSection.css";

const ScrollTextSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="scroll-container">
      {/* FIRST PARAGRAPH */}
      <div
        className="hero-text"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      >
        <h1>
          Our software powers real-time,
          <span> AI-driven </span>
          decisions in critical government and commercial enterprises in the
          West, from the factory floors to the front lines.
        </h1>
      </div>

      {/* IMPORTANT: SPACE HOLDER (prevents overlap) */}
      <div className="hero-spacer"></div>

      {/* SECOND SECTION */}
      <div className="products-section">
        <div className="product">
          <h2>AIP</h2>
          <p>Automate operations, from the factory floor to the front lines</p>
        </div>

        <div className="product">
          <h2>Gotham</h2>
          <p>Achieve AI-driven combat superiority, from space to mud</p>
        </div>

        <div className="product">
          <h2>Foundry</h2>
        </div>
      </div>
    </section>
  );
};

export default ScrollTextSection;
