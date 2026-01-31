import React from "react";
import "./ProjectBanner.css";

const ProjectBanner = ({ page }) => {
  return (
    <section className="projectdetails-banner">
      {/* Background Image */}
      <div className="projectdetails-bg"></div>

      {/* Overlay */}
      <div className="projectdetails-overlay"></div>

      {/* Center Content */}
      <div className="projectdetails-content">
        <h1 className="projectdetails-title">
          {page?.title ||
            page?.pageTitle ||
            page?.name ||
            page?.section1?.heading ||
            "Project Title"}
        </h1>

        <p className="projectdetails-subtitle">
          {page?.section1?.subtitle || ""}
        </p>
      </div>
    </section>
  );
};

export default ProjectBanner;
