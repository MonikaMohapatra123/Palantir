import React from "react";
import ServiceHero from "../../components/ServiceHero/ServiceHero";
import ServiceSplitPanel from "../../components/ServiceSplitPanel/ServiceSplitPanel";

const ProjectsPage = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Complete online shopping solution.",
    },
    {
      title: "Corporate Website",
      description: "Professional business website.",
    },
    {
      title: "CRM System",
      description: "Customer management platform.",
    },
  ];

  return (
    <div>
      <ServiceHero
        title="Projects"
        description="Explore some of the impactful projects we have delivered."
      />

      <ServiceSplitPanel items={projects} />
    </div>
  );
};

export default ProjectsPage;
