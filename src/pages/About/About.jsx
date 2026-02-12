import React from "react";

// ✅ IMPORT JSON
import data from "../../Json/data.json";
import WhyWeAreHere from "../../components/WhyWeAreHere/WhyWeAreHere";
import VisionSection from "../../components/VisionSection/VisionSection";
import WhatWeDo from "../../components/WhatWeDo/WhatWeDo";
import MissionDriven from "../../components/MissionDriven/MissionDriven";
import PalantirExplained from "../../components/PalantirExplained/PalantirExplained";

const About = () => {
  // ✅ Safe access
  const Data = data?.["2"];

  // ✅ Prevent runtime crash
  if (!Data) {
    console.error("About page data (id: 2) not found in data.json");
    return null; // or <div>Loading...</div>
  }

  return (
    <div>
      <WhyWeAreHere/>
      <VisionSection/>
      <WhatWeDo/>
      <MissionDriven/>
       <PalantirExplained/>
    </div>
  );
};

export default About;
