import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const MegaMenu = ({ menu, dropdownData, close }) => {
  return (
    <div className="mega-overlay">
      <div className="mega-container">

        {/* CLOSE ICON */}
        <button className="mega-close-btn" onClick={close}>
          ✕
        </button>

        {/* LEFT COLUMN */}
        <div className="mega-col">
          <h5 className="mega-title">NAVIGATION</h5>

          {menu.map((item) => (
            <div key={item.pageType} className="mega-item-block">
              <div className="mega-item">{item.name}</div>

              {/* ALWAYS OPEN DROPDOWN */}
              <div className="mega-sub">
                {(dropdownData[item.pageType] || []).map((cat, i) => (
                  <Link
                    key={i}
                    to={`/${item.pageType}/${encodeURIComponent(cat)}`}
                    className="mega-sub-item"
                    onClick={close}
                  >
                    <span className="arrow-icon">↳</span>
                    {cat}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* MIDDLE COLUMN */}
        <div className="mega-col center">
          <h5 className="mega-title">LATEST NEWS</h5>

          <div className="news-card">
            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" alt="" />
            <div>
              <small>CNBC · FEB 18, 2025</small>
              <p>Alex Karp talks AI dominance</p>
              <span>→ Watch here</span>
            </div>
          </div>

          <div className="news-card">
            <img src="https://images.unsplash.com/photo-1494526585095-c41746248156" alt="" />
            <div>
              <small>MARCH 12, 2025</small>
              <p>TITAN trucks deployed by U.S. Army</p>
              <span>→ Read more</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="mega-col">
          <h5 className="mega-title">OFFERINGS</h5>

          <div className="mega-item">Services</div>

          <div className="mega-sub">
            {["Defense", "Healthcare", "Energy", "Manufacturing"].map(
              (item, i) => (
                <Link
                  key={i}
                  to={`/services/${item}`}
                  className="mega-sub-item"
                  onClick={close}
                >
                  <span className="arrow-icon">↳</span>
                  {item}
                </Link>
              )
            )}
          </div>

          <p className="offer-desc">
            Our platforms are used throughout the public, private, and non-profit
            sectors to solve the hardest problems.
          </p>

          <Link className="learn-more" to="/about" onClick={close}>
            → Learn more about AIP
          </Link>
        </div>

      </div>
    </div>
  );
};

export default MegaMenu;
