import React, { useState, useEffect, useContext } from "react";
import { getScoutedTrails } from "../../api/trailsApi";
import { UserContext } from "../../context/user/UserContext";
import TrailCard from "../../components/layout/cards/TrailCard";
import * as sc from "./StyledScoutedTrail";

const ScoutedTrails = () => {
  const { user } = useContext(UserContext);
  const [scoutedTrails, setScoutedTrails] = useState([]);

  const getTrails = async () => {
    const id = user.id;
    const trails = await getScoutedTrails(id);
    console.log(trails);
    setScoutedTrails(trails);
  };

  useEffect(() => {
    user && getTrails();
  }, []);

  return (
    <sc.StyledScoutedTrailsContainer>
      <sc.StyledCardContainer>
        {scoutedTrails.length ? (
          scoutedTrails.map((trail) => (
            <TrailCard key={trail.id} trail={trail} />
          ))
        ) : (
          <h1>trails</h1>
        )}
      </sc.StyledCardContainer>
    </sc.StyledScoutedTrailsContainer>
  );
};

export default ScoutedTrails;
