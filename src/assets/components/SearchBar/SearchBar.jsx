// Packages
import { useState } from "react";
// Functions
import searchBar from "../../utils/searchBar";

const SearchBar = ({
  search,
  setSearch,
  setIsLoading,
  setIsSearching,
  setPage,
  type,
}) => {
  const [searchValue, setSearchValue] = useState(search || "");
  return (
    <div className="searchbar-div">
      <input
        type="text"
        value={searchValue}
        placeholder={`Recherche par ${type}`}
        onKeyDown={(event) => {
          if (event.code === "Enter") {
            setSearch(searchValue);
            searchBar(setIsLoading, setIsSearching, setPage);
          }
        }}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setSearch(searchValue);
          searchBar(setIsLoading, setIsSearching, setPage);
        }}
      >
        Rechercher
      </button>
    </div>
  );
};

export default SearchBar;
