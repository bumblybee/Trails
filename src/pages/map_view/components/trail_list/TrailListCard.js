import React, { useContext } from "react";
import DOMPurify from "dompurify";
import he from "he";
import { UserContext } from "../../../../context/user/UserContext";
import { BookmarkContext } from "../../../../context/bookmark/BookmarkContext";

import StarRating from "../../../../components/rating/StarRating";
import { useHover } from "../../../../hooks/useHover";
import {
  FaRoute,
  FaBookmark,
  FaRegBookmark,
  FaHiking,
  FaBiking,
} from "react-icons/fa";

import * as sc from "./StyledTrailListCard";

// TODO: Size and color icons

const TrailListCard = React.memo(({ trail, setHoveredCard }) => {
  const sanitize = DOMPurify.sanitize;
  const [bookmarkHoverRef, isHovered] = useHover();
  const { user } = useContext(UserContext);
  const { bookmarks, createUserBookmark, removeUserBookmark } = useContext(
    BookmarkContext
  );

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
        const created = await createUserBookmark(user.id, id);
      } else {
        const removed = await removeUserBookmark(user.id, id);
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

    if (isHovered)
      icon = (
        <FaBookmark title={user ? "Bookmark" : "Log in to bookmark trail"} />
      );

    return icon;
  };

  // TODO: color rating nearly invisible if none, color other icons
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

          <sc.StyledImage src={trail.image} alt="trail" loading="lazy" />
        </sc.StyledCardLinkWrapper>
      </sc.StyledImageContainer>

      <sc.StyledCardLinkWrapper to={`/trail/${trail.id}`}>
        <sc.StyledCardContentContainer>
          <div>
            <h4>{sanitize(he.decode(trail.name))}</h4>

            <h5>
              {trail.city}, {trail.state} -
              <span> {calcDistanceFromSearchLocation()}</span>
            </h5>

            <p>{he.decode(trail.description).substring(0, 172)}...</p>
          </div>

          <sc.StyledCardFooter>
            <sc.StyledIconContainer>
              <sc.StyledDifficulty
                title={`Difficulty: ${trail.difficulty}`}
                difficulty={trail.difficulty}
              />
              <sc.StyledLength title={`Length: ${trail.length} miles`} />
              <span title="length in miles" className="miles">
                {Math.round(trail.length)}
              </span>
              {trail.hiking === true && <sc.StyledHiking />}
              {trail.biking === true && <sc.StyledBiking />}
            </sc.StyledIconContainer>
            <sc.StyledIconContainer
              title={
                trail.rating === "0" ? "no rating" : `rating: ${trail.rating}/5`
              }
            >
              <StarRating rating={trail.rating} />
            </sc.StyledIconContainer>
          </sc.StyledCardFooter>
        </sc.StyledCardContentContainer>
      </sc.StyledCardLinkWrapper>
    </sc.StyledCard>
  );
});

export default TrailListCard;
