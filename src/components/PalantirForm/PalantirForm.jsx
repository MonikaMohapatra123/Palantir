import React from "react";
import "./PalantirForm.css";

const PalantirForm = () => {
  return (
    <section id="palantir-form" className="palantir-wrapper">
      <div className="palantir-left">
        <h1>
          Get more out of <br />
          your data <br />
          platforms with <br />
          Palantir Foundry
        </h1>
      </div>

      <div className="palantir-right">
        <form className="palantir-form">
          <label>FIRST NAME *</label>
          <input type="text" />

          <label>LAST NAME *</label>
          <input type="text" />

          <label>BUSINESS EMAIL *</label>
          <input type="email" />

          <label>PHONE NUMBER *</label>
          <input type="tel" />

          <label>JOB TITLE *</label>
          <input type="text" />

          <label>COMPANY / INSTITUTION *</label>
          <input type="text" />

          <label>COUNTRY *</label>
          <select>
            <option>Select...</option>
          </select>

          <label>
            TELL US ABOUT YOUR PROJECT. A BIT OF CONTEXT WILL ALLOW US TO CONNECT
            YOU TO THE RIGHT TEAM FASTER.
          </label>

          <textarea rows="4"></textarea>

          <button type="submit" className="palantir-submit-btn">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default PalantirForm;
