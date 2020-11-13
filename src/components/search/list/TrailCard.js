import React from "react";
import he from "he";
import { Icon, InlineIcon } from "@iconify/react";
import bookmarkIcon from "@iconify-icons/fa-regular/bookmark";
import starIcon from "@iconify-icons/fa-regular/star";
import mapMarkerPath from "@iconify-icons/mdi/map-marker-path";
import gaugeEmpty from "@iconify-icons/mdi/gauge-empty";
import turfAlong from "@iconify-icons/geo/turf-along";

import * as sc from "./StyledTrailList";

//TODO: Difficulty icons
//TODO: Length icon and #
//TODO: Rating icon (out of 5) add to card footer
const TrailCard = ({ trail }) => {
  return (
    <sc.StyledCard>
      <sc.StyledImageContainer>
        <sc.StyledBookmarkIcon>
          <Icon icon={bookmarkIcon} />
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
          <p>{he.decode(trail.description).substring(0, 220)}...</p>
        </div>
        <sc.StyledCardFooter>
          <sc.StyledIconContainer>
            <sc.StyledGaugeIcon icon={gaugeEmpty} />

            <sc.StyledMarkerIcon icon={turfAlong} />
            <span>{Math.floor(trail.length)}</span>
          </sc.StyledIconContainer>

          <sc.StyledIconContainer>
            <sc.StyledStarIcon icon={starIcon} />
            <sc.StyledRating>
              {trail.rating === "0" ? "" : Math.floor(trail.rating)}
            </sc.StyledRating>
          </sc.StyledIconContainer>
        </sc.StyledCardFooter>
      </sc.StyledCardContentContainer>
    </sc.StyledCard>
  );
};

export default TrailCard;

//icons
//solid bookmark: <span class="iconify" data-icon="fa-solid:bookmark" data-inline="false"></span>
//beginner: <span class="iconify" data-icon="mdi:gauge-empty" data-inline="false"></span>
//intermediate: <span class="iconify" data-icon="mdi:gauge-low" data-inline="false"></span>
//advanced: <span class="iconify" data-icon="mdi:gauge" data-inline="false"></span>
//expert: <span class="iconify" data-icon="mdi:gauge-full" data-inline="false"></span>
//distance: <span class="iconify" data-icon="mdi:map-marker-distance" data-inline="false"></span>
//hike: <span class="iconify" data-icon="mdi:hiking" data-inline="false"></span>
// bike: <span class="iconify" data-icon="ic:sharp-directions-bike" data-inline="false"></span>
//ratings: <span class="iconify" data-icon="la:medal" data-inline="false"></span>
