import React from "react";

import SectionOne from "../../components/pageSections/SectionOne";
import SectionTwo from "../../components/pageSections/SectionTwo";
import SectionThree from "../../components/pageSections/SectionThree";
import PalantirForm from "../../components/PalantirForm/PalantirForm";
import Industries from "../../components/Industries/Industries";
import IndustriesSimple from "../../components/IndustriesSimple/IndustriesSimple";

const IndustriesDetails = ({ page }) => {
  if (!page) return null;

  return (
    <div className="light-theme" style={{ marginTop: "80px" }}>
      <SectionOne data={page.section1} isService={true} />
      <SectionTwo data={page.section2} isService={true} />
       <Industries/>
      <SectionThree data={page.section3} isService={true} />
      <IndustriesSimple/>
      <PalantirForm />
    </div>
  );
};

export default IndustriesDetails;
