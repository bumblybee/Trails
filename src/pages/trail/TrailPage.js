// TODO: add directions to trail via google
// TODO: Add map clip showing location
// TODO: v2 - comments, check-in

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleTrail } from "../../api/trailsApi";
import StarRating from "../../components/rating/StarRating";
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
        <sc.StyledImage src={trail.image} alt="trail image" />
      </sc.StyledImageContainer>
      <sc.StyledTrailPageContainer>
        <h5>
          {trail.city}, {trail.state}
        </h5>
        <h2>{trail.name}</h2>
        <StarRating rating={trail.rating} />
        <p id="description">{breakLongDescription(trail)}</p>
      </sc.StyledTrailPageContainer>
    </sc.StyledTrailPageWrapper>
  );
};

export default TrailPage;
