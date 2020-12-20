import React, { useState } from "react";
import he from "he";
import { randomImage } from "../../../defaultImages/randomImages";
import TrailCardStarRating from "../../../components/rating/TrailCardStarRating";
import {
  FaRoute,
  FaBookmark,
  FaRegBookmark,
  FaHiking,
  FaBiking,
  FaStar,
} from "react-icons/fa";

import * as sc from "./StyledTrailCard";

//TODO: Difficulty icons colors
//TODO: Size and color icons
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
    <sc.StyledCard image={trail.image}>
      <sc.StyledBookmarkIcon
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {hover ? <FaBookmark /> : <FaRegBookmark />}
      </sc.StyledBookmarkIcon>
      <sc.StyledImageContainer>
        {/* TODO: Carousel v2 */}
        {/* TODO: Maybe have a few images chosen at random */}
        <sc.StyledImage
          src={trail.image !== null ? trail.image : randomImage()}
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
            <div
              title={trail.difficulty}
              style={{
                background:
                  trail.difficulty === "beginner"
                    ? "#b1ce7c"
                    : trail.difficulty === "intermediate"
                    ? "#fe7762"
                    : "#eeeeed",
                padding: "0.6rem",
                width: "18px",
                height: "18px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "4px",
                fontSize: "0.8rem",
                fontWeight: "400",
                color: "#fff",
                border: "1px solid #eeeeed55",
              }}
            >
              {trail.difficulty.charAt(0).toUpperCase()}
            </div>

            <FaRoute />
            <span title="length in miles" style={{ fontSize: "0.9rem" }}>
              {Math.floor(trail.length)}
            </span>
            {trail.hiking === true && <FaHiking />}
            {trail.biking === true && <FaBiking />}
          </sc.StyledIconContainer>
          <sc.StyledIconContainer>
            <TrailCardStarRating rating={trail.rating} />
          </sc.StyledIconContainer>
        </sc.StyledCardFooter>
      </sc.StyledCardContentContainer>
    </sc.StyledCard>
  );
};

export default TrailCard;
