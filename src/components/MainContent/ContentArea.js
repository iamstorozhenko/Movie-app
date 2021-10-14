import React, { useEffect, useState } from "react";
import Photos from "./Photos";

import "./MainContent.css";

function MainContent() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");

  const movieReq = async (value) => {
    const url = `http://www.omdbapi.com/?s=${value}&apikey=195d91d3`;

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
    <div className="area">
      <input
        className="input-search"
        value={value}
        placeholder="search..."
        onChange={(event) => setValue(event.target.value)}
      />
      <Photos image={data} />
    </div>
  );
}

export default MainContent;
