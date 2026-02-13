import React, { useEffect, useState } from "react";
import "./NavBar.css";
import MegaMenu from "../NavBar/MegaMenu/MegaMenu";
import GetStartedOverlay from "./GetStartedOverlay";
import SearchOverlay from "./SearchOverlay";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import axios from "axios";
import data from "../../Json/data.json";

const NavBar = () => {
  const navbar = data["0"];

  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [openGetStarted, setOpenGetStarted] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [dropdownData, setDropdownData] = useState({});

  // Scroll effect to detect background change
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fetch dropdown data
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
      })
      .catch((err) => {
        console.log("Error fetching dropdown:", err);
      });
  }, []);

  // Check if current page is homepage
  const isHome = window.location.pathname === "/";

  return (
    <>
      <header
        className={`pal-navbar-wrapper ${
          scrolled ? "pal-navbar-wrapper--scrolled" : ""
        }`}
      >
        <div className="pal-navbar">
          {/* LEFT SECTION */}
          <div className="pal-navbar-left">
            <Link to="/" className="pal-navbar-home-link">
              <img
                src={isHome && navbar.logoWhite ? navbar.logoWhite : navbar.logo}
                alt="logo"
                className="pal-navbar-logo"
              />
              <span
                className={`pal-navbar-company ${
                  isHome ? "white-text" : scrolled ? "white-text" : "black-text"
                }`}
              >
                {navbar.company}
              </span>
            </Link>
          </div>

          {/* RIGHT SECTION */}
          <div className="pal-navbar-right">
            <button
              className="pal-navbar-contact-btn"
              onClick={() => setOpenGetStarted(true)}
            >
              {navbar.contact?.text}
            </button>

            <div className="pal-navbar-icon-group">
              {/* Search Button */}
              <button
                className="pal-navbar-icon-btn"
                onClick={() => setOpenSearch(true)}
              >
                <FiSearch />
              </button>

              {/* Menu Button */}
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

      {/* Mega Menu */}
      {openMenu && (
        <MegaMenu
          menu={navbar.menu}
          dropdownData={dropdownData}
          close={() => setOpenMenu(false)}
        />
      )}

      {/* Get Started Overlay */}
      {openGetStarted && (
        <GetStartedOverlay close={() => setOpenGetStarted(false)} />
      )}

      {/* Search Overlay */}
      {openSearch && <SearchOverlay close={() => setOpenSearch(false)} />}
    </>
  );
};

export default NavBar;
