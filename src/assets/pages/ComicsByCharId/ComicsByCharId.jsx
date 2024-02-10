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
    <main className="container related-comics-div">
      <div>
        <div>
          <img
            src={`${data.data.thumbnail.path}/portrait_uncanny.${data.data.thumbnail.extension}`}
            alt="Character picture"
          />
        </div>
        <div className="second-div">
          <div>
            <h1>{data.data.name}</h1>
            {data.data.description ? (
              <p>{data.data.description}</p>
            ) : (
              <p>No description</p>
            )}
          </div>
          <div className="button-div">
            <button
              onClick={() => {
                Cookies.set(_id, JSON.stringify(data));
              }}
            >
              Ajouter aux favoris
            </button>
          </div>
        </div>
      </div>

      <h2 className="related-h2">Related</h2>
      <div className="results-div">
        {data.data.comics.map((comic, index) => {
          return <Comic key={index} data={comic} />;
        })}
      </div>
    </main>
  ) : (
    <main>
      <div>Loading ...</div>
    </main>
  );
};

export default ComicsByCharId;
