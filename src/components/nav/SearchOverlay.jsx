import React from "react";
import { searchIconThin, backIcon } from "../../assets/icons/index.jsx";

function SearchOverlay({ onClose, handleSearchSubmit, searchTerm, handleSearchChange, filteredSuggestions, handleSuggestionClick }) {
  return (
    <div className="search-overlay container">
      <div className="search-overlay-content">
        <form onSubmit={handleSearchSubmit} className="input-container">
          <img className="back-icon" src={backIcon} onClick={onClose} />
          <input type="text" className="overlay-search-input secondary-green-colour text-light" placeholder="Search..." value={searchTerm} onChange={handleSearchChange} aria-label="Search field" />
          <button className="search-icon">
            <img className="search-icon" src={searchIconThin} />
          </button>
        </form>
        {filteredSuggestions.length > 0 && (
          <ul className="autocomplete-dropdown">
            {filteredSuggestions.map((suggestion) => (
              <li key={suggestion.id} onClick={() => handleSuggestionClick(suggestion)}>
                {suggestion.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default SearchOverlay;
