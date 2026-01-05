import React from "react";
import { useNavigate } from "react-router-dom";
import "./ButtonGroup.css";

const ButtonGroup = ({ buttonGroupData }) => {
  const navigate = useNavigate();

  if (!buttonGroupData) return null;

  const handleClick = (button) => {
    if (button.external) {
      window.open(button.link, "_blank");
    } else {
      navigate(button.link);
    }
  };

  return (
    <div className="cta-wrapper">
      {buttonGroupData.buttons.map((btn, index) => (
        <button
          key={index}
          className={`cta-button ${btn.variant}`}
          onClick={() => handleClick(btn)}
        >
          <span className="cta-text">{btn.text}</span>
          <span className="cta-arrow">→</span>
        </button>
      ))}
    </div>
  );
};

export default ButtonGroup;
