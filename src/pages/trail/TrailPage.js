// TODO: add directions to trail via google
// TODO: v2 - comments, check-in

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleTrail, getTrails } from "../../api/trailsApi";

const TrailPage = () => {
  const { id } = useParams();
  const [trail, setTrail] = useState({});

  const getTrailData = async () => {
    const trailData = await getSingleTrail(id);
    setTrail(trailData);
  };

  useEffect(() => {
    getTrailData();
  }, []);

  return (
    <div style={{ paddingTop: "3rem" }}>
      <h1>{trail.name}</h1>
    </div>
  );
};

export default TrailPage;
