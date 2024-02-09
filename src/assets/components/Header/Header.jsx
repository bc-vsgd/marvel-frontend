// Packages
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const Header = ({ setPage, setSearch }) => {
  return (
    <header>
      <div>Header</div>
      <nav>
        <Link
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
          to="/marvel/comics"
          // Reload
          onClick={() => {
            setPage(1);
            setSearch("");
          }}
        >
          Comics
        </Link>

        <p
          onClick={() => {
            console.log(Cookies.get());
          }}
        >
          Favoris
        </p>
      </nav>
    </header>
  );
};

export default Header;
