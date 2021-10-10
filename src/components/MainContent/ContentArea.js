import React, { useState, useEffect } from "react";

import "./ContentArea.css";

function ContentArea() {
  const [data, setData] = useState([]);

  const getApi = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json));
  };

  useEffect(() => {
    getApi();
  }, []);
  return (
    <div className="area">
      <p>{JSON.stringify({ data })}</p>
    </div>
  );
}

export default ContentArea;
