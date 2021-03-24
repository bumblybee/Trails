import React, { useState } from "react";
import TrailList from "./components/trail_list/TrailList";
import Map from "./components/map/Map";

import * as sc from "./StyledSearchPage";

const MapView = () => {
  // Handles highlighting of marker on map
  const [hoveredCard, setHoveredCard] = useState({});
  return (
    <sc.StyledSearchContainer>
      <TrailList className="list" setHoveredCard={setHoveredCard} />

      <Map className="map" hoveredCard={hoveredCard} />
    </sc.StyledSearchContainer>
  );
};

export default MapView;
