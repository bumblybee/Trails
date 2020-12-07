import React, { useState } from "react";
import he from "he";
import {
  FaRoute,
  FaBookmark,
  FaRegBookmark,
  FaHiking,
  FaBiking,
  FaMedal,
} from "react-icons/fa";

import * as sc from "./StyledTrailCard";

//TODO: Difficulty icons colors
//TODO: Length icon and #
//TODO: Rating icon (out of 5) - stars
//TODO: check if need he decode now that using regex on server side
const TrailCard = ({ trail }) => {
  const [hover, setHover] = useState(false);

  const countChars = () => {
    const desc = trail.description;
    if (desc.length >= 170) {
      return true;
    }
  };

  const calcDistance = () => {
    const distance = `${Math.floor(trail.distance / 1609)}`;

    return distance > 8 ? `${distance} miles away` : "nearby";
  };

  //TODO: hover card, highlight on map
  //TODO: color rating nearly invisible if none, color other icons
  return (
    <sc.StyledCard>
      <sc.StyledImageContainer>
        <sc.StyledBookmarkIcon
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {hover ? <FaBookmark /> : <FaRegBookmark />}
        </sc.StyledBookmarkIcon>
        {/* TODO: Carousel v2 */}
        {/* TODO: Maybe have a few images chosen at random */}
        <sc.StyledImage
          src={
            trail.image !== null
              ? trail.image
              : "https://images.unsplash.com/photo-1564417510515-b3d20c821653?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          }
          alt="trail image"
        />
      </sc.StyledImageContainer>

      <sc.StyledCardContentContainer>
        <div>
          <h3>{he.decode(trail.name)}</h3>

          <h5>
            {trail.city}, {trail.state} -<span> {calcDistance()}</span>
          </h5>
          {countChars() ? (
            <p>{he.decode(trail.description).substring(0, 172)}...</p>
          ) : (
            <p>{he.decode(trail.description)}</p>
          )}
        </div>

        <sc.StyledCardFooter>
          <sc.StyledIconContainer>
            <FaRoute />
            <span title="length in miles" style={{ fontSize: "0.9rem" }}>
              {Math.floor(trail.length)}
            </span>
            {trail.hiking === true && <FaHiking />}
            {trail.biking === true && <FaBiking />}
            <sc.StyledBullseye
              difficulty={trail.difficulty}
              title={trail.difficulty}
            />
          </sc.StyledIconContainer>
          <sc.StyledIconContainer>
            <FaMedal />

            <span
              title="rating out of 5"
              style={{
                fontSize: "0.85rem",
                fontWeight: "bold",
                color: "#34423B",
              }}
            >
              {trail.rating === "0" ? "" : Math.floor(trail.rating)}
            </span>
          </sc.StyledIconContainer>
        </sc.StyledCardFooter>
      </sc.StyledCardContentContainer>
    </sc.StyledCard>
  );
};

export default TrailCard;
