import React from "react";
import "./HoverCard.css";

const HoverCard = () => {
  return (
    <div className="hover-card">
      {/* LEFT CONTENT */}
      <div className="card-content-hover">
        <div>
          <h2>Explore Defense Solutions</h2>

          <p>
            Discover the mission-tested Palantir solutions that confront the
            world's most complex Defense challenges.
          </p>
        </div>

        <div className="explore-row">
          <span>{`{ EXPLORE`}</span>
          <span>{`NOW }`}</span>
        </div>

        {/* Arrow */}
        <div className="card-arrow">
          <span className="arrow-default">→</span>
          <span className="arrow-hover">↗</span>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="card-image">
        <img src="/girl.jpg" alt="Defense" />
      </div>
    </div>
  );
};

export default HoverCard;
