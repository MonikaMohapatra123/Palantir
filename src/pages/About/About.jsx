import React from 'react';
import AllIntroTemplate from '../../components/AllIntroTemplate/AllIntroTemplate';
import AllSectionHome from '../../components/AllSectionHome/AllSectionHome';

// ✅ IMPORT JSON
import data from '../../Json/data.json';

const About = () => {
  const Data = data["2"]; // use correct id

  return (
    <div>
      <AllIntroTemplate
        title="About Us"
        image="./girl1.jpg"
      />

      <AllSectionHome
        reverse={true}
        subtitle={Data.AboutUssubtitle}
        title={Data.AboutUstitle}
        highlight={Data.AboutUshighlight}
        description={Data.AboutUsdescription}
        image={Data.AboutUsimage}
      />

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
