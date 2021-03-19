import React, { useState } from "react";
import { SearchContext } from "./SearchContext";

import { getTrails } from "../../api/trailsApi";

const SearchProvider = ({ children }) => {
  const [searchFilterValue, setSearchFilterValue] = useState(null);
  const [trails, setTrails] = useState([]);
  const [searchLocation, setSearchLocation] = useState({
    coords: { lat: null, lng: null },
    city: "",
    state: "",
  });
  const [loading, setLoading] = useState(false);

  const searchTrails = async (lat, lng) => {
    setLoading(true);
    const trailData = await getTrails(lat, lng, searchFilterValue);

    setTrails(trailData);
    setLoading(false);
    setSearchFilterValue(null);
    console.log(trailData);

    return trailData;
  };

  return (
    <SearchContext.Provider
      value={{
        searchTrails,
        trails,
        loading,
        setSearchFilterValue,
        searchLocation,
        setSearchLocation,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
