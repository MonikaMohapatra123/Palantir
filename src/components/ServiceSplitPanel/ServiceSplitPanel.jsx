import React from "react";
import "./ServiceSplitPanel.css";

const ServiceSplitPanel = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "Design and build fast, secure, and scalable websites tailored to your business goals.",
    },
    {
      title: "Mobile App Development",
      description:
        "Create high-performance mobile applications that deliver seamless user experiences across devices.",
    },
    {
      title: "Digital Marketing",
      description:
        "Drive brand growth through data-driven digital marketing strategies and targeted campaigns.",
    },
    {
      title: "Search Engine Optimization",
      description:
        "Improve search visibility and organic traffic with result-focused SEO optimization techniques.",
    },
    {
      title: "Dedicated Development",
      description:
        "Access skilled, dedicated developers to accelerate projects with flexibility and full control.",
    },
    {
      title: "Data Analytics",
      description:
        "Transform raw data into actionable insights to support smarter business decisions.",
    },
  ];

  return (
    <section className="service-split-panel">
      {services.map((service, index) => (
        <div className="service-row" key={index}>
          <div className="service-left">
            <span className="arrow">↳</span>
            <h2>{service.title}</h2>
          </div>

          <div className="service-right">
            <p>{service.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ServiceSplitPanel;
