// VisionSection.jsx
import React from "react";
import "./VisionSection.css";

const VisionSection = () => {
  return (
    <section className="vision-section">
      <div className="vision-container">

        <h1 className="vision-title">
          With good data and the right technology, people and institutions
          today can still solve hard problems and change the world for the better.
        </h1>

        <p className="vision-text">
          In 2003, when we looked at the available technology, we saw products
          that were too rigid to handle novel problems, and custom systems that
          took too long to deploy and required too many services to maintain
          and improve.
        </p>

        <p className="vision-text">
          We saw automated approaches that failed against adaptive adversaries,
          and all-or-nothing access controls that forced organizations to make
          unacceptable trade-offs between collaborating and securing sensitive
          data from misuse.
        </p>

        <p className="vision-text">
          We saw a need for a different kind of technology, and we knew it would
          take a different kind of company to build it. That's why we founded Palantir.
        </p>

      </div>
    </section>
  );
};

export default VisionSection;
