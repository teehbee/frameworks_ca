import React from "react";
import { searchIconThin } from "../../assets/icons/index.jsx";

function SearchFieldLargeScreen({ handleSearchSubmit, searchFormData, handleSearchChange }) {
  return (
    <div className="container d-none d-lg-block position-relative">
      <form onSubmit={handleSearchSubmit}>
        <input type="text" className="search-form-input w-100 secondary-green-colour" placeholder="Search for a product e.g. milk og crowbars" value={searchFormData} onChange={handleSearchChange} />
        <button className="search-icon" aria-label="Search field">
          <img src={searchIconThin} alt="Logo" />
        </button>
      </form>
    </div>
  );
}

export default SearchFieldLargeScreen;
