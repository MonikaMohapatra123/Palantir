// src/components/ButtonGroup/ButtonGroup.jsx
import React from "react";
import "./ButtonGroup.css";

const ButtonGroup = () => {
  return (
    <div className="button-group">
      <button className="btn btn-light">
        <span>Request a Demo</span>
        <span className="arrow">→</span>
      </button>

      <button className="btn btn-dark">
        <span>Start Building</span>
        <span className="arrow">→</span>
      </button>
    </div>
  );
};

export default ButtonGroup;
