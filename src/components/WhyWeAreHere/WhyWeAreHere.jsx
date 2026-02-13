import React, { useRef, useState, useEffect } from "react";
import { FiPlay } from "react-icons/fi";
import "./WhyWeAreHere.css";

const WhyWeAreHere = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false); // start as paused

  // Keep track of video play/pause state
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <section className="why-section">
      <h2 className="why-title-centered">Why We’re Here</h2>

      <div className="why-video-container">
        <video
          ref={videoRef}
          className="why-video"
          src="/video4.mp4"
          loop
          muted
          // autoPlay removed so user can click play
        />
        <div className="video-overlay"></div>

        {/* CENTER PLAY BUTTON */}
        {!isPlaying && (
          <div className="video-center-btn" onClick={togglePlay}>
            <FiPlay size={50} color="#fff" />
          </div>
        )}
      </div>
    </section>
  );
};

export default WhyWeAreHere;
