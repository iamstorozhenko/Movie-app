import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./Preload.css";

function Preload() {
  return (
    <div className="wrapper-square">
      <div className="search-film-wrapper">
        <FontAwesomeIcon icon={faSearch} />
        <p className="search-text">Find the movie you want to get started...</p>
      </div>
    </div>
  );
}

export default Preload;
