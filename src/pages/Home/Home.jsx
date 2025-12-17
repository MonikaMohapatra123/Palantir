
import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import AboutCompany from "../../components/AboutCompany/AboutCompany";
import JoinOurTeam from "../../components/JoinOurTeam/JoinOurTeam";
import data from "../../Json/data.json";
import AllCompanySafetyCard from "../../components/AllCompanySafetyCard/AllCompanySafetyCard";
import HeroAboutUs from "../../components/HeroAboutUs/HeroAboutUs";

const Home = () => {
  const heroData = data["1"]?.heroSection;
  const aboutCompanyData = data["1"]?.aboutCompany;
    const homeData = data["1"]; // homepage

  return (
    <div>
      <HeroSection heroData={heroData} />
      <AboutCompany aboutCompanyData={aboutCompanyData} />
  
      <AllCompanySafetyCard data={data["1"].companySafetyCard} />
         <HeroAboutUs data={homeData.heroAboutUs} />
      <JoinOurTeam />
    
    </div>
  );
};

export default Home;
