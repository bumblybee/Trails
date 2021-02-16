import React from "react";
import * as sc from "./StyledTrailCard";

const TrailCard = ({ trail }) => {
  console.log(trail.name);
  return (
    <sc.StyledCardContainer>
      <h4>{trail.name}</h4>
      <p>{trail.description}</p>
    </sc.StyledCardContainer>
  );
};

export default TrailCard;
