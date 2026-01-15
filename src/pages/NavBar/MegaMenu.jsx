import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const MegaMenu = ({ menu, dropdownData, close }) => {
  // Helper function to convert names to URL-friendly strings
  const formatForURL = (text) => text.replace(/\s+/g, "-").toLowerCase();

  return (
    <div className="mega-overlay">
      <div className="mega-container">

        {/* CLOSE BUTTON */}
        <button className="mega-close-btn" onClick={close}>
          ✕
        </button>

        {/* ================= LEFT COLUMN ================= */}
        <div className="mega-col mega-anim mega-delay-1">
          <h5 className="mega-title">NAVIGATION</h5>

          {menu.map((item, index) => (
            <div key={index} className="mega-item-block">

              {/* ---------- SIMPLE LINK (About, Blog, Career) ---------- */}
              {!item.dropdown && item.link && (
                <Link
                  to={`/${formatForURL(item.link)}`}
                  className="mega-item mega-link"
                  onClick={close}
                >
                  {item.name}
                </Link>
              )}

              {/* ---------- DROPDOWN MENU (Projects, Services...) ---------- */}
              {item.dropdown && (
                <>
                  <div className="mega-item">{item.name}</div>

                  <div className="mega-sub">
                    {(dropdownData[item.pageType] || []).map((cat, i) => (
                      <Link
                        key={i}
                        to={`/${item.pageType}/${formatForURL(cat)}`}
                        className="mega-sub-item"
                        onClick={close}
                      >
                        <span className="arrow-icon">↳</span>
                        {cat}
                      </Link>
                    ))}
                  </div>
                </>
              )}

            </div>
          ))}
        </div>

        {/* ================= MIDDLE COLUMN ================= */}
        <div className="mega-col center mega-anim mega-delay-2">

          <div className="news-header">
            <h5 className="mega-title">LATEST NEWS</h5>
            <Link to="/newsroom" className="newsroom-link" onClick={close}>
              NEWSROOM ↗
            </Link>
          </div>

          <div className="latest-news-grid">

            {/* NEWS 1 */}
            <div className="latest-news-card">
              <span className="news-meta">CNBC, FEBRUARY 19, 2025</span>

              <img
                src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
                alt="news"
              />

              <h3>
                Alex Karp talks US software dominance,
                <strong> The Technological Republic</strong>
              </h3>

              <p>
                Palantir CEO Alex Karp spoke about his new book and the role of
                software in national power.
              </p>
            </div>

            {/* NEWS 2 */}
            <div className="latest-news-card">
              <span className="news-meta">AXIOS, MARCH 12, 2025</span>

              <img
                src="https://images.unsplash.com/photo-1600267185393-e158a98703de"
                alt="news"
              />

              <h3>
                Palantir's AI-fueled TITAN trucks enter
                <strong> U.S. Army hands</strong>
              </h3>

              <p>
                Tactical Intelligence Targeting Access Nodes promise to
                streamline battlefield intelligence operations.
              </p>
            </div>

          </div>
        </div>

        {/* ================= RIGHT COLUMN ================= */}
        <div className="mega-col mega-anim mega-delay-3">
          <h5 className="mega-title">OFFERINGS</h5>

          <div className="mega-item">Services</div>

          <div className="mega-sub">
            {["Defense", "Healthcare", "Energy", "Manufacturing"].map(
              (item, i) => (
                <Link
                  key={i}
                  to={`/services/${formatForURL(item)}`}
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
            Our platforms are used throughout the public, private, and
            non-profit sectors to solve the hardest problems.
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
