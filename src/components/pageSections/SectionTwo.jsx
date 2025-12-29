import React from "react";
import "./PageSections.css";

const SectionTwo = ({ data }) => {
  if (!data) return null;

  return (
    <section className="section section-two">
      <h2>{data.heading}</h2>

      <div className="card-grid">
        {data.items.map((item, i) => (
          <div className="card" key={i}>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionTwo;
