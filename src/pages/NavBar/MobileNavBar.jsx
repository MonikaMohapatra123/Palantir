import React, { useState } from "react";
import "./NavBar.css";

const MobileNavBar = ({ menu, dropdownData, close }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <div className="mobile-nav-overlay">
      <div className="mobile-nav">
        <div className="mobile-header">
          <span>Menu</span>
          <button onClick={close}>✕</button>
        </div>

        <div className="mobile-menu">
          {menu.map((item) => (
            <div key={item.name} className="mobile-item">
              {item.dropdown ? (
                <>
                  <div
                    className="mobile-title"
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === item.pageType
                          ? null
                          : item.pageType
                      )
                    }
                  >
                    {item.name}
                    <span>▾</span>
                  </div>

                  {openDropdown === item.pageType && (
                    <div className="mobile-dropdown">
                      {(dropdownData[item.pageType] || []).map((cat, i) => (
                        <a
                          key={i}
                          href={`/${item.pageType}/${cat
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                          onClick={close}
                        >
                          {cat}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <a href={item.link} onClick={close}>
                  {item.name}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileNavBar;
