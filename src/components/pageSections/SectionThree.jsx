import React from "react";
import "./PageSections.css";

const SectionThree = ({ data }) => {
  if (!data) return null;

  return (
    <section className="section section-three">
      <h2 className="section-title">{data.heading}</h2>

      <div className="list-grid">
        {data.items.map((item, i) => (
          <div className="list-item" key={i}>
            <span className="list-index">{i + 1}</span>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionThree;
