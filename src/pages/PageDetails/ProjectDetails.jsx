import React from "react";
import "./ProjectDetails.css";
import FloatingVideoHero from "../../components/FloatingVideoHero/FloatingVideoHero";
import ProjectBanner from "../../components/ProjectBanner/ProjectBanner";
import HoverCard from "../../components/HoverCard/HoverCard";


const ProjectDetails = ({ page }) => {
  return (
    <div className="projectdetails-wrapper">
      <ProjectBanner page={page} />
      <FloatingVideoHero />
      <HoverCard/>
      
    </div>
  );
};

export default ProjectDetails;
