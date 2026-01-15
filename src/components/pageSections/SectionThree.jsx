import React from "react";
import "./PageSections.css";

const SectionThree = ({ data }) => {
  if (!data) return null;

  return (
    <section className="section-three">
      <h2 className="section-three-title">{data.heading}</h2>

      <div className="section-three-list">
        {data.items.map((item, i) => (
          <div className="section-three-item" key={i}>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionThree;
