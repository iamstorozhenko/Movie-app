import React, { useState, useEffect } from "react";

import "./ContentArea.css";

function ContentArea(props) {
  const [data, setData] = useState([]);

  const getApi = () => {
    fetch(`http://www.omdbapi.com/?s=starwars&apikey=195d91d3`)
      .then((response) => response.json())
      .then((json) => setData(json));
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <div className="area">
      <pre>{JSON.stringify({data})}</pre>
      {/* <img src={data.Poster} alt="movies"></img> */}
    </div>
  );
}

export default ContentArea;
