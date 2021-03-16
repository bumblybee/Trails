// TODO: add directions to trail via google
// TODO: Add map clip showing location
// TODO: Break up long descriptions
// TODO: v2 - comments, check-in

import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleTrail } from "../../api/trailsApi";
import { UserContext } from "../../context/user/UserContext";
import { BookmarkContext } from "../../context/bookmark/BookmarkContext";
import EditTrailForm from "./components/EditTrailForm";
import StarRating from "../../components/rating/StarRating";

import {
  FaRoute,
  FaImage,
  FaRegBookmark,
  FaHiking,
  FaBiking,
  FaPencilAlt,
} from "react-icons/fa";

import * as sc from "./StyledTrailPage";

const TrailPage = () => {
  const { id } = useParams();

  const [trail, setTrail] = useState({});
  const [showEditForm, setShowEditForm] = useState(false);
  const { user } = useContext(UserContext);
  const { bookmarks, createUserBookmark, removeUserBookmark } = useContext(
    BookmarkContext
  );

  const getTrailData = async (id) => {
    const trailData = await getSingleTrail(id);
    setTrail(trailData);
  };

  const handleTrailBookmark = async () => {
    // TODO: If cookie has expired and user hasn't refreshed page the user check fails and error thrown - handle

    if (user && bookmarks) {
      let type = "create";

      for (let { trailId } of bookmarks) {
        if (trailId === trail.id) {
          type = "remove";
        }
      }

      if (type === "create") {
        const res = await createUserBookmark(user.id, trail.id);
        console.log(res);
      } else {
        const res = await removeUserBookmark(user.id, trail.id);
        console.log(res);
      }
    }
  };

  const renderBookmarkButtonText = () => {
    let text = "Bookmark";
    if (bookmarks) {
      for (let { trailId } of bookmarks) {
        if (trailId === trail.id) {
          text = "Remove Bookmark";
        }
      }
    }

    return text;
  };

  const breakLongDescription = (trail) => {
    const text = trail.description;

    return text;
  };

  useEffect(() => {
    getTrailData(id);
  }, [id]);

  return (
    trail && (
      <sc.StyledTrailPageWrapper>
        {showEditForm && (
          <EditTrailForm
            user={user}
            trail={trail}
            showEditForm={showEditForm}
            setShowEditForm={setShowEditForm}
          />
        )}

        <sc.StyledImageContainer>
          <sc.StyledImage
            src={
              trail.image !== null
                ? trail.image
                : "https://images.unsplash.com/photo-1589064090574-7be967916250?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjgzfHx0cmFpbHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60"
            }
            alt="trail image"
          />
        </sc.StyledImageContainer>

        <sc.StyledTrailPageContainer>
          <sc.StyledFloatingCardsContainer>
            <sc.StyledFloatingCard>
              <sc.StyledIconsContainer>
                <span className="icon-label">Length</span>
                <sc.StyledIcon>
                  <FaRoute className="faRoute" />

                  <div>
                    <span title="length in miles">
                      {Math.floor(trail.length)} miles
                    </span>
                  </div>
                </sc.StyledIcon>
                <sc.StyledCardBorder />
                <span className="icon-label">Type</span>

                {trail.hiking === true && (
                  <sc.StyledIcon>
                    <FaHiking className="faHiking" />
                    <span>hiking</span>
                  </sc.StyledIcon>
                )}
                {trail.biking === true && (
                  <sc.StyledIcon>
                    <FaBiking className="faBiking" />
                    <span>biking</span>
                  </sc.StyledIcon>
                )}
                <sc.StyledCardBorder />

                <span className="icon-label">Difficulty</span>

                <sc.StyledIcon>
                  <div
                    title={`difficulty: ${trail.difficulty}`}
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
                    {trail.difficulty &&
                      trail.difficulty.charAt(0).toUpperCase()}
                  </div>
                  <span>
                    {trail.difficulty !== "unknown" && trail.difficulty}
                  </span>
                </sc.StyledIcon>
              </sc.StyledIconsContainer>
            </sc.StyledFloatingCard>

            <sc.StyledFloatingCard>
              <sc.StyledButtonContainer user={user}>
                {user && user.role === "Admin" ? (
                  <button
                    onClick={() => setShowEditForm(!showEditForm)}
                    title={user ? "" : "Log in to suggest an edit"}
                    disabled={user ? false : true}
                  >
                    <FaPencilAlt /> Edit
                  </button>
                ) : (
                  <>
                    <button
                      title={user ? "" : "Log in to add a photo"}
                      disabled={user ? false : true}
                    >
                      <FaImage />
                      Add Photo
                    </button>
                    <button
                      onClick={() => setShowEditForm(!showEditForm)}
                      title={user ? "" : "Log in to suggest an edit"}
                      disabled={user ? false : true}
                    >
                      <FaPencilAlt /> Suggest Edit
                    </button>
                    <button
                      onClick={() => handleTrailBookmark()}
                      title={user ? "" : "Log in to add a bookmark"}
                      disabled={user ? false : true}
                    >
                      <FaRegBookmark /> {renderBookmarkButtonText()}
                    </button>
                  </>
                )}
              </sc.StyledButtonContainer>
            </sc.StyledFloatingCard>
          </sc.StyledFloatingCardsContainer>

          <h5>
            {trail.city}, {trail.state}
          </h5>
          <h2>{trail.name}</h2>
          <StarRating rating={trail.rating} />
          <sc.StyledBorder />
          <p id="description">{breakLongDescription(trail)}</p>
        </sc.StyledTrailPageContainer>
      </sc.StyledTrailPageWrapper>
    )
  );
};

export default TrailPage;
