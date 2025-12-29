import React from "react";
import "./PageSections.css";

const SectionThree = ({ data }) => {
  if (!data) return null;

  return (
    <section className="section section-three">
      <h2>{data.heading}</h2>

      <div className="list-grid">
        {data.items.map((item, i) => (
          <div className="list-item" key={i}>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionThree;
