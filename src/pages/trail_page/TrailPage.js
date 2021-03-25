// TODO: add directions to trail via google
// TODO: Add map clip showing location
// TODO: Break up long descriptions
// TODO: v2 - comments, check-in

import React, { useContext, useEffect, useState } from "react";
import he from "he";
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
  FaBahai,
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
          <sc.StyledImage src={trail.image} alt="trail image" />
        </sc.StyledImageContainer>

        <sc.StyledTrailPageContainer>
          <sc.StyledFloatingCardsContainer>
            <sc.StyledFloatingCard className="icon-card">
              <sc.StyledIconsContainer difficulty={trail.difficulty}>
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
                  <FaBahai
                    className="difficulty"
                    title={`Difficulty: ${trail.difficulty}`}
                  />
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
          <div>
            <h5>
              {trail.city}, {trail.state}
            </h5>
            <h2>{trail.name && he.decode(trail.name)}</h2>
            {/* TODO: Break into own component */}
            <sc.StyledHeaderIcons difficulty={trail.difficulty}>
              <StarRating rating={trail.rating} />
              <div className="mobile-icons">
                <FaRoute />
                <span title="length in miles">{Math.floor(trail.length)}</span>
                {trail.hiking === true && <FaHiking />}
                {trail.biking === true && <FaBiking />}

                <FaBahai
                  className="difficulty"
                  title={`Difficulty: ${trail.difficulty}`}
                />
              </div>
            </sc.StyledHeaderIcons>
            <sc.StyledBorder />
            <p id="description">{breakLongDescription(trail)}</p>
          </div>
        </sc.StyledTrailPageContainer>
      </sc.StyledTrailPageWrapper>
    )
  );
};

export default TrailPage;
