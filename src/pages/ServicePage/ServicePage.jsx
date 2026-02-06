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
    {
      title: "UI/UX Design",
      description:
        "Craft intuitive and engaging user interfaces that enhance user experience.",
    },
    {
      title: "E-Commerce Solutions",
      description:
        "Build powerful online stores with secure payment and smooth checkout.",
    },
    {
      title: "Cloud Services",
      description:
        "Deploy, manage, and scale applications using reliable cloud platforms.",
    },
    {
      title: "SEO Optimization",
      description:
        "Improve your website ranking and visibility on search engines.",
    },
    {
      title: "Maintenance & Support",
      description:
        "Ongoing monitoring, updates, and support to keep your systems running smoothly.",
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
