import React, { useEffect, useState } from "react";
import Photos from "./Photos";


import "./MainContent.css";

function MainContent() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");

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

  return (
    <div className="wrapper">
      <input
        className="input-search"
        value={value}
        placeholder="Search..."
        onChange={(event) => setValue(event.target.value)}
      />
      <div className="area">
        <Photos image={data} />
      </div>
    </div>
  );
}

export default MainContent;
