// Packages
import Cookies from "js-cookie";
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
    <main className="container favorites-main-div">
      <div>
        <h1>Favoris</h1>
        {characters.length !== 0 && (
          <>
            <p className="favorites-subtitle">Personnages</p>
            <div className="results-div">
              {characters.map((character, index) => {
                return (
                  <Character
                    key={index}
                    data={character}
                    btnClass={"button-div favorites"}
                  />
                );
              })}
            </div>
          </>
        )}
        {comics.length !== 0 && (
          <>
            <p className="favorites-subtitle">Comics</p>
            <div className="results-div">
              {comics.map((comic, index) => {
                return (
                  <Comic
                    key={index}
                    data={comic}
                    btnClass="button-div favorites"
                  />
                );
              })}
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default Favorites;
