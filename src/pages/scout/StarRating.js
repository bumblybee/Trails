import React, { useState } from "react";
import StarRatingComponent from "react-star-rating-component";
import { FaStar } from "react-icons/fa";

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
      size={32}
      value={rating}
      //   starColor={hover ? "#fe7762" : "#99a29e"}
      renderStarIcon={() => <FaStar />}
      starColor={"#fe7762"}
      emptyStarColor={"#eceeed"}
    />
  );
};

export default StarRating;
