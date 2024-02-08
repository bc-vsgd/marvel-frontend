// Packages
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
// Functions
import fetchData from "../../utils/fetchData";
// Components
import Comic from "../../components/Comic/Comic";

const ComicsByCharId = ({ marvelUrl }) => {
  const { charId } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData(`${marvelUrl}/comics/${charId}`, setData, setIsLoading);
  }, []);

  return !isLoading ? (
    <main>
      <h1>{data.data.name}</h1>
      <p>{data.data.description}</p>
      <img
        src={`${data.data.thumbnail.path}/portrait_small.${data.data.thumbnail.extension}`}
        alt="Character picture"
      />
      <h2>Comics</h2>
      {data.data.comics.map((comic, index) => {
        return <Comic key={index} data={comic} />;
      })}
    </main>
  ) : (
    <main>
      <div>Loading ...</div>
    </main>
  );
};

export default ComicsByCharId;
