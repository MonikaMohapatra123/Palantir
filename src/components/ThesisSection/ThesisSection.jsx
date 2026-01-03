import React, { useEffect, useRef, useState } from "react";
import "./ThesisSection.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const thesisData = [
  {
    tag: "Defense Reformation",
    title: "Resurrecting the American Industrial Base",
    image: "/pic-1.jpg",
  },
  {
    tag: "Warp Speed",
    title: "Artificial Intelligence at Warp Speed",
    image: "/pic-2.jpg",
  },
  {
    tag: "Energy Security",
    title: "Energy Security for the Future",
    image: "/pic-3.jpg",
  },
];

const ThesisSection = () => {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  /* AUTO SLIDE */
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === thesisData.length - 1 ? 0 : prev + 1
      );
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  /* SCROLL */
  useEffect(() => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollTo({
      left: sliderRef.current.offsetWidth * activeIndex,
      behavior: "smooth",
    });
  }, [activeIndex]);

  /* ARROWS */
  const prevSlide = () => {
    setActiveIndex(
      activeIndex === 0 ? thesisData.length - 1 : activeIndex - 1
    );
  };

  const nextSlide = () => {
    setActiveIndex(
      activeIndex === thesisData.length - 1 ? 0 : activeIndex + 1
    );
  };

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

      {/* SLIDER */}
      <div className="thesis-slider-wrapper">
        <button className="nav-arrow left" onClick={prevSlide}>
          <FaChevronLeft />
        </button>

        <div className="thesis-slider" ref={sliderRef}>
          {thesisData.map((item, index) => (
            <div className="thesis-slide" key={index}>
              <img src={item.image} alt={item.title} />
              <div className="thesis-overlay">
                <span className="thesis-count">18 THESES</span>
                <h2>{item.title}</h2>
                <div className="thesis-actions">
                  <button className="outline">PDF ↓</button>
                  <button className="outline">SHARE →</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="nav-arrow right" onClick={nextSlide}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default ThesisSection;
