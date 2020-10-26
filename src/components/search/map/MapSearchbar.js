import React, { useState, useContext } from "react";

import * as sc from "./StyledMap";

const Searchbar = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <sc.StyledMapSearchbar>
      <div>
        <i class="fas fa-search"></i>
        <sc.StyledSearchInput
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          placeholder="Search a location..."
          value={searchText}
        ></sc.StyledSearchInput>
      </div>
    </sc.StyledMapSearchbar>
  );
};

export default Searchbar;
