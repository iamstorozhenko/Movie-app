import React, { useEffect, useState } from "react";
import Photos from "./Photos";

import "./MainContent.css";
import Preload from "./Preload";
// import Modal from "./Modal";

function MainContent() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [unshowPreload, setUnShowPreload] = useState(false);
  const [favourites, setFavourites] = useState([]);
  //   const [active, setActive] = useState(false);

  const movieReq = async (value) => {
    const url = `https://www.omdbapi.com/?s=${value}&apikey=195d91d3`;

    const res = await fetch(url);
    const resJson = await res.json();

    if (resJson.Search) {
      setData(resJson.Search);
    }
  };

  useEffect(() => {
    movieReq(value);
  }, [value]);

  useEffect(() => {
    const movieFav = JSON.parse(localStorage.getItem("your-favourite-movies"));
    setFavourites(movieFav);
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("your-favourite-movies", JSON.stringify(items));
  };

  const clicked = () => setUnShowPreload(false);

  const addFavourite = (movie) => {
    const setNewFavourite = [...favourites, movie];
    // setFavourites(setNewFavourite);
    // saveToLocalStorage(setNewFavourite);
    const uniqueSet = new Set(setNewFavourite);
    const backToArr = [...uniqueSet];
    setFavourites(backToArr);
    saveToLocalStorage(backToArr);
    console.log(setNewFavourite);
  };

  const removeFavourite = (movie) => {
    const newFavList = favourites.filter(
      (favourites) => favourites.imdbID !== movie.imdbID
    );
    setFavourites(newFavList);
    saveToLocalStorage(newFavList);
  };

  return (
    <div className="wrapper">
      {/* <Modal active={active} setActive={setActive} /> */}
      <div className="search-favourite-wrapper">
        <input
          className="input-search"
          value={value}
          placeholder="Search..."
          onClick={clicked}
          onChange={(event) => setValue(event.target.value)}
        />
        {/* <button className="favourite-btn" onClick={() => setActive(true)}>
          Favourite
        </button> */}
      </div>
      <div className="area">
        <Photos favouriteClick={addFavourite} image={data} />
      </div>
      {unshowPreload ? <Preload /> : null}
      <div className="favourite-header">Favourites</div>
      <div className="favourite-area">
        <Photos favouriteClick={removeFavourite} image={favourites} />
      </div>
    </div>
  );
}

export default MainContent;
