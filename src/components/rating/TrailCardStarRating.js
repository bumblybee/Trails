import React from "react";

import { StyledStarRatingComponent, StyledStar } from "./StyledStar";

const TrailCardStarRating = ({ rating }) => {
  return (
    <StyledStarRatingComponent
      name={"trail-rating"}
      starCount={5}
      value={rating}
      renderStarIcon={() => <StyledStar />}
      starColor={"#fe7762"}
      emptyStarColor={"#eceeed"}
      editing={false}
    />
  );
};

export default TrailCardStarRating;
