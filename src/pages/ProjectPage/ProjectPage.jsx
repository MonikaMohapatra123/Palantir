import React from "react";
import ServiceHero from "../../components/ServiceHero/ServiceHero";
import ServiceSplitPanel from "../../components/ServiceSplitPanel/ServiceSplitPanel";

const ProjectsPage = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Complete online shopping solution with secure payments and order tracking.",
    },
    {
      title: "Corporate Website",
      description: "Professional business website with modern UI and responsive design.",
    },
    {
      title: "CRM System",
      description: "Customer management platform to handle leads, sales, and communication.",
    },
    {
      title: "HR Management System",
      description: "Web application to manage employees, attendance, payroll, and leave.",
    },
    {
      title: "Learning Management System (LMS)",
      description: "Online platform for courses, videos, quizzes, and certifications.",
    },
    {
      title: "Inventory Management System",
      description: "Track stock levels, suppliers, and product movement in real-time.",
    },
    {
      title: "Hospital Management System",
      description: "Manage patients, appointments, doctors, and medical records.",
    },
    {
      title: "Job Portal",
      description: "Platform for job seekers and employers to connect easily.",
    },
    {
      title: "Real Estate Website",
      description: "Property listing platform with filters and inquiry forms.",
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio to showcase skills, projects, and experience.",
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
