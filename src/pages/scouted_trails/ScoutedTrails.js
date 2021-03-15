import React, { useState, useEffect, useContext } from "react";

import { UserContext } from "../../context/user/UserContext";
import TrailCard from "../../components/layout/cards/TrailCard";
import * as sc from "./StyledScoutedTrail";

const ScoutedTrails = () => {
  const { getCurrentUser } = useContext(UserContext);
  const [scoutedTrails, setScoutedTrails] = useState([]);

  useEffect(() => {
    getCurrentUser().then((userData) => setScoutedTrails(userData.trails));
  }, []);

  // ! ScoutedTrails container and cards + Bookmarks container and cards could be one component or share styling bc styled the same way
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
          <p>Looks like you haven't posted any trails yet.</p>
        </sc.StyledTextContainer>
      )}
    </sc.StyledScoutedTrailsContainer>
  );
};

export default ScoutedTrails;
