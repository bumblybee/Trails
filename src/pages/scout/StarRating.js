import React, { useState } from "react";
import StarRatingComponent from "react-star-rating-component";
import { FaStar } from "react-icons/fa";

const StarRating = () => {
  const [rating, setRating] = useState(null);
  // TODO: wire to form

  //TODO: Import own star icon
  return (
    <StarRatingComponent
      name={"trail-rating"}
      starCount={5}
      onStarClick={(nextValue) => setRating(nextValue)}
      onStarHover={(nextValue) => setRating(nextValue)}
      onStarHoverOut={(nextValue, prevValue) => setRating(prevValue)}
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
