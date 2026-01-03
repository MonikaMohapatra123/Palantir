import React from "react";
import "./PartnerCards.css";

const partners = [
  {
    name: "CAZ INVESTMENTS",
    mid: "With AIP, we can now process over 100 times more leads with the same amount of resources.",
    bottom:
      "This has reduced our lead processing time by over 90%. This would not have been possible without AIP.",
  },
  {
    name: "PANASONIC ENERGY NORTH AMERICA",
    mid:
      "Ask Atom powered by Palantir AIP serves as a vital training tool for our technicians.",
    bottom:
      "Cutting a 3–6 month learning curve down to just a few weeks.",
  },
  {
    name: "UNITED AIRLINES",
    mid:
      "We deployed Chime late last year and have already saved almost 300 delays.",
    bottom:
      "This represents millions of dollars of cost avoidance.",
  },
  {
    name: "FUJITSU",
    mid:
      "We combined Foundry’s data integration with Fujitsu’s machine learning AI.",
    bottom:
      "Resulting in alert systems, demand forecasting, and inventory optimization.",
  },
];

const PartnerCards = () => {
  return (
    <section className="partner-section">
      <h2 className="partner-heading">
        What our partners say <br /> about us
      </h2>

      <div className="partner-scroll">
        <div className="partner-track">
          {[...partners, ...partners].map((item, index) => (
            <div className="partner-card" key={index}>
              <h4 className="card-title">{item.name}</h4>

              <p className="card-text mid-text">{item.mid}</p>
              <p className="card-text bottom-text">{item.bottom}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerCards;
