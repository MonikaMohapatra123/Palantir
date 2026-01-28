import React from "react";
import { Link } from "react-router-dom";
import "./MissionDriven.css";

const MissionDriven = () => {
  return (
    <section className="md-wrapper">
      <div className="md-line"></div>

      <div className="md-content">
        <div className="md-left">
          <h2>We build our company around mission-driven engineering</h2>
        </div>

        <div className="md-right">
          <h3>We’re engineers, not academics.</h3>

          <p>
            At our offices around the world, we’ve assembled a team that
            combines practical expertise in distributed systems
            infrastructure, big data processing, user experience design,
            and data science. Whatever their role, each Palantirian combines
            an uncompromising engineering mindset with an unwavering focus
            on executing in service of the mission.
          </p>

          <Link to="/people" className="md-link">
            Our People →
          </Link>
        </div>
      </div>

      <div className="md-bottom-line"></div>
    </section>
  );
};

export default MissionDriven;
