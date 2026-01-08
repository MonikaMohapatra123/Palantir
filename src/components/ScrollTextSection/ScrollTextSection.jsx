import React, { useEffect, useRef, useState } from "react";
import "./ScrollTextSection.css";

const ScrollTextSection = ({ scrollTextData }) => {
  const sectionRef = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // start moving only when section enters viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
        const progress = Math.min(
          Math.max((windowHeight - rect.top) / windowHeight, 0),
          1
        );

        setOffset(progress * 60); // max 60px movement
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!scrollTextData) return null;

  return (
    <section ref={sectionRef} className="scroll-container">
      {/* HERO TEXT */}
      <div
        className="hero-text"
        style={{
          transform: `translateY(${offset}px)`,
        }}
      >
        <h1>
          {scrollTextData.mainText.before}
          <span> {scrollTextData.mainText.highlight} </span>
          {scrollTextData.mainText.after}
        </h1>
      </div>

      {/* SPACER */}
      <div className="hero-spacer"></div>

      {/* PRODUCTS */}
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
