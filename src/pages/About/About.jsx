import React from "react";
import AllIntroTemplate from "../../components/AllIntroTemplate/AllIntroTemplate";
import AllSectionHome from "../../components/AllSectionHome/AllSectionHome";

// ✅ IMPORT JSON
import data from "../../Json/data.json";

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
      {/* Intro Section */}
      <AllIntroTemplate
        title="About Us"
        image="./girl1.jpg"
      />

      {/* About Us Section */}
      <AllSectionHome
        reverse={true}
        subtitle={Data.AboutUssubtitle}
        title={Data.AboutUstitle}
        highlight={Data.AboutUshighlight}
        description={Data.AboutUsdescription}
        image={Data.AboutUsimage}
      />

      {/* Highlights Section */}
      <AllSectionHome
        reverse={false}
        subtitle={Data.Highlightssubtitle}
        title={Data.Highlightstitle}
        highlight={Data.Highlightshighlight}
        description={Data.Highlightsdescription}
        image={Data.Highlightsimage}
      />
    </div>
  );
};

export default About;
