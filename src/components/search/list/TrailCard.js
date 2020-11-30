import React, { useState } from "react";
import he from "he";

import * as sc from "./StyledTrailCard";

//TODO: Difficulty icons colors
//TODO: Length icon and #
//TODO: Rating icon (out of 5)
//TODO: check if need he decode now that using regex on server side
const TrailCard = ({ trail }) => {
  const [hover, setHover] = useState(false);
  const renderDifficultyIcon = () => {
    if (trail.difficulty === "unknown")
      return (
        <img
          title={`difficulty ${trail.difficulty}`}
          alt="difficulty"
          src="https://img.icons8.com/material-outlined/24/D0D4D2/speedometer.png"
        />
      );

    if (trail.difficulty === "beginner")
      return (
        <img
          title="beginner"
          alt="difficulty"
          src="https://img.icons8.com/material-outlined/24/b1ce7c/speedometer.png"
        />
      );

    if (trail.difficulty === "intermediate") {
      return (
        <img
          title={trail.difficulty}
          alt="difficulty"
          src="https://img.icons8.com/material-outlined/24/749073/speedometer.png"
        />
      );
    }

    if (trail.difficulty === "advanced") {
      return (
        <img
          title={trail.difficulty}
          alt="difficulty"
          src="https://img.icons8.com/material-outlined/24/FE7762/speedometer.png"
        />
      );
    }

    if (trail.difficulty === "expert") {
      return (
        <img
          title={trail.difficulty}
          alt="difficulty"
          src="https://img.icons8.com/material-outlined/24/FE8A62/speedometer.png"
        />
      );
    }
  };

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
  return (
    <sc.StyledCard>
      <sc.StyledImageContainer>
        <sc.StyledBookmarkIcon
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {hover ? (
            <img
              title="bookmark trail"
              alt="bookmark icon"
              src="https://img.icons8.com/material/28/fe7762/bookmark-ribbon--v1.png"
            />
          ) : (
            <img
              title="bookmark trail"
              alt="bookmark icon"
              src="https://img.icons8.com/material-outlined/28/fe7762/bookmark-ribbon.png"
            />
          )}
        </sc.StyledBookmarkIcon>
        {/* TODO: Carousel v2 */}
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
            <img src="https://img.icons8.com/material/18/fe7762/star--v1.png" />

            <span
              title="rating out of 5"
              style={{
                fontSize: "0.9rem",
                fontWeight: "bold",
                color: "#34423B",
              }}
            >
              {trail.rating === "0" ? "-" : Math.floor(trail.rating)}
            </span>

            <img
              title="length in miles"
              alt="length of trail"
              src="https://img.icons8.com/pastel-glyph/24/99A29E/route--v2.png"
            />
            <span title="length in miles" style={{ fontSize: "0.9rem" }}>
              {Math.floor(trail.length)}
            </span>
            <img
              title="hiking"
              alt="hiking icon"
              src="https://img.icons8.com/material/24/99A29E/trekking.png"
            />
          </sc.StyledIconContainer>
          <sc.StyledIconContainer>
            {renderDifficultyIcon()}
          </sc.StyledIconContainer>
        </sc.StyledCardFooter>
      </sc.StyledCardContentContainer>
    </sc.StyledCard>
  );
};

export default TrailCard;
