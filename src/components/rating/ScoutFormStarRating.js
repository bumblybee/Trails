import React from "react";
import StarRatingComponent from "react-star-rating-component";
import { FaStar } from "react-icons/fa";

const ScoutFormStarRating = ({ rating, setRating }) => {
  return (
    <StarRatingComponent
      name={"trail-rating"}
      starCount={5}
      onStarHover={(nextValue, prevValue) => setRating(nextValue)}
      onStarHoverOut={(nextValue, prevValue) => setRating(rating)}
      onStarClick={(nextValue) => {
        setRating(nextValue);
      }}
      size={32}
      value={Number(rating)}
      renderStarIcon={() => <FaStar />}
      starColor={"#fe7762"}
      emptyStarColor={"#eceeed"}
    />
  );
};

export default ScoutFormStarRating;
