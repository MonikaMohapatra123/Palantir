import React from "react";
import "./TeamSection.css";

const TeamSection = () => {
  return (
    <section className="team-section">
      <h2 className="team-title">Our Team</h2>

      <div className="team-container">
        {/* Left Content */}
        <div className="team-left">
          <h3>Great tech starts with great people</h3>
          <p>
            Behind every project, there's a team of passionate professionals who
            care about what they do. Learn more about the faces behind KeenEthics
            and the values that drive us.
          </p>

          <button className="team-btn">SEE WHO WE ARE</button>
        </div>

        {/* Right Image */}
        <div className="team-right">
          <img
            src="/girl1.jpg"   // <-- replace with your image path
            alt="Our Team"
          />
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
