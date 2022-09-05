import SearchList from "../components/SearchList";
import { useEffect, useState } from "react";

function Home() {
  useEffect(() => {
    getPokemons();
    getItems();
    getMoves();
  }, []);

  let arr = []
  

  const getPokemons = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=1154");

    const data = await res.json();

    // console.log(data.results)
    const results = data.results;

    // let arr = [];

    results.forEach((pokemon) => {
      arr.push(pokemon.name);
    });

    console.log(arr);
    return arr
  };

  const getItems = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/item/?limit=1607");

    const data = await res.json();

    // console.log(data.results)
    const results = data.results;

    // let arr = [];

    // results.forEach((items) => {
    //   arr.push(items.name);
    // });

    // console.log(arr);
  };

  const getMoves = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/move/?limit=844");

    const data = await res.json();

    // console.log(data.results)
    const results = data.results;

    // let arr = [];

    // results.forEach((moves) => {
    //   arr.push(moves.name);
    // });

    // console.log(arr);
  };

  return (
    <div className="home-page">
      <video width="100%" height="100%" autoPlay muted loop>
        <source src="../wallpapers/homewallpaper.mp4" type="video/mp4"></source>
      </video>

      <div className="search">
        <p>PoKéMoN</p>
        <div className="search-tool">
          <input
            placeholder="Search here..."
            list="pokedex-list"
            // id="ice-cream-choice"
            autoComplete="true"
            
          />
          <SearchList
            arr={arr}
          />
          <button>
            <h2>Search</h2>
          </button>
        </div>
      </div>
      {/* <Popular/> */}
    </div>
  );
}

export default Home;
