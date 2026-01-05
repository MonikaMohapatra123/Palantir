import React from "react";
import { useNavigate } from "react-router-dom";
import "./JoinOurTeam.css";

const JoinOurTeam = ({ joinTeamData }) => {
  const navigate = useNavigate();

  if (!joinTeamData) return null;

  return (
    <section className="join-wrapper">
      {/* Left Image */}
      <div className="join-image">
        <img src={joinTeamData.image} alt={joinTeamData.imageAlt} />
      </div>

      {/* Right Content Card */}
      <div className="join-card">
        <h2>{joinTeamData.title}</h2>

        <p>{joinTeamData.description}</p>

        <button onClick={() => navigate(joinTeamData.button.link)}>
          {joinTeamData.button.text}
        </button>
      </div>
    </section>
  );
};

export default JoinOurTeam;
