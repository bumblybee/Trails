import React, { useContext } from "react";
import TrailCard from "./TrailCard";
import { SearchContext } from "../../../context/search/SearchContext";
import { StyledTrailList, StyledTrailListHeader } from "./StyledTrailList";

const TrailList = () => {
  //TODO: add type of trail to header when filter wired up
  const { trails, searchValue } = useContext(SearchContext);
  return (
    <div>
      <StyledTrailList>
        <StyledTrailListHeader>
          <h1>
            Trails near {searchValue.substring(0, searchValue.length - 5)}
          </h1>
          {/* <p>{trails.length} trails</p> */}
        </StyledTrailListHeader>
        {trails &&
          trails.map((trail, index) => <TrailCard key={index} trail={trail} />)}
      </StyledTrailList>
    </div>
  );
};

export default TrailList;
