import React from "react";
import "./MobileNavBar.css";

const MobileNavBar = ({ data, close }) => {
  if (!data) return null;

  return (
    <div className="mobile-overlay">
      <div className="mobile-nav">

        {/* Header – Close Button */}
        <div className="mobile-header">
          <button className="close-btn" onClick={close}>✕</button>
        </div>

        {/* Menu List */}
        <ul className="mobile-menu">
          {data.menu.map((item, index) => (
            <li key={index}>
              <a href={item.link}>
                <span>{item.name}</span>
                <span className="arrow">›</span>
              </a>
            </li>
          ))}

          {/* Contact */}
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

