import React from "react";
import "./OurMission.css";

const missionData = [
  {
    category: "IN FOR DEFENSE",
    title: "Aim for Defense Mission Making",
    image: "./p-1.jpg",
  },
  {
    category: "DISASTER RESPONSE",
    title: "Palantir for Ishikawa Prefecture Earthquake",
    image: "./p-2.jpg",
  },
  {
    category: "FLOOD RECOVERY",
    title: "Supporting Disaster Recovery in Texas",
    image: "./p-3.jpg",
  },
  {
    category: "ALEX KARP SPEECH",
    title: "CEO Alex Karp receives the Herman Kahn Award",
    image: "./pic-1.jpg",
  },
  {
    category: "PRODUCTION EFFICIENCY",
    title: "L3Harris at AIPCon 6",
    image: "./pic-2.jpg",
  },
  {
    category: "UATX INTERVIEW",
    title: "Alex Karp speaks with students at University of Austin",
    image: "./pic-4.jpg",
  },
  {
    category: "MEDICAL",
    title: "Defending Maine’s Medical Safety Net",
    image: "./pic-5.jpg",
  },
];

const OurMission = () => {
  return (
    <section className="mission-section">
      <h2 className="mission-title">Our Mission</h2>

      <div className="mission-slider">
        <div className="mission-track">
          {[...missionData, ...missionData].map((item, index) => (
            <div className="mission-card" key={index}>
              <p className="mission-category">{item.category}</p>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <span className="watch-link">↳ Watch Now</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurMission;
