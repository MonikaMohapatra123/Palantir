import React from "react";
import "./HoverCard.css";

const HoverCard = () => {
  return (
    <div className="hc-card">
      
      {/* LEFT CONTENT */}
      <div className="hc-content">
        <div>
          <h2 className="hc-title">Explore Defense Solutions</h2>
          <p className="hc-desc">
            Discover the mission-tested Palantir solutions that confront the
            world's most complex Defense challenges.
          </p>
        </div>

        <div className="hc-explore-row">
          <span>{`{ EXPLORE`}</span>
          <span>{`NOW }`}</span>
        </div>

        {/* Arrow */}
        <div className="hc-arrow">
          <span className="hc-arrow-default">→</span>
          <span className="hc-arrow-hover">↗</span>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="hc-image">
        <img src="/girl.jpg" alt="Defense" />
      </div>

    </div>
  );
};

export default HoverCard;
