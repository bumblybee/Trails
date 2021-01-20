import React, { useContext } from "react";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import TrailCard from "./TrailCard";
import { SearchContext } from "../../../context/search/SearchContext";
import { StyledTrailList, StyledTrailListHeader } from "./StyledTrailList";

const TrailList = ({ setHovered }) => {
  // TODO: add type of trail to header when filter wired up
  // TODO: persist trails or get user location so not showing empty list on refresh
  const { trails, searchValue } = useContext(SearchContext);
  const [searchTerm, setSearchTerm] = useLocalStorage("search", {});
  return (
    <div>
      <StyledTrailList>
        <StyledTrailListHeader>
          {trails.length ? (
            <h3>
              Trails near {searchTerm.substring(0, searchTerm.length - 5)}
            </h3>
          ) : (
            <h1>Search a location...</h1>
          )}
        </StyledTrailListHeader>
        {trails &&
          trails.map((trail, index) => (
            <TrailCard key={index} trail={trail} setHovered={setHovered} />
          ))}
      </StyledTrailList>
    </div>
  );
};

export default TrailList;
