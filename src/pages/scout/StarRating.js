import React, { useState } from "react";
import StarRatingComponent from "react-star-rating-component";

const StarRating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(false);

  //TODO: Import own star icon
  return (
    <StarRatingComponent
      name={"trail-rating"}
      starCount={5}
      onStarClick={(nextValue) => setRating(nextValue)}
      //   onStarHover={() => setHover(true)}
      //   onStarHoverOut={(nextValue, prevValue, name) => {
      //     setHover(false);
      //   }}
      size={24}
      value={rating}
      //   starColor={hover ? "#fe7762" : "#99a29e"}
      starColor={"#fe7762"}
      emptyStarColor={"#99a29e"}
    />
  );
};

export default StarRating;
