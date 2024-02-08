// Packages
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Pages
import Home from "./assets/pages/Home/Home";
import Characters from "./assets/pages/Characters/Characters";
import ComicsByCharId from "./assets/pages/ComicsByCharId/ComicsByCharId";
import Comics from "./assets/pages/Comics/Comics";
// Components
import Header from "./assets/components/Header/Header";
// Style
import "./App.css";

const marvelUrl = "http://localhost:3000/marvel";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marvel" element={<Home />} />
          <Route
            path="/marvel/characters"
            element={<Characters marvelUrl={marvelUrl} />}
          />
          <Route
            path="/marvel/comics/:charId"
            element={<ComicsByCharId marvelUrl={marvelUrl} />}
          />
          <Route
            path="/marvel/comics"
            element={<Comics marvelUrl={marvelUrl} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
