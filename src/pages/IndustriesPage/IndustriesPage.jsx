import React from "react";
import ServiceHero from "../../components/ServiceHero/ServiceHero";
import ServiceSplitPanel from "../../components/ServiceSplitPanel/ServiceSplitPanel";

const IndustriesPage = () => {
  const industries = [
    {
      title: "Healthcare",
      description: "Digital solutions for hospitals, clinics, and healthcare providers.",
    },
    {
      title: "Finance & Banking",
      description: "Secure fintech applications, payment systems, and banking platforms.",
    },
    {
      title: "Education",
      description: "E-learning platforms, student portals, and virtual classrooms.",
    },
    {
      title: "E-commerce & Retail",
      description: "Online stores, shopping platforms, and inventory systems.",
    },
    {
      title: "Real Estate",
      description: "Property listing platforms and real estate management systems.",
    },
    {
      title: "Manufacturing",
      description: "Production management and automation software solutions.",
    },
    {
      title: "Logistics & Transportation",
      description: "Fleet management, tracking systems, and logistics platforms.",
    },
    {
      title: "Travel & Hospitality",
      description: "Booking systems and hospitality management solutions.",
    },
    {
      title: "Media & Entertainment",
      description: "Streaming platforms and digital content management.",
    },
    {
      title: "Government & Public Sector",
      description: "E-governance platforms and citizen service portals.",
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
