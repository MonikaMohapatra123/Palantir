import React from "react";
import "./ServiceHero.css";

const ServiceHero = () => {
  return (
    <section className="service-hero">
      <div className="service-hero-inner">
        {/* Left */}
        <h1 className="service-title">Services</h1>

        {/* Right */}
        <p className="service-description">
         We deliver end-to-end digital services that help businesses build, scale, and succeed in a rapidly evolving digital world.
        </p>
      </div>
    </section>
  );
};

export default ServiceHero;
