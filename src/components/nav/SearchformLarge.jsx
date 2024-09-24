import React from "react";
import { searchIconThin } from "../../assets/icons/index.jsx";

function SearchFieldLargeScreen({ handleSearchSubmit, searchTerm, handleSearchChange, filteredSuggestions, handleSuggestionClick }) {
  return (
    <div className="container d-none d-lg-block position-relative">
      <form onSubmit={handleSearchSubmit}>
        <input type="text" className="search-form-input w-100 secondary-green-colour" placeholder="Search for a product e.g. milk og crowbars" value={searchTerm} onChange={handleSearchChange} />
        <button className="search-icon" aria-label="Search field">
          <img src={searchIconThin} alt="Logo" />
        </button>
      </form>
      {/* Render the suggestions dropdown */}
      {filteredSuggestions.length > 0 && (
        <ul className="autocomplete-dropdown">
          {filteredSuggestions.map((suggestion) => (
            <li
              key={suggestion.id} // Use product id as key
              onClick={() => handleSuggestionClick(suggestion)} // Handle click to navigate
            >
              {suggestion.title} {/* Only render the title as text */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchFieldLargeScreen;
