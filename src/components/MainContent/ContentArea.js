import React, { useEffect, useState } from "react";
import Photos from "./Photos";

import "./MainContent.css";
import Preload from "./Preload";
import Modal from "./Modal";

function MainContent() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [unshowPreload, setUnShowPreload] = useState(false);
  const [active, setActive] = useState(false);

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

  const clicked = () => setUnShowPreload(false);

  return (
    <div className="wrapper">
      <div className="search-favourite-wrapper">
        <input
          className="input-search"
          value={value}
          placeholder="Search..."
          onClick={clicked}
          onChange={(event) => setValue(event.target.value)}
        />
        <button className="favourite-btn" onClick={() => setActive(true)}>
          Favourite
        </button>
      </div>
      <div className="area">
        <Photos image={data} />
      </div>
      <Modal active={active} setActive={setActive} />
      {unshowPreload ? <Preload /> : null}
    </div>
  );
}

export default MainContent;
