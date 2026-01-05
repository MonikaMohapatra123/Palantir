import React, { useEffect, useState } from "react";
import "./ScrollTextSection.css";

const ScrollTextSection = ({ scrollTextData }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!scrollTextData) return null;

  return (
    <section className="scroll-container">
      {/* FIRST PARAGRAPH */}
      <div
        className="hero-text"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      >
        <h1>
          {scrollTextData.mainText.before}
          <span> {scrollTextData.mainText.highlight} </span>
          {scrollTextData.mainText.after}
        </h1>
      </div>

      {/* SPACE HOLDER */}
      <div className="hero-spacer"></div>

      {/* PRODUCTS SECTION */}
      <div className="products-section">
        {scrollTextData.products.map((item, index) => (
          <div className="product" key={index}>
            <h2>{item.title}</h2>
            {item.description && <p>{item.description}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ScrollTextSection;
