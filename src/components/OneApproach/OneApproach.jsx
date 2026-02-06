import React from "react";
import "./OneApproach.css";

const OneApproach = () => {
  return (
    <section className="oa-section">
      {/* TOP LINE */}
      <div className="oa-line"></div>

      <div className="oa-container">
        {/* LEFT */}
        <div className="oa-left">
          <h2>
            One Approach, Every <br />
            Challenge
          </h2>
        </div>

        {/* RIGHT */}
        <div className="oa-right">
          <p>
            Financial crime is harder than ever for institutions to detect and
            prevent, with digital transformation accelerating sophisticated
            attacks, and new, unregulated digital assets like cryptocurrencies
            heightening risk exposure. Palantir’s software is trusted by banking
            giants, up-and-coming fintechs, and regulators alike, leveraging
            multi-layered security with best-in-class architecture.
          </p>

          <h4>Palantir Solves For:</h4>

          <ul>
            <li>Transaction Monitoring</li>
            <li>Investigations and Financial Intelligence Units</li>
            <li>KYC</li>
            <li>Customer and Transaction Risk Rating</li>
            <li>Sanctions Screening</li>
            <li>Enhanced & Customer Due Diligence</li>
          </ul>
        </div>
      </div>

      {/* BOTTOM LINE */}
      <div className="oa-line"></div>
    </section>
  );
};

export default OneApproach;
