import { useEffect, useRef } from "react";
import "./GothamSection.css";

const GothamSection = ({ page }) => {
  const titleRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const wrapper = wrapperRef.current;
      const title = titleRef.current;
      if (!wrapper || !title) return;

      const start = wrapper.offsetTop;
      const end = start + wrapper.offsetHeight - window.innerHeight;
      const scrollY = window.scrollY;

      const progress = Math.min(
        Math.max((scrollY - start) / (end - start), 0),
        1
      );

      // Move UP: from slightly above center (-5%) to higher (-40%)
      const startY = -5;
      const endY = -40;
      const translateY = startY + (endY - startY) * progress;

      title.style.transform = `translate(-50%, ${translateY}%)`;
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const title =
    page?.title ||
    page?.pageTitle ||
    page?.name ||
    page?.section1?.heading ||
    "Gotham";

  return (
    <section className="gotham-wrapper" ref={wrapperRef}>
      <div className="gotham-stage">
        <video
          className="gotham-video"
          src="/video2.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="gotham-overlay" />

        {/* 🔹 HUD top texts (exact style layout) */}
        <div className="gotham-hud">
          <div className="hud-left">YOU ARE NOW ENTERING</div>
          <div className="hud-center">TIME: 3 MS · SCROLL TO EXPLORE</div>
          <div className="hud-right">
            THE OPERATING SYSTEM FOR GLOBAL DECISION MAKING
          </div>
        </div>

        {/* 🔹 Big title */}
        <h1 className="gotham-title" ref={titleRef}>
          {title}
        </h1>
      </div>
    </section>
  );
};

export default GothamSection;
