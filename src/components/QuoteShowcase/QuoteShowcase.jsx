import React from "react";
import "./QuoteShowcase.css";

const QuoteShowcase = () => {
  return (
    <section className="quote-showcase-wrap">
      {/* LEFT CARD */}
      <div className="quote-showcase-card">
        <p className="quote-showcase-text">
          “[Palantir] came up with ground breaking technologies that help us make
          better decisions in combat zones. You are giving us advantages right
          now that we need.”
        </p>
      </div>

      {/* RIGHT LABELS */}
      <div className="quote-showcase-labels">
        <span>{"{ REAL PEOPLE"}</span>
        <span>{"REAL RESULTS }"}</span>
      </div>
    </section>
  );
};

export default QuoteShowcase;
