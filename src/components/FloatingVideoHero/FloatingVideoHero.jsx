import React, { useEffect, useRef } from "react";
import "./FloatingVideoHero.css";

const FloatingVideoHero = () => {
  const sectionRef = useRef(null);
  const videoBoxRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const section = sectionRef.current;
      const videoBox = videoBoxRef.current;
      if (!section || !videoBox) return;

      const rect = section.getBoundingClientRect();
      const windowH = window.innerHeight;

      // Start animation when section enters viewport
      const start = windowH * 0.6;
      const end = windowH * 0.1;

      const progress = Math.min(
        Math.max((start - rect.top) / (start - end), 0),
        1
      );

      // Video grows from small to big
      const minScale = 0.6;
      const maxScale = 1;
      const scale = minScale + progress * (maxScale - minScale);

      videoBox.style.transform = `scale(${scale})`;
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <section className="fvh-section" ref={sectionRef}>
        {/* TEXT FIRST */}
        <div className="fvh-text">
          <h1>Your software is the weapons system</h1>
          <p>Operating System for Global Decision-Making</p>
        </div>

        {/* VIDEO BELOW TEXT */}
        <div className="fvh-video-box" ref={videoBoxRef}>
          <video src="/video2.mp4" autoPlay muted loop playsInline />
        </div>
      </section>

    </>
  );
};

export default FloatingVideoHero;
