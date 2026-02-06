import React from "react";
import "./ServiceHero.css";

const ServiceHero = ({ title, description }) => {
  return (
    <section className="service-hero">
      <div className="service-hero-inner">
        {/* Left */}
        <h1 className="service-title">{title}</h1>

        {/* Right */}
        <p className="service-description">{description}</p>
      </div>
    </section>
  );
};

export default ServiceHero;
