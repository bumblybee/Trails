import React, { useState } from "react";
import { SearchContext } from "./SearchContext";

import { getTrails } from "../../api/trailsApi";

const SearchProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [trails, setTrails] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchTrails = async (lat, lng) => {
    setLoading(true);

    //TODO: add filterValue to search
    const trailData = await getTrails(lat, lng);
    console.log("filter val", filterValue);
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
        searchValue,
        setSearchValue,
        setFilterValue,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
