import React from "react";
import "./MobileNavBar.css";

const MobileNavBar = ({ data, close }) => {
  return (
    <div className="mobile-overlay">
      <div className="mobile-nav">

        {/* Header – ONLY Close Button */}
        <div className="mobile-header">
          <button className="close-btn" onClick={close}>✕</button>
        </div>

        {/* Menu List */}
        <ul className="mobile-menu">
          {data.menu.map((item, index) => (
            <li key={index}>
              <a href={item.link}>
                {item.name} <span>›</span>
              </a>
            </li>
          ))}

          <li className="contact-mobile">
            <a href={data.contact.link}>
              {data.contact.text}
            </a>
          </li>
        </ul>

      </div>
    </div>
  );
};

export default MobileNavBar;
