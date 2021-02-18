import React, { useState, useEffect, useContext } from "react";
import { getScoutedTrails } from "../../api/trailsApi";
import { UserContext } from "../../context/user/UserContext";
import TrailCard from "../../components/layout/cards/TrailCard";
import * as sc from "./StyledScoutedTrail";

const ScoutedTrails = () => {
  const { user, getCurrentUser } = useContext(UserContext);
  const [scoutedTrails, setScoutedTrails] = useState([]);

  useEffect(() => {
    getCurrentUser().then((userData) => setScoutedTrails(userData.trails));
  }, []);

  return (
    <sc.StyledScoutedTrailsContainer>
      <h3>Scouted Trails</h3>
      {scoutedTrails.length ? (
        <sc.StyledCardContainer>
          {scoutedTrails.map((trail) => (
            <TrailCard key={trail.id} trail={trail} />
          ))}
        </sc.StyledCardContainer>
      ) : (
        <sc.StyledTextContainer>
          <h3>Looks like you haven't scouted any trails yet</h3>
        </sc.StyledTextContainer>
      )}
    </sc.StyledScoutedTrailsContainer>
  );
};

export default ScoutedTrails;
