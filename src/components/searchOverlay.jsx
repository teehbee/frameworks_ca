import searchIconThin from "/public/assets/icons/magnifying-glass-thin.svg";
import backIcon from "/public/assets/icons/back-white.svg";

function SearchOverlay({ onClose }) {
  return (
    <div className="search-overlay">
      <div className="search-overlay-content">
        <div className="input-container">
          <img className="back-icon" src={backIcon} onClick={onClose} />
          <input type="text" className="overlay-search-input secondary-green-colour text-light" placeholder="Search for a product e.g. milk og crowbars" />
          <img className="search-icon" src={searchIconThin} />
        </div>
      </div>
    </div>
  );
}

export default SearchOverlay;
