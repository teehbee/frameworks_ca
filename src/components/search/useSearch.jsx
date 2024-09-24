import { useState, useEffect } from "react";

function useSearch(data) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredData(data);
    } else {
      setFilteredData(data.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase())));
    }
  }, [searchTerm, data]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleRemoveSearch = () => {
    setSearchTerm("");
  };

  return { searchTerm, filteredData, handleSearchChange, handleRemoveSearch };
}

export default useSearch;
