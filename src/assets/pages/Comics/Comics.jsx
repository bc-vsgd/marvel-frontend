// Packages
import { useState, useEffect } from "react";
// Functions
import fetchData from "../../utils/fetchData";
// Components
import SearchBar from "../../components/SearchBar/SearchBar";
import Pagination from "../../components/Pagination/Pagination";
import Loading from "../../components/Loading/Loading";
import Comic from "../../components/Comic/Comic";
// Style: common with Characters.jsx => in App.css (.head-div, .results-div)

const Comics = ({ marvelUrl, page, setPage, search, setSearch }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  // For search bar
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    // To reload
    setIsLoading(true);
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
        <div>
          <SearchBar
            search={search}
            setSearch={setSearch}
            setIsLoading={setIsLoading}
            setIsSearching={setIsSearching}
            setPage={setPage}
            type="titre"
          />
          <Pagination
            setIsLoading={setIsLoading}
            page={page}
            setPage={setPage}
            count={data.data.count}
            type="comics"
          />
        </div>
      </div>
      <h1>Comics</h1>

      <div className="results-div">
        {data.data.results.map((result, index) => {
          return <Comic key={index} data={result} btnClass="button-div" />;
        })}
      </div>
    </main>
  ) : (
    <main>
      <Loading />
    </main>
  );
};

export default Comics;
