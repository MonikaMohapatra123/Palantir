import React from "react";
import "./SmartestPeople.css";

const SmartestPeople = () => {
  return (
    <section className="sp-hero-wrapper">
      {/* Heading */}
      <div className="sp-heading-container">
        <h1 className="sp-line sp-line-1">SMARTEST</h1>

        <div className="sp-line-row">
          <h1 className="sp-line sp-line-2">PEOPLE.</h1>
          <span className="sp-arrow-icon sp-line-3">→</span>
        </div>
      </div>

      {/* Description */}
      <p className="sp-description">
        A moment of reckoning has arrived. Tech culture has fallen into shallow
        consumerism, lacking a greater purpose. Too few in Silicon Valley have
        asked what ought to be built — and why. <strong>We did.</strong> We built
        Palantir to ensure the future of the West, not to tinker at the margins.
        On the factory floor. In the operating room. Across the battlefield. We
        build with consequence.
      </p>
    </section>
  );
};

export default SmartestPeople;
