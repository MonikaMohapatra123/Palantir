import React, { useEffect, useRef, useState } from "react";
import "./ReadyHero.css";

const ReadyHero = () => {
  const title = "Are you ready?";
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
      }
    );

    const currentSection = sectionRef.current; // ✅ Fix ESLint warning

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      observer.disconnect(); // ✅ Clean cleanup
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`ready-hero ${isVisible ? "show" : ""}`}
    >
      <div className="ready-hero-inner">

        {/* Animated Title */}
        <h1 className="ready-title">
          {title.split("").map((char, index) => (
            <span
              key={index}
              className={`letter ${isVisible ? "animate" : ""}`}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        {/* Logo */}
        <div className={`ready-logo ${isVisible ? "fade-in" : ""}`}>
          <img src="/logo.png" alt="Logo" />
        </div>

        {/* Subtitle */}
        <p className={`ready-subtitle ${isVisible ? "fade-in" : ""}`}>
          Help revolutionize technology and accelerate software's future.
        </p>

        {/* Button */}
        <button className={`ready-btn ${isVisible ? "fade-in" : ""}`}>
          Join Now
        </button>

      </div>
    </section>
  );
};

export default ReadyHero;
