import { useState } from "react";
import Logo from "./components/Logo";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Items from "./pages/Items";
import Moves from "./pages/Moves";

function App() {
  return (
    <div className="App">
      <nav>
        <div id="menu">
          <Logo />
            <Link to="/">Pokémon</Link>

            <Link to="/items" >Items</Link>
            <Link to="/moves" >Moves</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<Items />} />
        <Route path="/moves" element={<Moves/>}/>
      </Routes>
    </div>
  );
}

export default App;
