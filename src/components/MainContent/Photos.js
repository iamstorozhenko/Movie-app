import React from "react";

const Photos = (props) => {
  return (
    <div>
      {props.data.map((data) => (
        <img src={data.Poster} alt="movies"></img>
      ))}
    </div>
  );
};

export default Photos;
