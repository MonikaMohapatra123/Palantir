import React from "react";
import "./ServiceSplitPanel.css";

const ServiceSplitPanel = ({ items }) => {
  return (
    <section className="service-split-panel">
      {items.map((item, index) => (
        <div className="service-row" key={index}>
          <div className="service-left">
            <span className="arrow">↳</span>
            <h2>{item.title}</h2>
          </div>

          <div className="service-right">
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ServiceSplitPanel;
