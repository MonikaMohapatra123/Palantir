import React from "react";
import "./PartnerCards.css";

const PartnerCards = ({ partnerData }) => {
  if (!partnerData) return null;

  return (
    <section className="partner-section">
      <h2 className="partner-heading">
        {partnerData.heading.line1}
      </h2>

      <div className="partner-scroll">
        <div className="partner-track">
          {[...partnerData.cards, ...partnerData.cards].map((item, index) => (
            <div className="partner-card" key={index}>
              
              {/* NAME */}
              <h4 className="card-title">{item.name}</h4>

              {/* BODY */}
              <div className="card-body">
                <p className="card-description">{item.description}</p>
                <p className="card-designation">{item.designation}</p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerCards;
