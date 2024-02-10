import searchBar from "../../utils/searchBar";

const SearchBar = ({
  search,
  setSearch,
  setIsLoading,
  setIsSearching,
  setPage,
  type,
}) => {
  return (
    <div className="searchbar-div">
      <input
        type="text"
        value={search}
        placeholder={`Recherche par ${type}`}
        onKeyDown={(event) => {
          if (event.code === "Enter") {
            searchBar(setIsLoading, setIsSearching, setPage);
          }
        }}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      <button
        onClick={() => {
          searchBar(setIsLoading, setIsSearching, setPage);
        }}
      >
        Rechercher
      </button>
    </div>
  );
};

export default SearchBar;
