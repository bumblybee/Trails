import React, { useContext } from "react";
import TrailCard from "./TrailCard";
import { SearchContext } from "../../../context/search/SearchContext";
import { StyledTrailList, StyledTrailListHeader } from "./StyledTrailList";

const TrailList = () => {
  // TODO: add type of trail to header when filter wired up
  // TODO: persist trails or get user location so not showing empty list on refresh
  const { trails, searchValue } = useContext(SearchContext);

  return (
    <div>
      <StyledTrailList>
        <StyledTrailListHeader>
          {trails.length ? (
            <h1>
              Trails near {searchValue.substring(0, searchValue.length - 5)}
            </h1>
          ) : (
            <h1>Search a location...</h1>
          )}
        </StyledTrailListHeader>
        {trails &&
          trails.map((trail, index) => <TrailCard key={index} trail={trail} />)}
      </StyledTrailList>
    </div>
  );
};

export default TrailList;
