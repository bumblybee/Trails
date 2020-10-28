import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { SearchContext } from "../../context/search/SearchContext";
import { StyledPinkButton } from "../../styles/GlobalStyledComponents";
import * as sc from "./StyledSearchbar";

const Searchbar = () => {
  const history = useHistory();
  const [searchText, setSearchText] = useState("");
  const { searchTrails } = useContext(SearchContext);

  const handleSearch = async (e) => {
    e.preventDefault();
    // await searchTrails();
    history.push("/search");
  };

  return (
    <sc.StyledSearchbarContainer>
      <sc.StyledSearchbar>
        <sc.StyledSearchForm onSubmit={handleSearch}>
          <div>
            <i class="fas fa-search"></i>
            <sc.StyledSearchInput
              onChange={(e) => setSearchText(e.target.value)}
              type="text"
              placeholder="Search a location..."
              value={searchText}
            ></sc.StyledSearchInput>
          </div>
          <div className="search-button">
            <StyledPinkButton type="submit">Search</StyledPinkButton>
          </div>
        </sc.StyledSearchForm>
      </sc.StyledSearchbar>
    </sc.StyledSearchbarContainer>
  );
};

export default Searchbar;
