import React, { useContext, useState } from "react";
import TrailList from "./components/trail_list/TrailList";
import Map from "./components/map/Map";
import Loader from "../../components/layout/loader/Loader";

import { SearchContext } from "../../context/search/SearchContext";
import * as sc from "./StyledSearchPage";

const MapView = () => {
  const { loading } = useContext(SearchContext);
  // Handles highlighting of marker on map
  const [hoveredCard, setHoveredCard] = useState({});

  return loading ? (
    <Loader />
  ) : (
    <sc.StyledSearchContainer>
      <TrailList className="list" setHoveredCard={setHoveredCard} />

      <Map className="map" hoveredCard={hoveredCard} />
    </sc.StyledSearchContainer>
  );
};

export default MapView;
