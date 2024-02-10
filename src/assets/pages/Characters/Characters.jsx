// Packages
import { useState, useEffect } from "react";
// Functions
import fetchData from "../../utils/fetchData";
// Components
import SearchBar from "../../components/SearchBar/SearchBar";
import Pagination from "../../components/Pagination/Pagination";
import Character from "../../components/Character/Character";

const Characters = ({ marvelUrl, page, setPage, search, setSearch }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    fetchData(
      `${marvelUrl}/characters?name=${search}&page=${page}`,
      setData,
      setIsLoading
    );
    setIsSearching(false);
  }, [search, isSearching, page]);

  return !isLoading ? (
    <main className="characters-main-div main-div container">
      <div className="head-div">
        <SearchBar
          search={search}
          setSearch={setSearch}
          setIsLoading={setIsLoading}
          setIsSearching={setIsSearching}
          setPage={setPage}
          type="personnage"
        />
        <Pagination page={page} setPage={setPage} count={data.data.count} />
      </div>
      <div>
        <h1>Personnages</h1>
      </div>
      <div className="results-div">
        {data.data.results.map((result, index) => {
          return <Character key={index} data={result} />;
        })}
      </div>
    </main>
  ) : (
    <main>
      <div>Loading ...</div>
    </main>
  );
};

export default Characters;
