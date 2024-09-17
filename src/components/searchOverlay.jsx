import React from "react";
import searchIconThin from "/public/assets/icons/magnifying-glass-thin.svg";
import backIcon from "/public/assets/icons/back-white.svg";

function SearchOverlay({ onClose, handleSearchSubmit, searchFormData, handleSearchChange }) {
  return (
    <div className="search-overlay">
      <div className="search-overlay-content">
        <form onSubmit={handleSearchSubmit} className="input-container">
          <img className="back-icon" src={backIcon} onClick={onClose} />
          <input type="text" className="overlay-search-input secondary-green-colour text-light" placeholder="Search..." value={searchFormData} onChange={handleSearchChange} />
          <button className="search-icon">
            <img className="search-icon" src={searchIconThin} />
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchOverlay;
