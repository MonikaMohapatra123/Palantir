import React, { useEffect, useRef, useState, useCallback } from "react";
import "./ThesisSection.css";

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
    tag: "Working Intelligence",
    title: "Operational Intelligence Systems",
    image: "/pic-3.jpg",
  },
];

const ThesisSection = () => {
  const [index, setIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const sliderRef = useRef(null);
  const startX = useRef(0);
  const autoTimer = useRef(null);

  /* ---------------- AUTO SLIDE ---------------- */
  const stopAutoSlide = useCallback(() => {
    if (autoTimer.current) clearInterval(autoTimer.current);
  }, []);

  const startAutoSlide = useCallback(() => {
    stopAutoSlide();
    autoTimer.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % thesisData.length);
    }, 4000);
  }, [stopAutoSlide]);

  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
  }, [startAutoSlide, stopAutoSlide]);

  /* ---------------- DRAG FUNCTIONS ---------------- */
  const handleMouseDown = (e) => {
    stopAutoSlide();
    setIsDragging(true);
    startX.current = e.clientX;

    // Track mouse outside slider
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setOffset(e.clientX - startX.current);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;

    const sliderWidth = sliderRef.current.offsetWidth;

    if (offset < -sliderWidth / 4) {
      setIndex((prev) => (prev + 1) % thesisData.length);
    } else if (offset > sliderWidth / 4) {
      setIndex((prev) =>
        prev === 0 ? thesisData.length - 1 : prev - 1
      );
    }

    setOffset(0);
    setIsDragging(false);
    startAutoSlide();

    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  };

  return (
    <div className="thesis-container">
      {/* ---------------- TABS ---------------- */}
      <div className="tags-row">
        {thesisData.map((item, i) => (
          <div
            key={i}
            className={`tab ${index === i ? "active running" : ""}`}
            onClick={() => setIndex(i)}
          >
            <span className="tab-text">{item.tag}</span>
          </div>
        ))}
      </div>

      {/* ---------------- IMAGE SLIDER ---------------- */}
      <div
        className="thesis-image-slider"
        ref={sliderRef}
        onMouseDown={handleMouseDown}
      >
        {/* TITLE OVER IMAGE */}
        <div className="image-title">
          <h1>{thesisData[index].title} ↗</h1>
        </div>

        <div
          className="image-track"
          style={{
            transform: `translateX(calc(-${index * 100}% + ${offset}px))`,
            transition: isDragging ? "none" : "transform 0.6s ease",
          }}
        >
          {thesisData.map((item, i) => (
            <img key={i} src={item.image} alt="" draggable="false" />
          ))}
        </div>
      </div>
    </div>
  )
};

export default ThesisSection;
