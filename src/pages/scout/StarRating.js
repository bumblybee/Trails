import React from "react";
import ReactStars from "react-rating-stars-component";

const StarRating = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  //TODO: Import own star icon
  return (
    <ReactStars
      style={{ display: "inline" }}
      count={5}
      onChange={ratingChanged}
      size={24}
      color="#99a29e"
      activeColor="#fe7762"
    />
  );
};

export default StarRating;
