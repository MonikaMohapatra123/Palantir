import React from "react";
import "./NavBar.css";

const SearchOverlay = ({ close }) => {
  return (
    <div className="search-overlay">
      <button className="overlay-close" onClick={close}>✕</button>

      <div className="search-content">
        <input
          className="search-input"
          placeholder="Start typing to search"
        />

        <div className="search-popular">
          <span>POPULAR SEARCHES</span>

          <div className="search-tags">
            <button className="search-tag">Foundry</button>
            <button className="search-tag">Gotham</button>
            <button className="search-tag">Apollo</button>
            <button className="search-tag">Ontology</button>
            <button className="search-tag">
              Artificial Intelligence (AI)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;
