function Moves() {
  return (
    <div className="home-page">
      <video width="100%" height="100%" autoPlay muted loop>
        <source src="../wallpapers/homewallpaper3.mp4" type="video/mp4"></source>
      </video>

      <div className="search">
        <p>MoVeS</p>
        <div className="search-tool">
          <input placeholder="Search here..." />
          {/* <SearchList/> */}
          <button>
            <h2>Search</h2>
          </button>
        </div>
      </div>
      {/* <Popular/> */}
    </div>
  );
}

export default Moves;
