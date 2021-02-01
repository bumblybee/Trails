// TODO: add directions to trail via google
// TODO: Add map clip showing location
// TODO: v2 - comments, check-in

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleTrail } from "../../api/trailsApi";
import StarRating from "../../components/rating/StarRating";
import { randomImage } from "../../defaultImages/randomImages";
import {
  FaRoute,
  FaBookmark,
  FaRegBookmark,
  FaHiking,
  FaBiking,
} from "react-icons/fa";
import { StyledHr } from "../../styles/GlobalStyledComponents";
import * as sc from "./StyledTrailPage";

const TrailPage = () => {
  const { id } = useParams();
  const [trail, setTrail] = useState({});

  const getTrailData = async () => {
    const trailData = await getSingleTrail(id);
    setTrail(trailData);
  };

  const breakLongDescription = (trail) => {
    const text = trail.description;
    let indices = [];
    let count = 0;

    // for (let i = 0; i < text.length; i++) {
    //   if (text[i] === ".") {
    //     count++;
    //     if (count % 3 === 0) {
    //       indices.push(i);
    //     }
    //   }
    // }
    return text;
  };

  useEffect(() => {
    getTrailData();
  }, []);
  console.log(trail);
  return (
    <sc.StyledTrailPageWrapper>
      <sc.StyledImageContainer>
        <sc.StyledImage
          src={trail.image !== null ? trail.image : randomImage()}
          alt="trail image"
        />
      </sc.StyledImageContainer>

      <sc.StyledTrailPageContainer>
        <sc.StyledFloatingCard>
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
              {trail.difficulty && trail.difficulty.charAt(0).toUpperCase()}
            </div>
            <div>
              <FaRoute />
              <span title="length in miles" style={{ fontSize: "0.9rem" }}>
                {Math.floor(trail.length)}
              </span>
            </div>
            <div>{trail.hiking === true && <FaHiking />}</div>
            <div> {trail.biking === true && <FaBiking />}</div>
          </sc.StyledIconContainer>

          <StyledHr />

          <sc.StyledButtonContainer>
            <button>upload photo</button>
            <button>request edit</button>
            <button>bookmark</button>
          </sc.StyledButtonContainer>
        </sc.StyledFloatingCard>
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
