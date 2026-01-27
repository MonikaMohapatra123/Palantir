import React, { useEffect, useRef, useState } from "react";
import "./ThesisSection.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ThesisSection = ({ thesisData }) => {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

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

  /* SMOOTH SCROLL */
  useEffect(() => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollTo({
      left: sliderRef.current.clientWidth * activeIndex,
      behavior: "smooth",
    });
  }, [activeIndex]);

  if (!thesisData || thesisData.length === 0) return null;

  return (
    <section className="thesis-section">
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

      {/* SLIDER WRAPPER */}
      <div className="thesis-slider-wrapper">
        {/* LEFT */}
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

        {/* SLIDER */}
        <div className="thesis-slider" ref={sliderRef}>
          {thesisData.map((item, index) => (
            <div
              className="thesis-slide"
              key={index}
              onClick={() => navigate("/services")}
            >
              <img src={item.image} alt={item.title} />

              <div className="thesis-overlay">
                <div className="thesis-overlay-content">
                  <span className="thesis-count">{item.count}</span>
                  <h2>{item.title}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT */}
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
