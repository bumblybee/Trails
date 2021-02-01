import React, { useContext, useState } from "react";

import he from "he";
import { UserContext } from "../../../context/user/UserContext";
import { bookmarkTrail, removeBookmark } from "../../../api/userApi";
import { randomImage } from "../../../defaultImages/randomImages";
import StarRating from "../../../components/rating/StarRating";
import { useHover } from "../../../hooks/useHover";
import {
  FaRoute,
  FaBookmark,
  FaRegBookmark,
  FaHiking,
  FaBiking,
} from "react-icons/fa";

import * as sc from "./StyledTrailCard";
//!!: Handle bookmark hover in a way that isn't re-rendering
//TODO: Difficulty icons colors
//TODO: Size and color icons
//TODO: check if need he decode now that using regex on server side

const TrailCard = React.memo(({ trail, setHovered }) => {
  const [bookmarkHoverRef] = useHover();
  const { user } = useContext(UserContext);
  const [bookmarked, setBookmarked] = useState([]);

  const countChars = () => {
    const desc = trail.description;
    if (desc.length >= 170) {
      return true;
    }
  };

  const calcDistanceFromSearchLocation = () => {
    const distance = `${Math.floor(trail.distance / 1609)}`;

    return distance > 8 ? `${distance} miles away` : "nearby";
  };

  // TODO: fix this whack ass situation - local storage?

  const handleTrailBookmark = async (trailId) => {
    if (user && user.bookmarks.includes(trailId)) {
      const arr = [...user.bookmarks];
      const index = arr.indexOf(trailId);

      if (index !== -1) {
        arr.splice(index, 1);

        setBookmarked(arr);
      }

      await removeBookmark(trailId);
    } else {
      user && (await bookmarkTrail(trailId));

      user && setBookmarked([...bookmarked, trail.id]);
    }
  };

  //TODO: color rating nearly invisible if none, color other icons
  return (
    <sc.StyledCard
      onMouseEnter={() => setHovered(trail.id)}
      onMouseLeave={() => setHovered({})}
      image={trail.image}
    >
      <sc.StyledBookmarkIcon
        ref={bookmarkHoverRef}
        onClick={() => handleTrailBookmark(trail.id)}
      >
        {/* if local state holds bookmark or user record holds bookmark, show filled in icon */}
        {(user && bookmarked.includes(trail.id)) ||
        (user && user.bookmarks && user.bookmarks.includes(trail.id)) ? (
          <FaBookmark />
        ) : (
          <FaRegBookmark
            title={
              user ? "Click to bookmark trail" : "Log in to bookmark trail"
            }
          />
        )}
      </sc.StyledBookmarkIcon>

      <sc.StyledImageContainer>
        {/* TODO: Carousel v2 */}

        <sc.StyledImage
          src={trail.image !== null ? trail.image : randomImage()}
          alt="trail image"
        />
      </sc.StyledImageContainer>
      <sc.StyledCardLinkWrapper to={`/trail/${trail.id}`}>
        <sc.StyledCardContentContainer>
          <div>
            <h4>{he.decode(trail.name)}</h4>

            <h5>
              {trail.city}, {trail.state} -
              <span> {calcDistanceFromSearchLocation()}</span>
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
                      ? "#fec787"
                      : trail.difficulty === "advanced"
                      ? "#FE9787"
                      : trail.difficulty === "expert"
                      ? "##FE7762"
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
            <sc.StyledIconContainer
              title={trail.rating === "0" ? "no rating" : "rating"}
            >
              <StarRating rating={trail.rating} />
            </sc.StyledIconContainer>
          </sc.StyledCardFooter>
        </sc.StyledCardContentContainer>
      </sc.StyledCardLinkWrapper>
    </sc.StyledCard>
  );
});

export default TrailCard;
