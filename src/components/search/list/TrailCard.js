import React from "react";
import he from "he";
import * as sc from "./StyledTrailList";

//TODO: Difficulty icons
//TODO: Length icon and #
//TODO: Rating icon (out of 5) add to card footer
const TrailCard = ({ trail }) => {
  const decodeHTML = (html) => {
    var txt = document.createElement("p");
    txt.innerHTML = html;
    return txt.value;
  };

  return (
    <sc.StyledCard>
      <sc.StyledImageContainer>
        <sc.StyledBookmarkIcon>
          <i title="save" class="uil uil-bookmark-full"></i>
        </sc.StyledBookmarkIcon>
        <sc.StyledImage
          src={
            trail.image !== null
              ? trail.image
              : "https://images.unsplash.com/photo-1564417510515-b3d20c821653?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          }
          alt="campground image"
        />
      </sc.StyledImageContainer>
      <sc.StyledCardContentContainer>
        <div>
          <h3>{trail.name}</h3>
          <h5>{trail.city}</h5>
        </div>
        <p>{he.decode(trail.description).substring(0, 220)}...</p>
      </sc.StyledCardContentContainer>
    </sc.StyledCard>
  );
};

export default TrailCard;
