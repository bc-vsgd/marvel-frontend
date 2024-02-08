// Packages
import { useState, useEffect } from "react";
import axios from "axios";
// Components
import Comic from "../../components/Comic/Comic";

const Comics = ({ marvelUrl }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // console.log("Comics, fetchData");
        const { data } = await axios.get(`${marvelUrl}/comics`);
        console.log("Comics, data >>>> ", data);
        setData(data);
      } catch (error) {
        console.log(error.response);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return !isLoading ? (
    <main>
      <h1>Comics</h1>
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
