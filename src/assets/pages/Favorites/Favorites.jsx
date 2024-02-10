// Packages
import Cookies from "js-cookie";
// Functions
// Components
import Character from "../../components/Character/Character";
import Comic from "../../components/Comic/Comic";

const Favorites = () => {
  // Arrays of: favorites => characters & comics => display
  const cookies = Cookies.get();
  const favorites = [];
  const characters = [];
  const comics = [];
  for (const key in cookies) {
    favorites.push(JSON.parse(cookies[key]));
  }
  for (let i = 0; i < favorites.length; i++) {
    const favorite = favorites[i];
    if (favorite.name) {
      characters.push(favorite);
    } else if (favorite.title) {
      comics.push(favorite);
    }
  }

  return (
    <main className="container">
      <div>
        <h1>Favoris</h1>
        {characters.length !== 0 && (
          <>
            <h1>Personnages</h1>
            <div className="results-div">
              {characters.map((character, index) => {
                return <Character key={index} data={character} />;
              })}
            </div>
          </>
        )}
        {comics.length !== 0 && (
          <>
            <h1>Comics</h1>
            <div className="results-div">
              {comics.map((comic, index) => {
                return <Comic key={index} data={comic} />;
              })}
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default Favorites;
