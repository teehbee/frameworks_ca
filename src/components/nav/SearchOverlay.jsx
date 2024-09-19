import React from "react";
import { searchIconThin, backIcon } from "../../assets/icons/index.jsx";

function SearchOverlay({ onClose, handleSearchSubmit, searchFormData, handleSearchChange }) {
  return (
    <div className="search-overlay">
      <div className="search-overlay-content">
        <form onSubmit={handleSearchSubmit} className="input-container">
          <img className="back-icon" src={backIcon} onClick={onClose} />
          <input type="text" className="overlay-search-input secondary-green-colour text-light" placeholder="Search..." value={searchFormData} onChange={handleSearchChange} aria-label="Search field" />
          <button className="search-icon">
            <img className="search-icon" src={searchIconThin} />
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchOverlay;
