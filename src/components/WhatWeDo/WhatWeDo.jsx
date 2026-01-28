import React from "react";
import "./WhatWeDo.css";

const WhatWeDo = () => {
  return (
    <section className="wwd-wrapper">
      <div className="wwd-line"></div>

      <h2 className="wwd-title">What we do</h2>

      <div className="wwd-content">
        <div className="wwd-left">
          <p>
            We make products for human-driven analysis of real-world data
          </p>
        </div>

        <div className="wwd-right">
          <p>
            We’re focused on creating the world’s best user experience for
            working with data, one that empowers people to ask and answer
            complex questions without requiring them to master querying
            languages, statistical modeling, or the command line.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
