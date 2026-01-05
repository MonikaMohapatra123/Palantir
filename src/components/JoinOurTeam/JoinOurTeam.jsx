import React from "react";
import { useNavigate } from "react-router-dom";
import "./JoinOurTeam.css";

const JoinOurTeam = () => {
  const navigate = useNavigate();

  return (
    <section className="join-wrapper">
      {/* Left Image */}
      <div className="join-image">
        <img src="/girl.jpg" alt="Team discussion" />
      </div>

      {/* Right Content Card */}
      <div className="join-card">
        <h2>
          There is so much left to build
        </h2>

        <p>
          Palantirians deliver mission-critical outcomes for the West's most
          important institutions.
        </p>

        <button onClick={() => navigate("/about")}>
          LEARN MORE
        </button>
      </div>
    </section>
  );
};

export default JoinOurTeam;
