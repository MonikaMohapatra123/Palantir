
import React, { useEffect, useState } from "react";
import "./NavBar.css";
import MegaMenu from "./MegaMenu";
import GetStartedOverlay from "./GetStartedOverlay";
import SearchOverlay from "./SearchOverlay";
import { FiSearch } from "react-icons/fi";
import axios from "axios";
import data from "../../Json/data.json";

const NavBar = () => {
  const navbar = data["0"];

  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [openGetStarted, setOpenGetStarted] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
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
      <header className={`pal-navbar-wrapper ${scrolled ? "pal-navbar-wrapper--scrolled" : ""}`}>
        <div className="pal-navbar">
          {/* LEFT */}
          <div className="pal-navbar-left">
            <img src={navbar.logo} alt="" className="pal-navbar-logo" />
            <span className="pal-navbar-company">{navbar.company}</span>
          </div>

          {/* RIGHT */}
          <div className="pal-navbar-right">
            <button
              className="pal-navbar-contact-btn"
              onClick={() => setOpenGetStarted(true)}
            >
              Get Started
            </button>

            <div className="pal-navbar-icon-group">
              <button
                className="pal-navbar-icon-btn"
                onClick={() => setOpenSearch(true)}
              >
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

      {openMenu && (
        <MegaMenu
          menu={navbar.menu}
          dropdownData={dropdownData}
          close={() => setOpenMenu(false)}
        />
      )}

      {openGetStarted && (
        <GetStartedOverlay close={() => setOpenGetStarted(false)} />
      )}

      {openSearch && (
        <SearchOverlay close={() => setOpenSearch(false)} />
      )}
    </>
  );
};

export default NavBar;
