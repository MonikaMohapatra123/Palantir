import React, { useState, useEffect } from "react";
import "./HeroSlider.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const HeroSlider = () => {
  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
      heading: "Powering a Sustainable Future",
      description: "Innovative energy solutions for tomorrow’s world",
    },
    {
      image:
        "https://images.unsplash.com/photo-1581091012184-7c54abcb39d3",
      heading: "Engineering Excellence",
      description: "Delivering quality infrastructure with precision",
    },
    {
      image:
        "https://images.unsplash.com/photo-1489515217757-5fd1be406fef",
      heading: "Trusted Industry Partner",
      description: "Building reliable solutions across sectors",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  const progressWidth = ((currentIndex + 1) / slides.length) * 100;

  return (
    <div className="hero-container">
      <div
        className="hero-slider"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div className="hero-slide" key={index}>
            <img src={slide.image} className="hero-image" alt="hero" />
            <div className="hero-overlay"></div>

            <div className="hero-text-overlay">
              <div className="hero-range-bar">
                <div
                  className="hero-range-fill"
                  style={{ width: `${progressWidth}%` }}
                />
              </div>

              <p className="hero-text-line hero-text-1">
                {slide.heading}
              </p>
              <p className="hero-text-line hero-text-2">
                {slide.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="hero-nav-buttons">
        <button className="hero-nav-btn" onClick={handlePrev}>
          <FaChevronLeft />
        </button>
        <button className="hero-nav-btn" onClick={handleNext}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default HeroSlider;
