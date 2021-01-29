import React, { useContext, useState } from "react";
import TrailList from "../../components/search/list/TrailList";
import Map from "../../components/search/map/Map";

import { SearchContext } from "../../context/search/SearchContext";
import * as sc from "./StyledSearchPage";

const Search = () => {
  const { loading } = useContext(SearchContext);
  // Handles highlighting of marker on map
  const [hovered, setHovered] = useState({});

  if (loading) return "Loading...";
  return (
    <sc.StyledSearchContainer>
      <TrailList className="list" setHovered={setHovered} />

      <Map className="map" hovered={hovered} />
    </sc.StyledSearchContainer>
  );
};

export default Search;
