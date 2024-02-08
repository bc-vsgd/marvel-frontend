// Packages
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
// Components
import Comic from "../../components/Comic/Comic";
import ComicByCharId from "../../components/ComicByCharId/ComicByCharId";

const ComicsByCharId = ({ marvelUrl }) => {
  const { charId } = useParams();
  console.log("comics by char, charId >>>> ", charId);
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      //   console.log("Comics by char, fetchData");
      try {
        const { data } = await axios.get(`${marvelUrl}/comics/${charId}`);
        console.log("Comics by char id >> data >> ", data);
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
