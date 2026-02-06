import React from "react";
import ServiceHero from "../../components/ServiceHero/ServiceHero";
import ServiceSplitPanel from "../../components/ServiceSplitPanel/ServiceSplitPanel";

const ServicePage = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "Design and build fast, secure, and scalable websites tailored to your business goals.",
    },
    {
      title: "Mobile App Development",
      description:
        "Create high-performance mobile applications with seamless experiences.",
    },
    {
      title: "Digital Marketing",
      description:
        "Grow your brand with data-driven marketing strategies.",
    },
  ];

  return (
    <div>
      <ServiceHero
        title="Services"
        description="We deliver end-to-end digital services that help businesses build, scale, and succeed."
      />

      <ServiceSplitPanel items={services} />
    </div>
  );
};

export default ServicePage;
