// TODO: add directions to trail via google
// TODO: Add map clip showing location
// TODO: Break up long descriptions
// TODO: v2 - comments, check-in

import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleTrail } from "../../api/trailsApi";
import { UserContext } from "../../context/user/UserContext";
import StarRating from "../../components/rating/StarRating";
import { randomImage } from "../../defaultImages/randomImages";
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
  const { user } = useContext(UserContext);

  const getTrailData = async () => {
    const trailData = await getSingleTrail(id);
    setTrail(trailData);
    console.log(trail);
  };

  const breakLongDescription = (trail) => {
    const text = trail.description;

    return text;
  };

  useEffect(() => {
    getTrailData();
  }, []);

  return (
    <sc.StyledTrailPageWrapper>
      <sc.StyledImageContainer>
        <sc.StyledImage
          src={trail.image !== null ? trail.image : randomImage()}
          alt="trail image"
        />
      </sc.StyledImageContainer>

      <sc.StyledTrailPageContainer>
        <sc.StyledFloatingCardContainer>
          <sc.StyledFloatingCard>
            <sc.StyledIconsContainer>
              <sc.StyledIcon>
                <FaRoute />

                <div>
                  <span title="length in miles">
                    {Math.floor(trail.length)} miles
                  </span>
                </div>
              </sc.StyledIcon>

              {trail.hiking === true && (
                <sc.StyledIcon>
                  <FaHiking />
                  <span>hiking</span>
                </sc.StyledIcon>
              )}

              {trail.biking === true && (
                <sc.StyledIcon>
                  <FaBiking />
                  <span>biking</span>
                </sc.StyledIcon>
              )}

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
                  {trail.difficulty && trail.difficulty.charAt(0).toUpperCase()}
                </div>
                <span>
                  {trail.difficulty !== "unknown" && trail.difficulty}
                </span>
              </sc.StyledIcon>
            </sc.StyledIconsContainer>
          </sc.StyledFloatingCard>

          <sc.StyledFloatingCard>
            <sc.StyledButtonContainer user={user}>
              <button
                title={user ? "" : "Log in to add a photo"}
                disabled={user ? false : true}
              >
                <FaImage />
                Add Photo
              </button>
              <button
                title={user ? "" : "Log in to suggest an edit"}
                disabled={user ? false : true}
              >
                <FaPencilAlt /> Suggest Edit
              </button>
              <button
                title={user ? "" : "Log in to add a bookmark"}
                disabled={user ? false : true}
              >
                <FaRegBookmark /> Bookmark
              </button>
            </sc.StyledButtonContainer>
          </sc.StyledFloatingCard>
        </sc.StyledFloatingCardContainer>

        <h5>
          {trail.city}, {trail.state}
        </h5>
        <h2>{trail.name}</h2>
        <StarRating rating={trail.rating} />
        <sc.StyledBorder />
        <p id="description">{breakLongDescription(trail)}</p>
      </sc.StyledTrailPageContainer>
    </sc.StyledTrailPageWrapper>
  );
};

export default TrailPage;
