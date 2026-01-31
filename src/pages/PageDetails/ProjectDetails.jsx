import React from "react";
import "./ProjectDetails.css";
import FloatingVideoHero from "../../components/FloatingVideoHero/FloatingVideoHero";
import ProjectBanner from "../../components/ProjectBanner/ProjectBanner";

const ProjectDetails = ({ page }) => {
  return (
    <div className="projectdetails-wrapper">
      <ProjectBanner page={page} />
      <FloatingVideoHero />
    </div>
  );
};

export default ProjectDetails;
