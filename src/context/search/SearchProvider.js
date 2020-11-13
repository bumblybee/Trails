import React, { useState } from "react";
import { SearchContext } from "./SearchContext";

import { getTrails } from "../../api/trailsApi";

const SearchProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  const [trails, setTrails] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchTrails = async (lat, lng) => {
    setLoading(true);
    const trailData = await getTrails(lat, lng);

    setTrails(trailData);
    setLoading(false);
    console.log(trailData);
    return trailData;
  };

  return (
    <SearchContext.Provider
      value={{
        searchTrails,
        trails,
        loading,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
