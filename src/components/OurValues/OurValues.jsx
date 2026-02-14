import React from "react";
import { FiMonitor, FiGrid, FiGlobe, FiActivity } from "react-icons/fi";
import "./OurValues.css";

const OurValues = () => {
  return (
    <section className="values-section">
      <div className="values-wrapper">

        <h2 className="values-main-title">
          The impact extends beyond migration
        </h2>

        <div className="values-grid">

          <div className="value-card">
            <FiMonitor className="value-icon" />
            <h3>Build Hybrid Applications</h3>
            <p>
              That leverage legacy and target systems simultaneously during migration
            </p>
          </div>

          <div className="value-card">
            <FiGrid className="value-icon" />
            <h3>Enable Business Continuity</h3>
            <p>
              With real-time operations across old and new environments
            </p>
          </div>

          <div className="value-card">
            <FiGlobe className="value-icon" />
            <h3>Capture Immediate Value</h3>
            <p>
              Before legacy decommissioning completes
            </p>
          </div>

          <div className="value-card">
            <FiActivity className="value-icon" />
            <h3>Gain Operational Intelligence</h3>
            <p>
              With real-time business metrics, AI-driven recommendations, and impact modeling before execution
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurValues;
