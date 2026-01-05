import React, { useEffect, useRef, useState } from "react";
import "./ThesisSection.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ThesisSection = ({ thesisData }) => {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  /* AUTO SLIDE */
  useEffect(() => {
    if (!thesisData || thesisData.length === 0) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === thesisData.length - 1 ? 0 : prev + 1
      );
    }, 3200);

    return () => clearInterval(interval);
  }, [thesisData]);

  /* SCROLL */
  useEffect(() => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollTo({
      left: sliderRef.current.offsetWidth * activeIndex,
      behavior: "smooth",
    });
  }, [activeIndex]);

  if (!thesisData || thesisData.length === 0) return null;

  return (
    <section className="thesis-section">

      {/* ✅ HEADING */}
      <h2 className="thesis-heading">Tech Stack</h2>

      {/* TABS */}
      <div className="thesis-tabs">
        {thesisData.map((item, index) => (
          <button
            key={index}
            className={index === activeIndex ? "active" : ""}
            onClick={() => setActiveIndex(index)}
          >
            <span>{item.tag}</span>
          </button>
        ))}
      </div>

      {/* SLIDER */}
      <div className="thesis-slider-wrapper">
        <button
          className="nav-arrow left"
          onClick={() =>
            setActiveIndex(
              activeIndex === 0 ? thesisData.length - 1 : activeIndex - 1
            )
          }
        >
          <FaChevronLeft />
        </button>

        <div className="thesis-slider" ref={sliderRef}>
          {thesisData.map((item, index) => (
            <div className="thesis-slide" key={index}>
              <img src={item.image} alt={item.title} />
              <div className="thesis-overlay">
                <span className="thesis-count">{item.count}</span>
                <h2>{item.title}</h2>

                <div className="thesis-actions">
                  <button className="outline">PDF ↓</button>
                  <button className="outline">SHARE →</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="nav-arrow right"
          onClick={() =>
            setActiveIndex(
              activeIndex === thesisData.length - 1 ? 0 : activeIndex + 1
            )
          }
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default ThesisSection;
