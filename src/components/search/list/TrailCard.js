import React from "react";
import * as sc from "./StyledTrailList";

const TrailCard = ({ trail }) => {
  console.log(trail);
  return (
    <sc.StyledCard>
      <sc.StyledImageContainer>
        <sc.StyledImage
          src={
            trail.thumbnail !== null
              ? trail.thumbnail
              : "https://images.unsplash.com/photo-1564417510515-b3d20c821653?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          }
          alt="campground image"
        />
      </sc.StyledImageContainer>
      <sc.StyledCardContentContainer>
        <h3>{trail.name}</h3>
        <p>{trail.description}</p>
      </sc.StyledCardContentContainer>
    </sc.StyledCard>
  );
};

export default TrailCard;
