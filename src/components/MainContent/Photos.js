import React from "react";

const Photos = (props) => {
  return (
    <div>
      {props.image.map((image) => (
        <img className="images" src={image.Poster} alt="movies"></img>
      ))}
    </div>
  );
};

export default Photos;
