import React, { useEffect, useState } from "react";
import Photos from "./Photos";

import "./ContentArea.css";

function ContentArea(props) {
  const [data, setData] = useState([]);

  const getApi = () => {
    fetch(`http://www.omdbapi.com/?s=office&apikey=195d91d3`)
      .then((res) => res.json().Search)
      .then((data) => {
        console.log(data);
        setData(data);
      });
  };

  useEffect(() => {
    getApi();
  }, []);
  return (
    <div className="area">
      <Photos data={data} />
    </div>
  );
}

export default ContentArea;
