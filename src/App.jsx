// Packages
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Pages
import Home from "./assets/css/pages/Home/Home";
import Characters from "./assets/css/pages/Characters/Characters";
import Comics from "./assets/css/pages/Comics/Comics";
// Components
import Header from "./assets/css/components/Header/Header";
// Style
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marvel" element={<Home />} />
          <Route path="/marvel/characters" element={<Characters />} />
          <Route path="/marvel/comics" element={<Comics />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
