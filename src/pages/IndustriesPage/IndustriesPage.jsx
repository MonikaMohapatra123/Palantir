import React from "react";
import ServiceHero from "../../components/ServiceHero/ServiceHero";
import ServiceSplitPanel from "../../components/ServiceSplitPanel/ServiceSplitPanel";

const IndustriesPage = () => {
  const industries = [
    {
      title: "Healthcare",
      description: "Digital solutions for healthcare providers.",
    },
    {
      title: "Finance",
      description: "Secure fintech applications.",
    },
    {
      title: "Education",
      description: "E-learning platforms and portals.",
    },
  ];

  return (
    <div>
      <ServiceHero
        title="Industries"
        description="Industries we serve with specialized solutions."
      />

      <ServiceSplitPanel items={industries} />
    </div>
  );
};

export default IndustriesPage;
