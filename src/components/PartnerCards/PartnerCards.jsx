import React, { useRef } from "react";
import "./PartnerCards.css";

const PartnerCards = ({ partnerData }) => {
  const scrollRef = useRef(null);

  if (!partnerData || !partnerData.cards) return null;

  const duplicatedCards = [
    ...partnerData.cards,
    ...partnerData.cards,
    ...partnerData.cards,
  ];

  const scrollByCard = (direction) => {
    const container = scrollRef.current;
    const card = container.querySelector(".partner-card");

    if (!card) return;

    const cardWidth = card.offsetWidth + 16; // include margin-right
    container.scrollBy({
      left: direction === "next" ? cardWidth : -cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="partner-section">
      <h2 className="partner-heading">
        {partnerData.heading?.line1}
      </h2>

      <div className="partner-scroll" ref={scrollRef}>
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

      {/* Buttons Below */}
      <div className="partner-buttons">
        <button onClick={() => scrollByCard("prev")}>&lt;</button>
        <button onClick={() => scrollByCard("next")}>&gt;</button>
      </div>
    </section>
  );
};

export default PartnerCards;
