import React from "react";
import "./PartnerCards.css";

const PartnerCards = ({ partnerData }) => {
  if (!partnerData) return null;

  return (
    <section className="partner-section">
      <h2 className="partner-heading">
        {partnerData.heading.line1} <br /> {partnerData.heading.line2}
      </h2>

      <div className="partner-scroll">
        <div className="partner-track">
          {[...partnerData.cards, ...partnerData.cards].map((item, index) => (
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
