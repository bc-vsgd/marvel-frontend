// Packages
import { useState, useEffect } from "react";
import axios from "axios";
// Components
import Character from "../../components/Character/Character";

const Characters = ({ marvelUrl }) => {
  // console.log(marvelUrl);
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${marvelUrl}/characters`);
        console.log("characters, data >>> ", data);
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
      <h1>Personnages</h1>
      {data.data.results.map((result, index) => {
        return <Character key={index} data={result} />;
      })}
    </main>
  ) : (
    <main>
      <div>Loading ...</div>
    </main>
  );
};

export default Characters;
