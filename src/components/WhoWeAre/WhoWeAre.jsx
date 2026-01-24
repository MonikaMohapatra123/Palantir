import React from "react";
import "./WhoWeAre.css";

/* Exact Palantir-style thin outline icon */
const PalantirIcon = () => (
  <svg
    className="palantir-icon"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="3"
      y="4"
      width="18"
      height="14"
      stroke="black"
      strokeWidth="1.5"
    />
    <line
      x1="8"
      y1="20"
      x2="16"
      y2="20"
      stroke="black"
      strokeWidth="1.5"
    />
  </svg>
);

const data = [
  {
    title: "Free Thinkers",
    desc: "We attract people who are intellectually diverse and contrarian at heart. Palantirians have strong convictions and open minds. Whether you have PhD or GED, deep thinking matters most.",
  },
  {
    title: "Catalysts",
    desc: "Palantirians take initiative. There's no top-down instruction holding you back. This creates unusual freedom: when you see a solution, you own it.",
  },
  {
    title: "Independents",
    desc: "You are not evaluated by distant executives — you are judged by outcomes. There's no oversight from anyone who isn't directly in the problem with you.",
  },
  {
    title: "Fast-movers",
    desc: "Palantirians make decisions quickly. We optimize for impact not consensus. There is no bureaucratic distance between identifying a problem and fixing it.",
  },
];

const WhoWeAre = () => {
  return (
    <section className="who-container">
      <h1 className="who-title">Who we are.</h1>

      <div className="who-grid">
        {data.map((item, index) => (
          <div className="who-card" key={index}>
            <div className="who-icon">
              <PalantirIcon />
            </div>

            <h2 className="who-heading">{item.title}</h2>
            <p className="who-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhoWeAre;
