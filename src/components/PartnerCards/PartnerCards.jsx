import React from "react";
import "./PartnerCards.css";

const PartnerCards = ({ partnerData }) => {
  if (!partnerData || !partnerData.cards) return null;

  const duplicatedCards = [
    ...partnerData.cards,
    ...partnerData.cards,
    ...partnerData.cards,
  ];

  return (
    <section className="partner-section">
      <h2 className="partner-heading">
        {partnerData.heading?.line1}
      </h2>

      <div className="partner-scroll">
        <div className="partner-track">
          {duplicatedCards.map((item, index) => (
            <div className="partner-card" key={`${item.name}-${index}`}>
              <h4 className="card-title">{item.name}</h4>

              <div className="card-content">
                <p className="card-description">
                  {item.description}
                </p>

                <p className="card-designation">
                  {item.designation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerCards;
