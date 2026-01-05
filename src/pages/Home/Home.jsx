
import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
// import AboutCompany from "../../components/AboutCompany/AboutCompany";
import JoinOurTeam from "../../components/JoinOurTeam/JoinOurTeam";
import data from "../../Json/data.json";
// import AllCompanySafetyCard from "../../components/AllCompanySafetyCard/AllCompanySafetyCard";

// import HeroAboutUs from "../../components/HeroAboutUs/HeroAboutUs";
// import PremiumHomeSection from "../../components/PremiumHomeSection/PremiumHomeSection";
import ThesisSection from "../../components/ThesisSection/ThesisSection";
// import ScrollStory from "../../components/ScrollTextSection/ScrollTextSection";
import ScrollTextStory from "../../components/ScrollTextSection/ScrollTextSection";
import PartnerCards from "../../components/PartnerCards/PartnerCards";
import ButtonGroup from "../../components/ButtonGroup/ButtonGroup";






const Home = () => {
  const heroData = data["1"]?.heroSection;
  // const aboutCompanyData = data["1"]?.aboutCompany;
  //   const homeData = data["1"]; // homepage

  return (
    <div>
      <HeroSection heroData={heroData} />
        <ThesisSection/>
        <ScrollTextStory/>
        <JoinOurTeam />
        <PartnerCards/>
        <ButtonGroup/>
        


   {/* <AboutCompany aboutCompanyData={aboutCompanyData} />
      
      <AllCompanySafetyCard data={data["1"].companySafetyCard} />
      
         <HeroAboutUs data={homeData.heroAboutUs} />
         <PremiumHomeSection/> */}
      
      
    
    </div>
  );
};

export default Home;
