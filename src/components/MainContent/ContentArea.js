import React, { useEffect, useState } from "react";
import Photos from "./Photos";

import "./ContentArea.css";

function ContentArea(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?s=venom&apikey=195d91d3`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setData(result.Search);
      });
  }, []);
  return (
    <div className="area">
      <Photos data={data} />
    </div>
  );
}

export default ContentArea;
