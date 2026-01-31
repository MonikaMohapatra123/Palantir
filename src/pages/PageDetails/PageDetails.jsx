
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// import SectionOne from "../../components/pageSections/SectionOne";
// import SectionTwo from "../../components/pageSections/SectionTwo";
// import SectionThree from "../../components/pageSections/SectionThree";
// import AMLInAction from "../../components/AMLInAction/AMLInAction";
// import PalantirForm from "../../components/PalantirForm/PalantirForm";

// const PageDetails = () => {
//   const { pageType, category } = useParams();
//   const [page, setPage] = useState(null);

//   // Normalize URL params + backend values
//   const normalize = (text = "") =>
//     text.toLowerCase().replace(/\s+/g, "-");

//   // Detect Service Page
//   const isServicePage =
//     normalize(pageType) === "services" ||
//     normalize(category) === "services";

//   useEffect(() => {
//     axios
//       .get("https://palantir-backend-phi.vercel.app/api/pages")
//       .then((res) => {
//         const found = res.data.find(
//           (p) =>
//             normalize(p.pageType) === normalize(pageType) &&
//             normalize(p.category) === normalize(category)
//         );

//         setPage(found || null);
//       })
//       .catch((err) => {
//         console.error("Page fetch error:", err);
//         setPage(null);
//       });
//   }, [pageType, category]);

//   if (!page) {
//     return (
//       <h2 style={{ padding: "100px", textAlign: "center" }}>
//         Loading...
//       </h2>
//     );
//   }

//   return (
//     <div
//       className={isServicePage ? "light-theme" : "dark-theme"}
//       style={{ marginTop: "80px" }}
//     >
//       <SectionOne data={page.section1} isService={isServicePage} />
//       {/* Render SectionFour only on service pages */}
//       {isServicePage && <AMLInAction />}
//       <SectionTwo data={page.section2} isService={isServicePage} />



//       <SectionThree data={page.section3} isService={isServicePage} />
//       {isServicePage && <PalantirForm/>}

//     </div>
//   );
// };

// export default PageDetails;




import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import SectionOne from "../../components/pageSections/SectionOne";
import SectionTwo from "../../components/pageSections/SectionTwo";
import SectionThree from "../../components/pageSections/SectionThree";
import AMLInAction from "../../components/AMLInAction/AMLInAction";
import PalantirForm from "../../components/PalantirForm/PalantirForm";

import ProjectDetails from "./ProjectDetails";

const PageDetails = () => {
  const { pageType, category } = useParams();
  const [page, setPage] = useState(null);

  const normalize = (text = "") =>
    text.toLowerCase().replace(/\s+/g, "-");

  const isServicePage =
    normalize(pageType) === "services" ||
    normalize(category) === "services";

  const isProjectPage =
    normalize(pageType) === "projects" ||
    normalize(category) === "projects";

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

  // ✅ If project page → show project design
  if (isProjectPage) {
    return <ProjectDetails page={page} />;
  }

  // ✅ Other pages → same old design
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

