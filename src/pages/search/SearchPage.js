import React, { useContext, useState } from "react";
import TrailList from "../../components/search/list/TrailList";
import Map from "../../components/search/map/Map";

import { SearchContext } from "../../context/search/SearchContext";
import * as sc from "./StyledSearchPage";

const Search = () => {
  const { loading } = useContext(SearchContext);
  // Handles highlighting of marker on map
  const [hoveredCard, setHoveredCard] = useState({});

  if (loading) return "Loading...";
  return (
    <sc.StyledSearchContainer>
      <TrailList className="list" setHoveredCard={setHoveredCard} />

      <Map className="map" hoveredCard={hoveredCard} />
    </sc.StyledSearchContainer>
  );
};

export default Search;
