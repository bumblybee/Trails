import React, { useContext } from "react";
import TrailList from "../../components/search/list/TrailList";
import Map from "../../components/search/map/Map";

import { SearchContext } from "../../context/search/SearchContext";
import * as sc from "./StyledSearch";

const Search = () => {
  const { loading } = useContext(SearchContext);
  if (loading) return "Loading...";
  return (
    <sc.StyledSearchContainer>
      <TrailList className="list" />

      <Map className="map" />
    </sc.StyledSearchContainer>
  );
};

export default Search;
