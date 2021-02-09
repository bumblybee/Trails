import React, { useContext } from "react";

import he from "he";
import { UserContext } from "../../../../context/user/UserContext";
import { BookmarkContext } from "../../../../context/bookmark/BookmarkContext";

import { randomImage } from "../../../../defaultImages/randomImages";
import StarRating from "../../../../components/rating/StarRating";
import { useHover } from "../../../../hooks/useHover";
import {
  FaRoute,
  FaBookmark,
  FaRegBookmark,
  FaHiking,
  FaBiking,
} from "react-icons/fa";

import * as sc from "./StyledTrailCard";

// !!: Handle bookmark hover in a way that isn't re-rendering

// TODO: Size and color icons

const TrailCard = React.memo(({ trail, setHoveredCard }) => {
  const [bookmarkHoverRef] = useHover();
  const { user } = useContext(UserContext);
  const {
    bookmarks,
    setBookmarks,
    createUserBookmark,
    removeUserBookmark,
  } = useContext(BookmarkContext);

  const shouldTruncateDescription = () => {
    const desc = trail.description;
    if (desc.length >= 170) {
      return true;
    }
  };

  const calcDistanceFromSearchLocation = () => {
    const distance = `${Math.floor(trail.distance / 1609)}`;

    return distance > 8 ? `${distance} miles away` : "nearby";
  };

  const handleTrailBookmark = async (id) => {
    // TODO: If cookie has expired and user hasn't refreshed page the user check fails and error thrown - handle

    if (user && bookmarks) {
      let type = "create";

      for (let { trailId } of bookmarks) {
        if (trailId === id) {
          type = "remove";
        }
      }

      if (type === "create") {
        const res = await createUserBookmark(user.id, id);
        console.log(res);
      } else {
        const res = await removeUserBookmark(user.id, id);
        console.log(res);
      }
    }
  };

  const renderBookmarkIcon = (id) => {
    let icon = (
      <FaRegBookmark title={user ? "Bookmark" : "Log in to bookmark trail"} />
    );

    if (bookmarks) {
      for (let { trailId } of bookmarks) {
        if (trailId === id) {
          icon = <FaBookmark title="Remove bookmark" />;
        }
      }
    }
    return icon;
  };

  //TODO: color rating nearly invisible if none, color other icons
  return (
    <sc.StyledCard
      onMouseEnter={() => setHoveredCard(trail.id)}
      onMouseLeave={() => setHoveredCard({})}
      image={trail.image}
      id={trail.id}
    >
      <sc.StyledBookmarkIcon
        ref={bookmarkHoverRef}
        onClick={() => handleTrailBookmark(trail.id)}
      >
        {renderBookmarkIcon(trail.id)}
      </sc.StyledBookmarkIcon>

      <sc.StyledImageContainer>
        <sc.StyledCardLinkWrapper to={`/trail/${trail.id}`}>
          {/* TODO: Carousel v2 */}

          <sc.StyledImage
            src={trail.image !== null ? trail.image : randomImage()}
            alt="trail image"
          />
        </sc.StyledCardLinkWrapper>
      </sc.StyledImageContainer>

      <sc.StyledCardLinkWrapper to={`/trail/${trail.id}`}>
        <sc.StyledCardContentContainer>
          <div>
            <h4>{he.decode(trail.name)}</h4>

            <h5>
              {trail.city}, {trail.state} -
              <span> {calcDistanceFromSearchLocation()}</span>
            </h5>
            {shouldTruncateDescription() ? (
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
