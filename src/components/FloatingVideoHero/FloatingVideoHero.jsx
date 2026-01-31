import React, { useEffect, useRef } from "react";
import "./FloatingVideoHero.css";

const FloatingVideoHero = () => {
  const sectionRef = useRef(null);
  const videoBoxRef = useRef(null);

  useEffect(() => {
    const videoBox = videoBoxRef.current;
    const section = sectionRef.current;
    if (!videoBox || !section) return;

    // Current state
    let currentWidth = 30;  // start width %
    let currentScale = 0.7; // start scale

    const lerp = (start, end, factor) => start + (end - start) * factor;

    const animate = () => {
      const rect = section.getBoundingClientRect();
      const windowH = window.innerHeight;

      // Start and end of scroll animation
      const start = windowH * 0.8;
      const end = windowH * 0.1;

      // Progress between 0 and 1
      let progress = (start - rect.top) / (start - end);
      progress = Math.min(Math.max(progress, 0), 1);

      // Target width and scale
      const targetWidth = 30 + progress * (100 - 30);  // 30% -> 100%
      const targetScale = 0.7 + progress * (1 - 0.7);  // 0.7 -> 1

      // Smooth interpolation (slow, reversible)
      currentWidth = lerp(currentWidth, targetWidth, 0.02);  // smaller factor = slower
      currentScale = lerp(currentScale, targetScale, 0.02);

      videoBox.style.width = `${currentWidth}%`;
      videoBox.style.transform = `scale(${currentScale})`;

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <section className="fvh-section" ref={sectionRef}>
      <div className="fvh-text">
        <h1>Your software is the weapons system</h1>
        <p>Operating System for Global Decision-Making</p>
      </div>

      <div className="fvh-video-box" ref={videoBoxRef}>
        <video src="/video2.mp4" autoPlay muted loop playsInline />
      </div>
    </section>
  );
};

export default FloatingVideoHero;
