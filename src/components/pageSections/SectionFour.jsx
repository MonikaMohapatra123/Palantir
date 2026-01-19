import React from "react";
import "./PageSections.css";

const SectionFour = ({ data }) => {
  if (!data || !Array.isArray(data.items)) return null;

  return (
    <section className="section-four">
      <h2 className="section-four-title">{data.heading}</h2>

      <div className="section-four-list">
        {data.items.map((item, i) => (
          <div className="section-four-item" key={i}>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionFour;
