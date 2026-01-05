import React, { useEffect, useState } from "react";
import "./NavBar.css";
import MobileNavBar from "./MobileNavBar";
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
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-left">
          <img src={navbar.logo} alt={navbar.company} />
          <span className="company-name">{navbar.company}</span>
        </div>

        <div className="nav-right">
          <a href={navbar.contact.link} className="contact-btn">
            {navbar.contact.text}
          </a>

          <button className="menu-btn" onClick={() => setOpenMenu(true)}>
            ☰
          </button>
        </div>
      </header>

      {openMenu && (
        <MobileNavBar
          menu={navbar.menu}
          dropdownData={dropdownData}
          close={() => setOpenMenu(false)}
        />
      )}
    </>
  );
};

export default NavBar;
