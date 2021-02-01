import React from "react";

import { StyledStarRatingComponent, StyledStar } from "./StyledStar";

const StarRating = ({ rating }) => {
  return (
    <StyledStarRatingComponent
      name={"trail-rating"}
      starCount={5}
      value={Number(rating)}
      renderStarIcon={() => <StyledStar />}
      starColor={"#fe7762"}
      emptyStarColor={"#eceeed"}
      editing={false}
    />
  );
};

export default StarRating;
