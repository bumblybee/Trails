import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { SearchContext } from "../../context/search/SearchContext";
import Filter from "./Filter";
import { StyledPinkButton } from "../../styles/GlobalStyledComponents";
import * as sc from "./StyledSearchbar";

const Searchbar = () => {
  const history = useHistory();
  const [searchText, setSearchText] = useState("");
  const { searchBikingTrails, searchHikingTrails } = useContext(SearchContext);

  const handleSearch = async (e) => {
    e.preventDefault();
    await searchHikingTrails(42.4934, -92.343643);
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
          <sc.StyledButtonContainer>
            <Filter />
            <StyledPinkButton type="submit">Search</StyledPinkButton>
          </sc.StyledButtonContainer>
        </sc.StyledSearchForm>
      </sc.StyledSearchbar>
    </sc.StyledSearchbarContainer>
  );
};

export default Searchbar;
