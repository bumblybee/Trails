import React, { useState, useEffect, useContext } from "react";
import { getScoutedTrails } from "../../api/trailsApi";
import { UserContext } from "../../context/user/UserContext";
import TrailCard from "../map_view/components/trail_list/TrailCard";

const ScoutedTrails = () => {
  const { user } = useContext(UserContext);
  const [scoutedTrails, setScoutedTrails] = useState([]);

  const getTrails = async () => {
    const id = user.id;
    const trails = await getScoutedTrails(id);
    setScoutedTrails(trails);
  };

  useEffect(() => {
    getTrails();
  }, []);

  return (
    <div>
      {scoutedTrails.map((trail) => (
        <TrailCard trail={trail} />
      ))}
    </div>
  );
};

export default ScoutedTrails;
