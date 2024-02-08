import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div>Header</div>
      <nav>
        <Link to="/marvel/characters">Personnages</Link>
        <Link to="/marvel/comics">Comics</Link>
        <p>Favoris</p>
      </nav>
    </header>
  );
};

export default Header;
