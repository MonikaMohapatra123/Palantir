import React from "react";
import { Link } from "react-router-dom";
import "./MegaMenu.css";

const MegaMenu = ({ menu, dropdownData, close }) => {
  const formatForURL = (text) =>
    text.replace(/\s+/g, "-").toLowerCase();

  
  return (
   <div className="mega-overlay">
  <div className="mega-container">

    {/* CLOSE BUTTON */}
    <button className="mega-close-btn" onClick={close}>✕</button>

    {/* ===== MAIN ROW ===== */}
    <div className="mega-main">

      {/* ================= LEFT COLUMN ================= */}
      <div className="mega-col mega-left mega-anim mega-delay-1">
        <h5 className="mega-title">NAVIGATION</h5>

        {menu.map((item, index) => (
          <div key={index} className="mega-item-block">
            {!item.dropdown && item.link && (
              <Link to={item.link} className="mega-item mega-link" onClick={close}>
                {item.name}
              </Link>
            )}

            {item.dropdown && (
              <>
                <Link
                  to={item.link}
                  className="mega-item mega-link mega-main-link"
                  onClick={close}
                >
                  {item.name}
                </Link>

                <div className="mega-sub">
                  {(dropdownData[item.pageType] || []).map((cat, i) => (
                    <Link
                      key={i}
                      to={`${item.link}/${formatForURL(cat)}`}
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

      {/* ================= RIGHT AREA (CENTER + RIGHT) ================= */}
      <div className="mega-right-area">

        {/* ===== TOP ROW: CENTER + RIGHT ===== */}
        <div className="mega-top-row">

          {/* ================= CENTER COLUMN (NEWS) ================= */}
          <div className="mega-col mega-center mega-anim mega-delay-2">
            <div className="news-header">
              <h5 className="mega-title">LATEST NEWS</h5>
              <Link to="/newsroom" className="newsroom-link" onClick={close}>
                NEWSROOM ↗
              </Link>
            </div>

            <div className="latest-news-grid">
              <div className="latest-news-card">
                <span className="news-meta">CNBC, FEBRUARY 19, 2025</span>
                <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e" alt="news" />
                 <p>
                Palantir's AI-fueled TITAN trucks are rolling into
                <br />
                <strong> U.S. Army hands</strong>
                </p>
                <p>
                  Palantir CEO Alex Karp spoke about his new book and the role of
                  software in national power.
                </p>
              </div>

              <div className="latest-news-card">
                <span className="news-meta">AXIOS, MARCH 12, 2025</span>
                <img src="https://images.unsplash.com/photo-1600267185393-e158a98703de" alt="news" />
                <p>
                  Palantir's AI-fueled TITAN trucks enter
                  <strong> U.S. Army hands</strong>
                </p>
                <p>
                  Tactical Intelligence Targeting Access Nodes promise to
                  streamline battlefield intelligence operations.
                </p>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN (OFFERINGS) ================= */}
          <div className="mega-col mega-offer mega-anim mega-delay-3">
            <h5 className="mega-title">OFFERINGS</h5>


            <h3 className="offer-desc">
              Our platforms are used throughout the public, private, and
              non-profit sectors to solve the hardest problems.
            </h3>

            <Link className="learn-more" to="/about" onClick={close}>
              ↳ Learn more about AIP
            </Link>
          </div>

        </div>

        {/* ===== FOOTER UNDER CENTER + RIGHT ===== */}
        <div className="mega-footer mega-anim mega-delay-3">
          <div className="mega-footer-left">
            <span className="footer-label">LATEST IMPACT</span>

            <Link to="/impact-studies" onClick={close} className="impact-card">
              <img src="./girl1.jpg" alt="Impact" />
              <h4>Transforming care throughout the care continuum</h4>
            </Link>
          </div>

          <div className="mega-footer-right">
            <div className="footer-col">
              <h6>About Palantir</h6>
              <Link to="/about" onClick={close}>About Palantir</Link>
              <Link to="/blog" onClick={close}>Blog</Link>
              <Link to="/investor-relations" onClick={close}>Investor Relations</Link>
              <Link to="/newsroom" onClick={close}>Newsroom</Link>
            </div>

            <div className="footer-col">
              <h6>Legal</h6>
              <Link to="/privacy-policy" onClick={close}>Privacy & Civil Liberties</Link>
              <Link to="/privacy-policy" onClick={close}>Privacy Policy</Link>
              <Link to="/terms" onClick={close}>Terms</Link>
            </div>

            <div className="footer-col">
              <h6>Connect</h6>
              <Link to="/careers" onClick={close}>Careers</Link>
              <Link to="/contact" onClick={close}>Contact</Link>
              <Link to="/support" onClick={close}>Support</Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>
  );
};

export default MegaMenu;
