import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import JoinOurTeam from "../../components/JoinOurTeam/JoinOurTeam";
import ThesisSection from "../../components/ThesisSection/ThesisSection";
import ScrollTextStory from "../../components/ScrollTextSection/ScrollTextSection";
import PartnerCards from "../../components/PartnerCards/PartnerCards";
import ButtonGroup from "../../components/ButtonGroup/ButtonGroup";
import data from "../../Json/data.json";

const Home = () => {
  const heroData = data["1"]?.heroSection;
  const thesisData = data["1"]?.thesisSection?.theses;
  const scrollTextData = data["1"]?.scrollTextSection;
  const joinTeamData = data["1"]?.joinOurTeam;
  const partnerData = data["1"]?.partnerSection;
  const buttonGroupData = data["1"]?.buttonGroup;

  return (
    <div>
      <HeroSection heroData={heroData} />
      <ThesisSection thesisData={thesisData} />
      <ScrollTextStory scrollTextData={scrollTextData} />
      <JoinOurTeam joinTeamData={joinTeamData} />
      <PartnerCards partnerData={partnerData} />
      <ButtonGroup buttonGroupData={buttonGroupData} />
    </div>
  );
};

export default Home;
