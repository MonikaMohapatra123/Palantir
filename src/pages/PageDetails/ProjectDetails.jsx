import React from "react";
import "./ProjectDetails.css";

const ProjectDetails = ({ page }) => {
  return (
    <div className="projectdetails-wrapper">

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

    </div>
  );
};

export default ProjectDetails;
