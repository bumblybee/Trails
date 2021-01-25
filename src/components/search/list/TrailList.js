import React, { useContext } from "react";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { SearchContext } from "../../../context/search/SearchContext";
import TrailCard from "./TrailCard";
import { StyledTrailList, StyledTrailListHeader } from "./StyledTrailList";

const TrailList = ({ setHovered }) => {
  const { trails } = useContext(SearchContext);
  const [searchTerm] = useLocalStorage("search");

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
