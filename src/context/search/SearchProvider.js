import React, { useState } from "react";
import { SearchContext } from "./SearchContext";

import { findBikingTrails, findHikingTrails } from "../../api/trailsApi";

const SearchProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  const [trails, setTrails] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchBikingTrails = async (lat, lng) => {
    setLoading(true);
    const trailData = await findBikingTrails(lat, lng);

    setTrails(trailData);
    // setSearchValue(text);
    setLoading(false);
    console.log(trailData);
    return trailData;
  };

  const searchHikingTrails = async (lat, lng) => {
    const trailData = await findHikingTrails(lat, lng);
    console.log(trailData);
    return trailData;
  };

  return (
    <SearchContext.Provider
      value={{
        searchBikingTrails,
        searchHikingTrails,
        trails,
        searchValue,
        loading,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
