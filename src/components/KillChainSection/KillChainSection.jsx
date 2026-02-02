import React from "react";
import "./KillChainSection.css";
import data from "../../Json/data.json";


const KillChainSection = () => {
  const killChainItems = data["3"].KillChainSection.items;

  return (
    <>
      {killChainItems.map((item) => (
        <section className="kc-wrapper" key={item.id}>
          <div className="kc-container">
            {/* LEFT: STICKY HEADING */}
            <div className="kc-left">
              <span className="kc-index">{item.index}</span>
              <h1 className="kc-title">{item.title}</h1>
            </div>

            {/* RIGHT: CONTENT THEN IMAGE */}
            <div className="kc-right">
              <div className="kc-content">
                {item.content.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}

                <div className="kc-buttons">
                  {item.buttons.map((btn, idx) => (
                    <button
                      key={idx}
                      className={`kc-btn ${btn.type === "primary" ? "primary" : ""}`}
                    >
                      {btn.text}
                    </button>
                  ))}
                </div>
              </div>

              {/* IMAGE BELOW CONTENT */}
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
