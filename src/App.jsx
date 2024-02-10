// Packages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
// import Cookies from "js-cookie";
// Pages
import Home from "./assets/pages/Home/Home";
import Characters from "./assets/pages/Characters/Characters";
import ComicsByCharId from "./assets/pages/ComicsByCharId/ComicsByCharId";
import Comics from "./assets/pages/Comics/Comics";
import Favorites from "./assets/pages/Favorites/Favorites";
// Components
import Header from "./assets/components/Header/Header";
import Footer from "./assets/components/Footer/Footer";
// Style
import "./assets/css/App.css";
// Icons import
import { library } from "@fortawesome/fontawesome-svg-core";
// Solid icons
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
// Brands icons
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
// Regular icons
// import { faUser } from "@fortawesome/free-regular-svg-icons";
library.add(faChevronRight, faChevronLeft, faGithub, faLinkedin);

const marvelUrl = "http://localhost:3000/marvel";

function App() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  console.log("App > page: ", page, typeof page);
  return (
    <>
      <Router>
        <Header setPage={setPage} setSearch={setSearch} />
        <Routes>
          {/* Both routes "/" and "/marvel" lead to "/marvel/characters" */}
          <Route path="/" element={<Home />} />
          <Route path="/marvel" element={<Home />} />
          <Route
            path="/marvel/characters"
            element={
              <Characters
                marvelUrl={marvelUrl}
                page={page}
                setPage={setPage}
                search={search}
                setSearch={setSearch}
              />
            }
          />
          <Route
            path="/marvel/comics/:charId"
            element={<ComicsByCharId marvelUrl={marvelUrl} />}
          />
          <Route
            path="/marvel/comics"
            element={
              <Comics
                marvelUrl={marvelUrl}
                page={page}
                setPage={setPage}
                search={search}
                setSearch={setSearch}
              />
            }
          />
          <Route path="/marvel/favorites" element={<Favorites />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
