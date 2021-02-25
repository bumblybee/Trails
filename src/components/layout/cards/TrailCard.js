import React, { useContext } from "react";
import he from "he";
import {
  FaRoute,
  FaHiking,
  FaBiking,
  FaBookmark,
  FaRegBookmark,
} from "react-icons/fa";
import { BookmarkContext } from "../../../context/bookmark/BookmarkContext";
import { UserContext } from "../../../context/user/UserContext";
import { useHover } from "../../../hooks/useHover";
import StarRating from "../../rating/StarRating";
import * as sc from "./StyledTrailCard";
import { StyledBookmarkIcon } from "../../../pages/map_view/components/trail_list/StyledTrailListCard";
import { StyledCardLinkWrapper } from "../../../pages/map_view/components/trail_list/StyledTrailListCard";

const TrailCard = ({ trail }) => {
  const [bookmarkHoverRef] = useHover();
  const { user } = useContext(UserContext);
  const { bookmarks, createUserBookmark, removeUserBookmark } = useContext(
    BookmarkContext
  );
  const handleTrailBookmark = async (id) => {
    // TODO: If cookie has expired and user hasn't refreshed page the user check fails and error thrown - handle

    if (user && bookmarks.length) {
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

    if (bookmarks.length) {
      for (let { trailId } of bookmarks) {
        if (trailId === id) {
          icon = <FaBookmark title="Remove bookmark" />;
        }
      }
    }
    return icon;
  };

  return (
    <sc.StyledCardContainer>
      <StyledBookmarkIcon
        ref={bookmarkHoverRef}
        onClick={() => handleTrailBookmark(trail.id)}
      >
        {renderBookmarkIcon(trail.id)}
      </StyledBookmarkIcon>
      <StyledCardLinkWrapper to={`/trail/${trail.id}`}>
        <sc.StyledCardImage>
          <img
            src={
              trail.image ||
              "https://images.unsplash.com/photo-1584492100332-b0eaad7652fe?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjAzfHx0cmFpbHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60"
            }
            alt="trail"
            loading="lazy"
          />
        </sc.StyledCardImage>
      </StyledCardLinkWrapper>
      <StyledCardLinkWrapper to={`/trail/${trail.id}`}>
        <sc.StyledCardContent>
          <div>
            <h4>{trail.name}</h4>
            <h5>
              {trail.city}, {trail.state}
            </h5>
            <p>
              {trail.description.length > 89
                ? he.decode(trail.description).substring(0, 90) + "..."
                : he.decode(trail.description)}
            </p>
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
                  padding: "0.525rem",
                  width: "14px",
                  height: "14px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "4px",
                  fontSize: "0.7rem",
                  fontWeight: "400",
                  color: "#fff",
                  border: "1px solid #eeeeed55",
                }}
              >
                {trail.difficulty.charAt(0).toUpperCase()}
              </div>
              <FaRoute />
              <span title="length in miles" style={{ fontSize: "0.8rem" }}>
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
        </sc.StyledCardContent>
      </StyledCardLinkWrapper>
    </sc.StyledCardContainer>
  );
};

export default TrailCard;
