import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import "./Photos.css";

const Photos = (props) => {
  const favouriteClick = () => {
    console.log("hello");
  };
  return (
    <div>
      {props.image.map((image) => (
        <div className="photo-container">
          <img className="images" src={image.Poster} alt="movies" />
          <FontAwesomeIcon
            icon={faHeart}
            className="fa-heart"
            onClick={favouriteClick}
          />
        </div>
      ))}
    </div>
  );
};

export default Photos;
