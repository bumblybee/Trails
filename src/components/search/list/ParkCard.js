import React from "react";
import * as sc from "./StyledParkList";

const ParkCard = ({ campground }) => {
  console.log(campground);
  return (
    <sc.StyledCard>
      <sc.StyledImageContainer>
        <sc.StyledImage
          src={
            campground.images.length
              ? campground.images[0].url
              : "https://images.unsplash.com/photo-1571687949921-1306bfb24b72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          }
          alt="campground image"
        />
      </sc.StyledImageContainer>
      <sc.StyledCardContentContainer>
        <h3>{campground.name}</h3>
        <p>{campground.description}</p>
      </sc.StyledCardContentContainer>
    </sc.StyledCard>
  );
};

export default ParkCard;
