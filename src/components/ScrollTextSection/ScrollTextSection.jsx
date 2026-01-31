import React, { useEffect, useRef, useState } from "react";
import "./ScrollTextSection.css";

const ScrollTextSection = ({ scrollTextData }) => {
  const sectionRef = useRef(null);
  const [offset, setOffset] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  /* ===========================
     SMOOTH SCROLL ANIMATION
  =========================== */
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!sectionRef.current) return;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const rect = sectionRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          if (rect.top < windowHeight && rect.bottom > 0) {
            const progress = Math.min(
              Math.max((windowHeight - rect.top) / windowHeight, 0),
              1
            );
            setOffset(progress * 60); // control strength
          }

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!scrollTextData) return null;

  return (
    <section ref={sectionRef} className="scroll-container">
      {/* ================= HERO TEXT ================= */}
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

      <div className="hero-spacer1"></div>

      {/* ================= PRODUCTS ================= */}
      <div className="products-section">
        {scrollTextData.products.map((item, index) => (
          <div
            className="product-row"
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* LEFT TEXT */}
            <div
              className={`product-info ${
                hoveredIndex === index ? "text-hovered" : ""
              }`}
            >
              <h2>{item.title}</h2>
              {item.description && <p>{item.description}</p>}
            </div>

            {/* RIGHT IMAGE */}
            <div className="row-image-wrapper">
              <div
                className={`row-image ${
                  hoveredIndex === index ? "visible" : ""
                }`}
              >
                <img src={item.image} alt={item.title} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ScrollTextSection;
