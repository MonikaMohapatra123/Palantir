import React, { useEffect, useState } from "react";
import "./NavBar.css";
import MobileNavBar from "./MobileNavBar";
import axios from "axios";
import data from "../../Json/data.json";

const NavBar = () => {
  const navbar = data["0"];

  const [scrolled, setScrolled] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);
  const [dropdownData, setDropdownData] = useState({});
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Scroll effect
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
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        {/* LEFT */}
        <div className="nav-left">
          <img src={navbar.logo} alt={navbar.company} />
        </div>

        {/* DESKTOP MENU */}
        <nav className="nav-links">
          {navbar.menu.map((item) => (
            <div
              key={item.name}
              className="dropdown"
              onMouseEnter={() =>
                item.dropdown && setActiveDropdown(item.pageType)
              }
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {item.dropdown ? (
                <>
                  <span className="dropdown-title">{item.name}</span>

                  {activeDropdown === item.pageType && (
                    <div className="dropdown-menu">
                      {(dropdownData[item.pageType] || []).map((cat, i) => (
                        <a
                          key={i}
                          href={`/${item.pageType}/${cat
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                        >
                          {cat}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <a href={item.link} className="nav-link">
                  {item.name}
                </a>
              )}
            </div>
          ))}
        </nav>

        {/* RIGHT */}
        <div className="nav-right">
          <a href={navbar.contact.link} className="contact-btn">
            {navbar.contact.text}
          </a>

          <button className="menu-btn" onClick={() => setOpenMobile(true)}>
            ☰
          </button>
        </div>
      </header>

      {/* MOBILE NAV */}
      {openMobile && (
        <MobileNavBar
          menu={navbar.menu}
          dropdownData={dropdownData}
          close={() => setOpenMobile(false)}
        />
      )}
    </>
  );
};

export default NavBar;
