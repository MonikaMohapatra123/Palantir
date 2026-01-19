import React from "react";
import "./AMLInAction.css";

const AMLInAction = () => {
  return (
    <section className="aml">
      <h1 className="aml-heading">AML in Action</h1>

      <div className="aml-grid">
        <div className="aml-card">
          <span className="aml-index">01</span>

          <div className="aml-image-wrap">
            <img src="/pic-1.jpg" alt="AML use case 1" />
          </div>

          <p>
            Foundry for AML has allowed global financial organizations to{" "}
            <strong>lower their costs by 90%</strong> and improve their true
            positive rate by <strong>45X</strong>
          </p>
        </div>

        <div className="aml-card">
          <span className="aml-index">02</span>

          <div className="aml-image-wrap">
            <img src="/pic-2.jpg" alt="AML use case 2" />
          </div>

          <p>
            Our solution provides banks with the flexibility to deliver{" "}
            <strong>70+ use cases on a single platform</strong>
          </p>
        </div>

        <div className="aml-card">
          <span className="aml-index">03</span>

          <div className="aml-image-wrap">
            <img src="/pic-3.jpg" alt="AML use case 3" />
          </div>

          <p>
            Foundry <strong>cuts investigative time in half</strong> while
            improving risk posture and relationships with the regulators
          </p>
        </div>
      </div>
    </section>
  );
};

export default AMLInAction;
