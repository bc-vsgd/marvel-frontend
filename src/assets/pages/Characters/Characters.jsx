// Packages
import { useState, useEffect } from "react";
// Functions
import fetchData from "../../utils/fetchData";
// Components
import Loading from "../../components/Loading/Loading";
import SearchBar from "../../components/SearchBar/SearchBar";
import Pagination from "../../components/Pagination/Pagination";
import Character from "../../components/Character/Character";
// Style: common with Comics.jsx => in App.css (.head-div, .results-div)

const Characters = ({ marvelUrl, page, setPage, search, setSearch }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    // To reload
    setIsLoading(true);
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
        <div>
          <SearchBar
            search={search}
            setSearch={setSearch}
            setIsLoading={setIsLoading}
            setIsSearching={setIsSearching}
            setPage={setPage}
            type="personnage"
          />
          <Pagination
            page={page}
            setPage={setPage}
            count={data.data.count}
            type="characters"
          />
        </div>
      </div>
      <div>
        <h1>Personnages</h1>
      </div>
      <div className="results-div">
        {data.data.results.map((result, index) => {
          return <Character key={index} data={result} btnClass="button-div" />;
        })}
      </div>
    </main>
  ) : (
    <main>
      <Loading />
    </main>
  );
};

export default Characters;
