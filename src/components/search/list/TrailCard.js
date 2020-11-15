import React, { useState } from "react";
import he from "he";
import { Icon, InlineIcon } from "@iconify/react";
import bookmarkIcon from "@iconify-icons/fa-regular/bookmark";

import * as sc from "./StyledTrailCard";

//TODO: Difficulty icons
//TODO: Length icon and #
//TODO: Rating icon (out of 5) add to card footer
const TrailCard = ({ trail }) => {
  const [hover, setHover] = useState(false);
  const renderDifficultyIcon = () => {
    if (trail.difficulty === null) return "";

    if (trail.difficulty === "Beginner" || trail.difficulty === "Easiest")
      return (
        <img src="https://img.icons8.com/material-outlined/24/b1ce7c/define-location.png" />
      );

    if (trail.difficulty === "Intermediate") {
      return (
        <img
          title={`difficulty: ${trail.difficulty}`}
          alt="difficulty icon"
          src="https://img.icons8.com/ios-filled/24/749073/medium-risk.png"
        />
      );
    }

    if (trail.difficulty === "Advanced") {
      return (
        <img
          title={`difficulty: ${trail.difficulty}`}
          alt="difficulty icon"
          src="https://img.icons8.com/ios-filled/24/FE7762/medium-risk.png"
        />
      );
    }

    if (trail.difficulty === "Expert") {
      return (
        <img
          title={`difficulty: ${trail.difficulty}`}
          alt="difficulty icon"
          src="https://img.icons8.com/ios-filled/24/FE8A62/medium-risk.png"
        />
      );
    }
  };

  const countDescChars = () => {
    const desc = trail.description;
    if (desc.length >= 170) {
      return true;
    }
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
              src="https://img.icons8.com/material/24/fe7762/bookmark-ribbon--v1.png"
            />
          ) : (
            <img
              title="bookmark trail"
              alt="bookmark icon"
              src="https://img.icons8.com/material-outlined/24/fe7762/bookmark-ribbon.png"
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
          <h3>{trail.name}</h3>
          <h5>
            {trail.city}, {trail.state}
          </h5>
          {countDescChars() ? (
            <p>{he.decode(trail.description).substring(0, 170)}...</p>
          ) : (
            <p>{he.decode(trail.description)}</p>
          )}
        </div>
        <sc.StyledCardFooter>
          <sc.StyledIconContainer>
            {renderDifficultyIcon()}

            <img src="https://img.icons8.com/pastel-glyph/24/b1ce7c/route--v2.png" />
            <span style={{ fontSize: "0.9rem" }}>
              {Math.floor(trail.length)}
            </span>
            <img src="https://img.icons8.com/material/24/b1ce7c/trekking.png" />
          </sc.StyledIconContainer>

          <sc.StyledIconContainer>
            <img src="https://img.icons8.com/ios-filled/16/fe7762/star.png" />

            <span
              style={{
                fontSize: "0.9rem",
                fontWeight: "bold",
                color: "#34423B",
              }}
            >
              {trail.rating === "0" ? "-" : Math.floor(trail.rating)}
            </span>
          </sc.StyledIconContainer>
        </sc.StyledCardFooter>
      </sc.StyledCardContentContainer>
    </sc.StyledCard>
  );
};

export default TrailCard;
