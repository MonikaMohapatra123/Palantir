import React from "react";
import "./Industries.css";

const industriesData = [
  { id: 1, title: "Infrastructure", desc: "Roads, bridges, and urban development projects." },
  { id: 2, title: "Power & Energy", desc: "Thermal, renewable, and transmission solutions." },
  { id: 3, title: "Manufacturing", desc: "Industrial plants and production facilities." },
  { id: 4, title: "Water Treatment", desc: "Water and wastewater management systems." },
  { id: 5, title: "Oil & Gas", desc: "Pipeline and processing infrastructure." },
  { id: 6, title: "Smart Cities", desc: "Technology-driven urban solutions." }
];

const Industries = () => {
  return (
    <section className="industries-section">
      <div className="industries-wrapper">

        {/* LEFT SIDE */}
        <div className="industries-left">
          <h1>
            Our <br /> Industries
          </h1>
          <p>
            We serve multiple industries with innovative and reliable solutions.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="industries-right">
          {industriesData.map((item) => (
            <div className="industry-card" key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <span className="industry-arrow">→</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Industries;
