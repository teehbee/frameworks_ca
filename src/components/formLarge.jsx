import searchIconThin from "/public/assets/icons/magnifying-glass-thin.svg";

function SearchFieldLargeScreen() {
  return (
    <div className="container d-none d-lg-block position-relative">
      <input type="text" className="search-form-input w-100 secondary-green-colour" placeholder="Search for a product e.g. milk og crowbars" />
      <img className="search-icon" src={searchIconThin} />
    </div>
  );
}

export default SearchFieldLargeScreen;
