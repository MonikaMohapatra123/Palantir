
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import SectionOne from "../../components/pageSections/SectionOne";
import SectionTwo from "../../components/pageSections/SectionTwo";
import SectionThree from "../../components/pageSections/SectionThree";
import AMLInAction from "../../components/AMLInAction/AMLInAction";
import PalantirForm from "../../components/PalantirForm/PalantirForm";

import ProjectDetails from "./ProjectDetails";
import IndustriesDetails from "./IndustriesDetails";

const PageDetails = () => {
  const { pageType, category } = useParams();
  const [page, setPage] = useState(null);

  const normalize = (text = "") =>
    text.toLowerCase().replace(/\s+/g, "-");

  const isServicePage =
    normalize(pageType) === "services";

  const isProjectPage =
    normalize(pageType) === "projects";

  const isIndustriesPage =
    normalize(pageType) === "industries";

  useEffect(() => {
    axios
      .get("https://palantir-backend-phi.vercel.app/api/pages")
      .then((res) => {
        const found = res.data.find(
          (p) =>
            normalize(p.pageType) === normalize(pageType) &&
            normalize(p.category) === normalize(category)
        );

        setPage(found || null);
      });
  }, [pageType, category]);

  if (!page) {
    return <h2 style={{ padding: "100px" }}>Loading...</h2>;
  }

  // ✅ Projects
  if (isProjectPage) {
    return <ProjectDetails page={page} />;
  }

  // ✅ Industries
  if (isIndustriesPage) {
    return <IndustriesDetails page={page} />;
  }

  // ✅ Services & Other pages
  return (
    <div
      className={isServicePage ? "light-theme" : "dark-theme"}
      style={{ marginTop: "80px" }}
    >
      <SectionOne data={page.section1} isService={isServicePage} />

      {isServicePage && <AMLInAction />}

      <SectionTwo data={page.section2} isService={isServicePage} />

      <SectionThree data={page.section3} isService={isServicePage} />

      {isServicePage && <PalantirForm />}
    </div>
  );
};

export default PageDetails;
