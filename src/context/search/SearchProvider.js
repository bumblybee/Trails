import React, { useState } from "react";
import { SearchContext } from "./SearchContext";

import { getTrails } from "../../api/trailsApi";

const SearchProvider = ({ children }) => {
  const [filterValue, setFilterValue] = useState(null);
  const [trails, setTrails] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchTrails = async (lat, lng) => {
    setLoading(true);

    //TODO: add filterValue to search
    const trailData = await getTrails(lat, lng, filterValue);

    setTrails(trailData);
    setLoading(false);
    setFilterValue(null);
    console.log(trailData);
    return trailData;
  };

  return (
    <SearchContext.Provider
      value={{
        searchTrails,
        trails,
        loading,
        setFilterValue,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
