import React from "react";
import { Link } from "react-router-dom"; // Import Link
import "./InsightIndex.css";

const links = [
  "Engineering & Technology",
  "Company",
  "Life at Palantir",
  "Privacy & Civil Liberties",
  "Palantir Global",
];

const InsightIndex = () => {
  return (
    <section className="palantir-layout">
      {/* LEFT */}
      <div className="left-section">
        <h1>Palantir Blog</h1>
        <p>
          Palantir is a software company that builds the world’s leading platforms
          for data-driven operations and decision-making. We develop long-term
          partnerships with organizations, working together to help them realize
          the value in their data and transform how they operate.
        </p>
      </div>

      {/* RIGHT */}
      <div className="right-section">
        {links.map((item, i) => (
          <Link key={i} to="/about" className="row-link">
            <span>{item}</span>
            <span className="arrow">→</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default InsightIndex;
