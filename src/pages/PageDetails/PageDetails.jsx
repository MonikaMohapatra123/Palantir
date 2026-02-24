// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// import SectionOne from "../../components/pageSections/SectionOne";
// import SectionTwo from "../../components/pageSections/SectionTwo";
// import SectionThree from "../../components/pageSections/SectionThree";
// import AMLInAction from "../../components/AMLInAction/AMLInAction";
// import PalantirForm from "../../components/PalantirForm/PalantirForm";
// import OneApproach from "../../components/OneApproach/OneApproach";

// import ProjectDetails from "./ProjectDetails";
// import IndustriesDetails from "./IndustriesDetails";
// import Loader from "../../components/Loader/Loader";

// const PageDetails = () => {
//   const { pageType, category } = useParams();

//   const [page, setPage] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);

//   const normalize = (text = "") =>
//     text.toLowerCase().replace(/\s+/g, "-");

//   const isServicePage = normalize(pageType) === "services";
//   const isProjectPage = normalize(pageType) === "projects";
//   const isIndustriesPage = normalize(pageType) === "industries";

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         setError(false);

//         const res = await axios.get(
//           "https://palantir-backend-phi.vercel.app/api/pages"
//         );

//         const found = res.data.find(
//           (p) =>
//             normalize(p.pageType) === normalize(pageType) &&
//             normalize(p.category) === normalize(category)
//         );

//         setPage(found || null);
//       } catch (err) {
//         console.error("Error fetching page:", err);
//         setError(true);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [pageType, category]);

//   // ✅ Show Loader while fetching
//   if (loading) {
//     return <Loader />;
//   }

//   // ✅ Show error message
//   if (error) {
//     return (
//       <h2 style={{ padding: "100px", textAlign: "center" }}>
//         Something went wrong. Please try again.
//       </h2>
//     );
//   }

//   // ✅ Show not found
//   if (!page) {
//     return (
//       <h2 style={{ padding: "100px", textAlign: "center" }}>
//         Page Not Found
//       </h2>
//     );
//   }

//   // ✅ Projects Page
//   if (isProjectPage) {
//     return <ProjectDetails page={page} />;
//   }

//   // ✅ Industries Page
//   if (isIndustriesPage) {
//     return <IndustriesDetails page={page} />;
//   }

//   // ✅ Services & Other Pages
//   return (
//     <div
//       className={isServicePage ? "light-theme" : "dark-theme"}
//       style={{ marginTop: "80px" }}
//     >
//       <SectionOne data={page.section1} isService={isServicePage} />

//       {isServicePage && <OneApproach />}
//       {isServicePage && <AMLInAction />}

//       <SectionTwo data={page.section2} isService={isServicePage} />

//       <SectionThree data={page.section3} isService={isServicePage} />

//       {isServicePage && <PalantirForm />}
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
import OneApproach from "../../components/OneApproach/OneApproach";
import Footer from "../Footer/Footer";

import ProjectDetails from "./ProjectDetails";
import IndustriesDetails from "./IndustriesDetails";
import Loader from "../../components/Loader/Loader";

const PageDetails = () => {
  const { pageType, category } = useParams();

  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const normalize = (text = "") =>
    text.toLowerCase().replace(/\s+/g, "-");

  const isServicePage = normalize(pageType) === "services";
  const isProjectPage = normalize(pageType) === "projects";
  const isIndustriesPage = normalize(pageType) === "industries";

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);

        const res = await axios.get(
          "https://palantir-backend-phi.vercel.app/api/pages"
        );

        const found = res.data.find(
          (p) =>
            normalize(p.pageType) === normalize(pageType) &&
            normalize(p.category) === normalize(category)
        );

        setPage(found || null);
      } catch (err) {
        console.error("Error fetching page:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [pageType, category]);

  // ✅ Loader only (NO footer)
  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <h2 style={{ padding: "100px", textAlign: "center" }}>
        Something went wrong. Please try again.
      </h2>
    );
  }

  if (!page) {
    return (
      <h2 style={{ padding: "100px", textAlign: "center" }}>
        Page Not Found
      </h2>
    );
  }

  // Projects
  if (isProjectPage) {
    return (
      <>
        <ProjectDetails page={page} />
        <Footer />
      </>
    );
  }

  // Industries
  if (isIndustriesPage) {
    return (
      <>
        <IndustriesDetails page={page} />
        <Footer />
      </>
    );
  }

  // Services & Other
  return (
    <>
      <div
        className={isServicePage ? "light-theme" : "dark-theme"}
        style={{ marginTop: "80px" }}
      >
        <SectionOne data={page.section1} isService={isServicePage} />

        {isServicePage && <OneApproach />}
        {isServicePage && <AMLInAction />}

        <SectionTwo data={page.section2} isService={isServicePage} />

        <SectionThree data={page.section3} isService={isServicePage} />

        {isServicePage && <PalantirForm />}
      </div>

      <Footer />
    </>
  );
};

export default PageDetails;