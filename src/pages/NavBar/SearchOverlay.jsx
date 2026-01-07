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
            <a>Foundry</a>
            <a>Gotham</a>
            <a>Apollo</a>
            <a>Ontology</a>
            <a>Artificial Intelligence (AI)</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;
