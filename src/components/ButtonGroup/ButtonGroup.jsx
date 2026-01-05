// src/components/ButtonGroup/ButtonGroup.jsx
import React from "react";
import "./ButtonGroup.css";

const ButtonGroup = () => {
  return (
    <div className="cta-wrapper">
      <button className="cta-button cta-light">
        <span className="cta-text">Request a Demo</span>
        <span className="cta-arrow">→</span>
      </button>

      <button className="cta-button cta-dark">
        <span className="cta-text">Start Building</span>
        <span className="cta-arrow">→</span>
      </button>
    </div>
  );
};

export default ButtonGroup;
