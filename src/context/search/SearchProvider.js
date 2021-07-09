import React, { useState, useCallback } from "react";
import { SearchContext } from "./SearchContext";

import { getTrails } from "../../api/trailsApi";

const SearchProvider = ({ children }) => {
  const [trails, setTrails] = useState([]);
  const [searchLocation, setSearchLocation] = useState({
    coords: { lat: null, lng: null },
    city: "",
    state: "",
  });
  const [loading, setLoading] = useState(false);

  const searchTrails = useCallback(async (lat, lng, filter) => {
    setLoading(true);
    const trailData = await getTrails(lat, lng, filter);

    setTrails(trailData);
    setLoading(false);
    console.log(trailData);

    return trailData;
  }, []);

  return (
    <SearchContext.Provider
      value={{
        searchTrails,
        trails,
        loading,
        searchLocation,
        setSearchLocation,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
