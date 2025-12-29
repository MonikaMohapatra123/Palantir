
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import SectionOne from "../../components/pageSections/SectionOne";
import SectionTwo from "../../components/pageSections/SectionTwo";
import SectionThree from "../../components/pageSections/SectionThree";

const PageDetails = () => {
  const { pageType, category } = useParams();
  const [page, setPage] = useState(null);

  const normalize = (text) =>
    text.toLowerCase().replace(/\s+/g, "-");

  useEffect(() => {
    axios
      .get("https://palantir-backend-phi.vercel.app/api/pages")
      .then((res) => {
        const found = res.data.find(
          (p) =>
            normalize(p.pageType) === normalize(pageType) &&
            normalize(p.category) === normalize(category)
        );
        setPage(found);
      });
  }, [pageType, category]);

  if (!page) return <h2 style={{ padding: 100 }}>Loading...</h2>;

  return (
    <div style={{ marginTop: "80px" }}>
      <SectionOne data={page.section1} />
      <SectionTwo data={page.section2} />
      <SectionThree data={page.section3} />
    </div>
  );
};

export default PageDetails;

