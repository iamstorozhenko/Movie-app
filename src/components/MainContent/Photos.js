import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import "./Photos.css";

const Photos = (props) => {
  return (
    <div>
      {props.image.map((image) => (
        <div className="photo-container">
          <img
            onClick={() => props.favouriteClick(image)}
            className="images"
            src={image.Poster}
            alt="movies"
          />
          <FontAwesomeIcon icon={faHeart} className="fa-heart" />
        </div>
      ))}
    </div>
  );
};

export default Photos;
