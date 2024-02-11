// Packages
import { Link } from "react-router-dom";
// Images
import logo_marvel from "../../img/marvel_logo.svg";

const Header = ({ setPage, setSearch }) => {
  return (
    <header>
      <div>
        <div>
          <Link
            to="/marvel"
            onClick={() => {
              setPage(1);
              setSearch("");
            }}
          >
            <img src={logo_marvel} alt="Logo Marvel" />
          </Link>
        </div>
        <nav>
          <Link
            className="header-nav-link"
            to="/marvel/characters"
            // Reload
            onClick={() => {
              setPage(1);
              setSearch("");
            }}
          >
            Personnages
          </Link>
          <Link
            className="header-nav-link"
            to="/marvel/comics"
            // Reload
            onClick={() => {
              setPage(1);
              setSearch("");
            }}
          >
            Comics
          </Link>
          <Link to="/marvel/favorites" className="header-nav-link">
            Favoris
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
