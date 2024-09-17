import React from "react";
import searchIconThin from "/public/assets/icons/magnifying-glass-thin.svg";

function SearchFieldLargeScreen({ handleSearchSubmit, searchFormData, handleSearchChange }) {
  return (
    <div className="container d-none d-lg-block position-relative">
      <form onSubmit={handleSearchSubmit}>
        <input type="text" className="search-form-input w-100 secondary-green-colour" placeholder="Search for a product e.g. milk og crowbars" value={searchFormData} onChange={handleSearchChange} />
        <button className="search-icon">
          <img src={searchIconThin} />
        </button>
      </form>
    </div>
  );
}

export default SearchFieldLargeScreen;
