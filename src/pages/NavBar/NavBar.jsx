// import React, { useEffect, useState } from "react";
// import "./NavBar.css";
// import MobileNavBar from "./MobileNavBar";
// import { FiSearch } from "react-icons/fi";
// import axios from "axios";
// import data from "../../Json/data.json";

// const NavBar = () => {
//   const navbar = data["0"];
//   const [scrolled, setScrolled] = useState(false);
//   const [openMenu, setOpenMenu] = useState(false);
//   const [dropdownData, setDropdownData] = useState({});

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 80);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   useEffect(() => {
//     axios
//       .get("https://palantir-backend-phi.vercel.app/api/pages")
//       .then((res) => {
//         const grouped = {};
//         res.data.forEach((item) => {
//           if (!grouped[item.pageType]) grouped[item.pageType] = [];
//           grouped[item.pageType].push(item.category);
//         });
//         setDropdownData(grouped);
//       });
//   }, []);

//   return (
//     <>
//       <header
//         className={`pal-navbar-wrapper ${
//           scrolled ? "pal-navbar-wrapper--scrolled" : ""
//         }`}
//       >
//         <div className="pal-navbar">
//           {/* LEFT */}
//           <div className="pal-navbar-left">
//             <img
//               src={navbar.logo}
//               alt={navbar.company}
//               className="pal-navbar-logo"
//             />
//             <span className="pal-navbar-company">
//               {navbar.company}
//             </span>
//           </div>

//           {/* RIGHT */}
//           <div className="pal-navbar-right">
//             <a
//               href={navbar.contact.link}
//               className="pal-navbar-contact-btn"
//             >
//               {navbar.contact.text}
//             </a>

//             <div className="pal-navbar-icon-group">
//               <button
//                 className="pal-navbar-icon-btn pal-navbar-search-btn"
//                 aria-label="Search"
//               >
//                 <FiSearch />
//               </button>

//               <button
//                 className="pal-navbar-icon-btn pal-navbar-menu-btn"
//                 aria-label="Menu"
//                 onClick={() => setOpenMenu(true)}
//               >
//                 ☰
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>

//       {openMenu && (
//         <MobileNavBar
//           menu={navbar.menu}
//           dropdownData={dropdownData}
//           close={() => setOpenMenu(false)}
//         />
//       )}
//     </>
//   );
// };

// export default NavBar;





import React, { useEffect, useState } from "react";
import "./NavBar.css";
import MegaMenu from "./MegaMenu";
import { FiSearch } from "react-icons/fi";
import axios from "axios";
import data from "../../Json/data.json";

const NavBar = () => {
  const navbar = data["0"];
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [dropdownData, setDropdownData] = useState({});

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    axios
      .get("https://palantir-backend-phi.vercel.app/api/pages")
      .then((res) => {
        const grouped = {};
        res.data.forEach((item) => {
          if (!grouped[item.pageType]) grouped[item.pageType] = [];
          grouped[item.pageType].push(item.category);
        });
        setDropdownData(grouped);
      });
  }, []);

  return (
    <>
      <header
        className={`pal-navbar-wrapper ${
          scrolled ? "pal-navbar-wrapper--scrolled" : ""
        }`}
      >
        <div className="pal-navbar">
          {/* LEFT */}
          <div className="pal-navbar-left">
            <img src={navbar.logo} alt="" className="pal-navbar-logo" />
            <span className="pal-navbar-company">{navbar.company}</span>
          </div>

          {/* RIGHT */}
          <div className="pal-navbar-right">
            <a href={navbar.contact.link} className="pal-navbar-contact-btn">
              {navbar.contact.text}
            </a>

            <div className="pal-navbar-icon-group">
              <button className="pal-navbar-icon-btn">
                <FiSearch />
              </button>

              <button
                className="pal-navbar-icon-btn pal-navbar-menu-btn"
                onClick={() => setOpenMenu(true)}
              >
                ☰
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ✅ FULL WIDTH MEGA MENU */}
      {openMenu && (
        <MegaMenu
          menu={navbar.menu}
          dropdownData={dropdownData}
          close={() => setOpenMenu(false)}
        />
      )}
    </>
  );
};

export default NavBar;

