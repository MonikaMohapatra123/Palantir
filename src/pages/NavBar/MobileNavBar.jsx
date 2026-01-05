import React, { useState } from "react";
import "./NavBar.css";

const MobileNavBar = ({ menu, dropdownData, close }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <div className="desktop-overlay" onClick={close}>
      <div
        className="desktop-menu"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="desktop-header">
          <span>Palantir</span>
          <button onClick={close}>✕</button>
        </div>

        <div className="desktop-menu-items">
          {menu.map((item) => (
            <div key={item.name} className="desktop-item">
              {item.dropdown ? (
                <>
                  <div
                    className="desktop-title"
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
                    <div className="desktop-dropdown">
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
