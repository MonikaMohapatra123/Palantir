import React, { useState } from "react";
import "./KillChainSection.css";
import data from "../../Json/data.json";

const KillChainSection = () => {
  const killChainItems = data["3"].KillChainSection.items;
  const [activeDetails, setActiveDetails] = useState(null);

  const handleDetailsClick = (id) => {
    setActiveDetails(activeDetails === id ? null : id);
  };

  return (
    <>
      {killChainItems.map((item) => (
        <section className="kc-wrapper" key={item.id}>
          <div className="kc-container">
            {/* LEFT */}
            <div className="kc-left">
              <span className="kc-index">{item.index}</span>
              <h1 className="kc-title">{item.title}</h1>
            </div>

            {/* RIGHT */}
            <div className="kc-right">
              <div className="kc-content">
                {item.content.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}

                <div className="kc-buttons">
                  <button className="kc-btn primary">VIDEO</button>

                  <button
                    className="kc-btn"
                    onClick={() => handleDetailsClick(item.id)}
                  >
                    DETAILS
                  </button>
                </div>

                {/* DETAILS PANEL */}
                {activeDetails === item.id && (
                  <div className="kc-details-card">
                    <h3>Collaborate across the target lifecycle</h3>
                    <p>
                      Palantir Gotham is a modern solution for efficient and
                      responsible target management. Users can centrally manage
                      intelligence gathering and target identification,
                      leveraging a shared and access-controlled common
                      intelligence picture.
                    </p>

                    <hr />

                    <h4>Data-Centric</h4>
                    <p>
                      Integrates and visualizes models and data, regardless of
                      type or volume.
                    </p>
                  </div>
                )}
              </div>

              {/* IMAGE */}
              <div className="kc-media">
                <img src={item.image} alt={item.title} />
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default KillChainSection;
