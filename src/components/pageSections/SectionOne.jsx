import React from "react";
import "./PageSections.css";

const SectionOne = ({ data }) => {
  if (!data) return null;

  return (
    <section className="section section-one">
      <h1>{data.heading}</h1>
      <p>{data.description}</p>
    </section>
  );
};

export default SectionOne;
