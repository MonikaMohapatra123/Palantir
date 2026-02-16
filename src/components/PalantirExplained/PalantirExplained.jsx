import React from "react";
import { Link } from "react-router-dom";
import "./PalantirExplained.css";
import data from "../../Json/data.json";

const PalantirExplained = () => {
  const items = data.palantirExplained.items;

  return (
    <section className="palantir-section">
      {items.map((item) => (
        
        <Link 
          to="/case-studies" 
          key={item.id} 
          className="palantir-card-link"
        >
          <div className="palantir-card">

            {/* LEFT IMAGE */}
            <div className="palantir-image">
              <img src={item.image} alt={item.title} />
            </div>

            {/* RIGHT CONTENT */}
            <div className="palantir-content">
              <h2 className="palantir-title">{item.title}</h2>

              <p className="palantir-description">
                {item.description}
              </p>

              <div className="palantir-button">
                <span>{item.buttonText}</span>
                <span className="arrow">→</span>
              </div>
            </div>

          </div>
        </Link>

      ))}
    </section>
  );
};

export default PalantirExplained;
