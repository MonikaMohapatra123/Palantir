import React from "react";
import ServiceHero from "../../components/ServiceHero/ServiceHero";
import ServiceSplitPanel from "../../components/ServiceSplitPanel/ServiceSplitPanel";

const TechnologyPage = () => {
  const technologies = [
    {
      title: "React.js",
      description: "Frontend library for modern UI.",
    },
    {
      title: "Node.js",
      description: "Backend runtime environment.",
    },
    {
      title: "MongoDB",
      description: "NoSQL database.",
    },
  ];

  return (
    <div>
      <ServiceHero
        title="Technology"
        description="Technologies we use to build scalable products."
      />

      <ServiceSplitPanel items={technologies} />
    </div>
  );
};

export default TechnologyPage;
