// UNUSED
// UNUSED

// Packages
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import axios from "axios";
// Functions
// Components
import Character from "../../components/Character/Character";

const Favorites = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const favoritesId = Object.keys(Cookies.get());
  const favoritesTypes = Object.values(Cookies.get());
  const characters = [];
  const comics = [];
  for (let i = 0; i < favoritesTypes.length; i++) {
    const type = favoritesTypes[i];
    if (type === "character") {
      characters.push(favoritesId[i]);
    } else if (type === "comic") {
      comics.push(favoritesId[i]);
    }
  }
  console.log("characters >>> ", characters);
  console.log("comics >>> ", comics);

  const dataCopy = { ...data };
  useEffect(() => {
    for (let i = 0; i < characters.length; i++) {
      const fetchData = async () => {
        const response = await axios.get(
          `http://localhost:3000/marvel/character/${characters[i]}`
        );
        dataCopy[i] = response.data.message;
        console.log("dataCopy[i]", dataCopy);
        setData(dataCopy);
      };

      fetchData();
      setIsLoading(false);
    }
  }, []);
  if (isLoading === false) {
    console.log("dataCopy", dataCopy);
  }

  return (
    <main>
      <div>
        {characters.length !== 0 && (
          <div>
            <h1>Personnages</h1>
            {characters.map((character, index) => {
              return;
            })}
          </div>
        )}
      </div>
    </main>
  );
};

export default Favorites;
