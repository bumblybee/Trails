import React, { useContext } from "react";
import ParkList from "../../components/search/list/TrailList";
import Map from "../../components/search/map/Map";

import { SearchContext } from "../../context/search/SearchContext";
import * as sc from "./StyledSearch";

const Search = () => {
  const { loading } = useContext(SearchContext);
  if (loading) return "Loading...";
  return (
    <sc.StyledSearchContainer>
      <ParkList />

      <Map />
    </sc.StyledSearchContainer>
  );
};

export default Search;
