import React from "react";
import "./TeamSection.css";

const TeamSection = () => {
  return (
    <section className="team-section">
      <div className="team-wrapper">
        <h2 className="team-title">Our Team</h2>

        <div className="team-container">
          
          {/* Left Content */}
          <div className="team-left">
            <span className="team-subtitle">OUR PEOPLE</span>
            <h3 className="team-heading">
              Great tech starts with great people
            </h3>
            <p className="team-text">
              Behind every project, there's a team of passionate professionals
              who care about what they do. Learn more about the faces behind
              KeenEthics and the values that drive us.
            </p>

            <button className="team-btn">
              See Who We Are
            </button>
          </div>

          {/* Right Image */}
          <div className="team-right">
            <img
              src="/girl1.jpg"
              alt="Our Team"
              className="team-image"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default TeamSection;