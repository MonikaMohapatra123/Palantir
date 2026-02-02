import React, { useEffect, useRef } from "react";
import "./FloatingVideoHero.css";
import data from "../../Json/data.json";   // adjust path if needed

const FloatingVideoHero = () => {

  // get items from JSON
  const items = data["3"].FloatingVideoSection.items;

  const sectionRef = useRef(null);
  const videoRefs = useRef([]);

  useEffect(() => {

    const section = sectionRef.current;
    if (!section) return;

    // initial animation state for each video
    let states = items.map(() => ({
      width: 30,
      scale: 0.7
    }));

    const lerp = (a, b, t) => a + (b - a) * t;

    const animate = () => {

      const rect = section.getBoundingClientRect();
      const winH = window.innerHeight;

      const start = winH * 0.8;
      const end = winH * 0.1;

      let progress = (start - rect.top) / (start - end);
      progress = Math.min(Math.max(progress, 0), 1);

      const targetWidth = 30 + progress * 70; // 30% → 100%
      const targetScale = 0.7 + progress * 0.3; // 0.7 → 1

      videoRefs.current.forEach((videoBox, index) => {
        if (!videoBox) return;

        states[index].width = lerp(
          states[index].width,
          targetWidth,
          0.03
        );

        states[index].scale = lerp(
          states[index].scale,
          targetScale,
          0.03
        );

        videoBox.style.width = `${states[index].width}%`;
        videoBox.style.transform = `scale(${states[index].scale})`;
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, [items]);

  return (
    <section className="fvh-section" ref={sectionRef}>

      {items.map((item, index) => (
        <div className="fvh-block" key={item.id}>

          {/* TEXT */}
          <div className="fvh-text">
            <h1>{item.title}</h1>
            <p>{item.subtitle}</p>
          </div>

          {/* VIDEO */}
          <div
            className="fvh-video-box"
            ref={(el) => (videoRefs.current[index] = el)}
          >
            <video
              src={item.video}
              autoPlay
              muted
              loop
              playsInline
            />
          </div>

        </div>
      ))}

    </section>
  );
};

export default FloatingVideoHero;
