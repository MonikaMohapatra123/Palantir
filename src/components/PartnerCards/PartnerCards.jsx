import React from "react";
import "./PartnerCards.css";

const PartnerCards = ({ partnerData }) => {
  if (!partnerData) return null;

  return (
    <section className="partner-section">
      <h2 className="partner-heading">
        {partnerData.heading.line1} <br />
        {partnerData.heading.line2}
      </h2>

      <div className="partner-scroll">
        <div className="partner-track">
          {[...partnerData.cards, ...partnerData.cards].map((item, index) => (
            <div className="partner-card" key={index}>
              <h4 className="card-title">{item.name}</h4>

              <div className="card-content">
                {item.mid && <p className="card-text">{item.mid}</p>}
                {item.bottom && <p className="card-text">{item.bottom}</p>}
                {item.extra && <p className="card-text">{item.extra}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerCards;
