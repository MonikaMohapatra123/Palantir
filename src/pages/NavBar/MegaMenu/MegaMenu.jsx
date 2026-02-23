import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./MegaMenu.css";

const MegaMenu = ({ menu, dropdownData, close }) => {

  const formatForURL = (text) =>
    text.replace(/\s+/g, "-").toLowerCase();

  // LOCK BACKGROUND SCROLL
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="mega-overlay">
      <div className="mega-container">

        {/* CLOSE BUTTON */}
        <button className="mega-close-btn" onClick={close}>✕</button>

        <div className="mega-main">

          {/* LEFT COLUMN */}
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

          {/* RIGHT AREA */}
          <div className="mega-right-area">

            <div className="mega-top-row">

              {/* CENTER - LATEST NEWS */}
              <div className="mega-col mega-center mega-anim mega-delay-2">
                <div className="news-header">
                  <h5 className="mega-title">LATEST NEWS</h5>
                  <Link to="/newsroom" className="newsroom-link" onClick={close}>
                    NEWSROOM ↗
                  </Link>
                </div>

                <div className="latest-news-grid">

                  <div className="latest-news-card">
                    <span className="news-meta">AXIOMOS, FEBRUARY 19, 2026</span>
                    <img
                      src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
                      alt="Axiomos AI Solutions"
                    />
                    <p>
                      Axiomos launches next-generation
                      <strong> AI-powered enterprise solutions</strong>
                    </p>
                    <p>
                      The new platform helps organizations automate workflows,
                      enhance data intelligence, and accelerate digital transformation.
                    </p>
                  </div>

                  <div className="latest-news-card">
                    <span className="news-meta">AXIOMOS, MARCH 12, 2026</span>
                    <img
                      src="https://images.unsplash.com/photo-1600267185393-e158a98703de"
                      alt="Axiomos Technology Expansion"
                    />
                    <p>
                      Axiomos expands its global footprint with
                      <strong> strategic technology partnerships</strong>
                    </p>
                    <p>
                      These collaborations strengthen cloud, AI, and enterprise
                      software capabilities across multiple industries.
                    </p>
                  </div>

                </div>
              </div>

              {/* RIGHT OFFERINGS */}
              <div className="mega-col mega-offer mega-anim mega-delay-3">
                <h5 className="mega-title">OFFERINGS</h5>

                <h4 className="offer-desc">
                  Axiomos delivers intelligent digital solutions across industries,
                  enabling businesses to innovate faster, optimize operations,
                  and achieve sustainable growth.
                </h4>

                <Link className="learn-more" to="/about" onClick={close}>
                  ↳ Learn more about Axiomos 
                </Link>
              </div>

            </div>

            {/* FOOTER */}
            <div className="mega-footer mega-anim mega-delay-3">

              {/* LATEST IMPACT */}
              <div className="mega-footer-left">
                <span className="footer-label">LATEST IMPACT</span>

                <Link to="/impact-studies" onClick={close} className="impact-card">
                  <img src="./girl1.jpg" alt="Axiomos Impact" />
                  <h4 className="below">
                    Driving digital transformation across enterprises and startups
                  </h4>
                </Link>
              </div>

              {/* FOOTER LINKS */}
              <div className="mega-footer-right">

                <div className="footer-col">
                  <h6>About Axiomos</h6>
                  <Link to="/about" onClick={close}>About Us</Link>
                  <Link to="/blog" onClick={close}>Blog</Link>
                  <Link to="/careers" onClick={close}>Careers</Link>
                  <Link to="/newsroom" onClick={close}>Newsroom</Link>
                </div>

                <div className="footer-col">
                  <h6>Legal</h6>
                  <Link to="/privacy-policy" onClick={close}>Privacy Policy</Link>
                  <Link to="/terms" onClick={close}>Terms & Conditions</Link>
                  <Link to="/cookies" onClick={close}>Cookie Policy</Link>
                </div>

                <div className="footer-col">
                  <h6>Connect</h6>
                  <Link to="/contact" onClick={close}>Contact</Link>
                  <Link to="/support" onClick={close}>Support</Link>
                  <Link to="/linkedin" onClick={close}>LinkedIn</Link>
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