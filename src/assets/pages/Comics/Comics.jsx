// Packages
import { useState, useEffect } from "react";
// Functions
import fetchData from "../../utils/fetchData";
// Components
import SearchBar from "../../components/SearchBar/SearchBar";
import Pagination from "../../components/Pagination/Pagination";
import Comic from "../../components/Comic/Comic";

const Comics = ({ marvelUrl, page, setPage, search, setSearch }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    fetchData(
      `${marvelUrl}/comics?title=${search}&page=${page}`,
      setData,
      setIsLoading
    );
    setIsSearching(false);
  }, [search, isSearching, page]);

  return !isLoading ? (
    <main className="comics-main-div container">
      <div className="head-div">
        <SearchBar
          search={search}
          setSearch={setSearch}
          setIsLoading={setIsLoading}
          setIsSearching={setIsSearching}
          setPage={setPage}
          type="titre"
        />
        <Pagination page={page} setPage={setPage} count={data.data.count} />
      </div>
      <h1>Comics</h1>

      <div className="results-div">
        {data.data.results.map((result, index) => {
          return <Comic key={index} data={result} />;
        })}
      </div>
    </main>
  ) : (
    <main>
      <div>Loading ...</div>
    </main>
  );
};

export default Comics;
