import React from "react";
import "./ProjectDetails.css";
import FloatingVideoHero from "../../components/FloatingVideoHero/FloatingVideoHero";
import ProjectBanner from "../../components/ProjectBanner/ProjectBanner";
import HoverCard from "../../components/HoverCard/HoverCard";
import KillChainSection from "../../components/KillChainSection/KillChainSection";
import QuoteShowcase from "../../components/QuoteShowcase/QuoteShowcase";
import ReadyHero from "../../components/ReadyHero/ReadyHero";


const ProjectDetails = ({ page }) => {
  return (
    <div className="projectdetails-wrapper">
      <ProjectBanner page={page} />
      <FloatingVideoHero />
      <HoverCard/>
      <KillChainSection/>
      <QuoteShowcase/>
      <ReadyHero/>
      
    </div>
  );
};

export default ProjectDetails;
