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
    <main>
      <h1>Comics</h1>
      <SearchBar
        search={search}
        setSearch={setSearch}
        setIsLoading={setIsLoading}
        setIsSearching={setIsSearching}
        setPage={setPage}
        type="titre"
      />
      <Pagination page={page} setPage={setPage} count={data.data.count} />
      {data.data.results.map((result, index) => {
        return <Comic key={index} data={result} />;
      })}
    </main>
  ) : (
    <main>
      <div>Loading ...</div>
    </main>
  );
};

export default Comics;
