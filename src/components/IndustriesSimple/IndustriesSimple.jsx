import React from "react";
import "./IndustriesSimple.css";

const industries = [
  {
    title: "Infrastructure",
    desc: "Roads, bridges and large-scale development."
  },
  {
    title: "Power & Energy",
    desc: "Thermal, renewable and power plants."
  },
  {
    title: "Manufacturing",
    desc: "Industrial production facilities."
  },
  {
    title: "Water Treatment",
    desc: "Clean water and wastewater systems."
  },
  {
    title: "Oil & Gas",
    desc: "Pipelines and processing plants."
  },
  {
    title: "Smart Cities",
    desc: "Digital and connected urban spaces."
  }
];

const IndustriesSimple = () => {
  return (
    <section className="ind-simple-section">

      <h2 className="ind-simple-heading">Industries</h2>

      <div className="ind-simple-grid">
        {industries.map((item, index) => (
          <div className="ind-simple-card" key={index}>
            <span className="ind-simple-number">
              {String(index + 1).padStart(2, "0")}
            </span>

            <h3 className="ind-simple-title">{item.title}</h3>
            <p className="ind-simple-desc">{item.desc}</p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default IndustriesSimple;
