// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { CartLogo, SearchOverlay, SearchFieldLargeScreen, LogoField, UpperNavBar } from "./index.jsx";
// import { searchIconThick } from "../assets/icons/index.jsx";

// function Header({ onSearch, clearSearch, suggestions }) {
//   const [overLayVisible, setOverlayVisible] = React.useState(false);
//   const [searchTerm, setSearchTerm] = React.useState("");
//   const [filteredSuggestions, setFilteredSuggestions] = React.useState([]);

//   const showOverlay = () => setOverlayVisible(true);
//   const hideOverlay = () => setOverlayVisible(false);

//   const navigate = useNavigate();

//   const handleSearchChange = (event) => {
//     const value = event.target.value;
//     setSearchTerm(value);

//     if (value) {
//       const filtered = suggestions.filter((item) => item.toLowerCase().includes(value.toLowerCase()));
//       setFilteredSuggestions(filtered);
//     } else {
//       setFilteredSuggestions([]);
//     }
//   };

//   const handleSearchSubmit = (event) => {
//     event.preventDefault();
//     onSearch(searchTerm);
//     setFilteredSuggestions([]);
//     navigate("/");
//   };

//   const handleSuggestionClick = (suggestion) => {
//     setSearchTerm(suggestion);
//     setFilteredSuggestions([]);
//     onSearch(suggestion);
//   };

//   useEffect(() => {
//     if (clearSearch) {
//       setSearchTerm("");
//       setFilteredSuggestions([]);
//     }
//   }, [clearSearch]);

//   return (
//     <header className="main-green-colour">
//       <UpperNavBar />
//       <div className="d-flex justify-content-between p-3 align-items-center">
//         <LogoField />
//         <SearchFieldLargeScreen searchTerm={searchTerm} handleSearchChange={handleSearchChange} handleSearchSubmit={handleSearchSubmit} filteredSuggestions={filteredSuggestions} handleSuggestionClick={handleSuggestionClick} />
//         <nav className="nav-side-item d-flex align-items-center px-2">
//           <CartLogo />
//           <img className="ps-2 d-lg-none" onClick={showOverlay} src={searchIconThick} />
//           {overLayVisible && <SearchOverlay onClose={hideOverlay} searchTerm={searchTerm} handleSearchChange={handleSearchChange} handleSearchSubmit={handleSearchSubmit} filteredSuggestions={filteredSuggestions} handleSuggestionClick={handleSuggestionClick} />}
//         </nav>
//       </div>
//     </header>
//   );
// }

// export default Header;

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartLogo, SearchOverlay, SearchFieldLargeScreen, LogoField, UpperNavBar } from "./index.jsx";
import { searchIconThick } from "../assets/icons/index.jsx";

function Header({ onSearch, clearSearch, suggestions }) {
  const [overLayVisible, setOverlayVisible] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [filteredSuggestions, setFilteredSuggestions] = React.useState([]);

  const showOverlay = () => setOverlayVisible(true);
  const hideOverlay = () => setOverlayVisible(false);

  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value) {
      const filtered = suggestions.filter((item) => item.title.toLowerCase().includes(value.toLowerCase()));
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions([]);
    }
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
    setFilteredSuggestions([]);
    navigate("/"); // This will take you to the homepage on submit
  };

  // When a suggestion is clicked, navigate to its product page using the product ID
  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion.title); // Set the searchTerm to the clicked suggestion's title
    setFilteredSuggestions([]); // Clear the suggestions dropdown
    navigate(`/product/${suggestion.id}`); // Navigate to the product page based on ID
  };

  useEffect(() => {
    if (clearSearch) {
      setSearchTerm("");
      setFilteredSuggestions([]);
    }
  }, [clearSearch]);

  return (
    <header className="main-green-colour">
      <UpperNavBar />
      <div className="d-flex justify-content-between p-3 align-items-center">
        <LogoField />
        <SearchFieldLargeScreen searchTerm={searchTerm} handleSearchChange={handleSearchChange} handleSearchSubmit={handleSearchSubmit} filteredSuggestions={filteredSuggestions} handleSuggestionClick={handleSuggestionClick} />
        <nav className="nav-side-item d-flex align-items-center px-2">
          <CartLogo />
          <img className="ps-2 d-lg-none" onClick={showOverlay} src={searchIconThick} />
          {overLayVisible && <SearchOverlay onClose={hideOverlay} searchTerm={searchTerm} handleSearchChange={handleSearchChange} handleSearchSubmit={handleSearchSubmit} filteredSuggestions={filteredSuggestions} handleSuggestionClick={handleSuggestionClick} />}
        </nav>
      </div>
    </header>
  );
}

export default Header;
