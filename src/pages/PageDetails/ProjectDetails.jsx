import React from "react";
import "./ProjectDetails.css";
import FloatingVideoHero from "../../components/FloatingVideoHero/FloatingVideoHero";
import ProjectBanner from "../../components/ProjectBanner/ProjectBanner";
import KillChainSection from "../../components/KillChainSection/KillChainSection";
import QuoteShowcase from "../../components/QuoteShowcase/QuoteShowcase";
import ReadyHero from "../../components/ReadyHero/ReadyHero";
import DefenseHoverShowcase from "../../components/DefenseHoverShowcase/DefenseHoverShowcase";


const ProjectDetails = ({ page }) => {
  return (
    <div className="projectdetails-wrapper">
      <ProjectBanner page={page} />
      <FloatingVideoHero />
       <DefenseHoverShowcase/>
      <KillChainSection/>
      <QuoteShowcase/>
      <ReadyHero/>
      
    </div>
  );
};

export default ProjectDetails;
