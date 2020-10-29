import React, { useState } from "react";
import { SearchContext } from "./SearchContext";

import { findBikingTrails } from "../../api/trailsApi";

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

  return (
    <SearchContext.Provider
      value={{ searchBikingTrails, trails, searchValue, loading }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
