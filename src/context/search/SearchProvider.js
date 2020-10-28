import React, { useState } from "react";
import { SearchContext } from "./SearchContext";

import { findTrails } from "../../api/trailsApi";

const SearchProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  const [trails, setTrails] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchTrails = async () => {
    setLoading(true);
    const trailData = await findTrails();

    setTrails(trailData);
    // setSearchValue(text);
    setLoading(false);
    console.log(trailData);
    return trailData;
  };

  return (
    <SearchContext.Provider
      value={{ searchTrails, trails, searchValue, loading }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
