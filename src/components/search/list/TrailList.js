import React, { useContext } from "react";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { SearchContext } from "../../../context/search/SearchContext";
import TrailCard from "./TrailCard";
import { StyledTrailList, StyledTrailListHeader } from "./StyledTrailList";

const TrailList = ({ setHoveredCard }) => {
  const { trails } = useContext(SearchContext);
  const [locationSearch] = useLocalStorage("location_search");

  return (
    <div>
      <StyledTrailList>
        <StyledTrailListHeader>
          {trails.length ? (
            <h3>
              Trails near{" "}
              {locationSearch.substring(0, locationSearch.length - 5)}
            </h3>
          ) : (
            <h1>Search a location...</h1>
          )}
        </StyledTrailListHeader>
        {trails &&
          trails.map((trail, index) => (
            <TrailCard
              key={index}
              trail={trail}
              setHoveredCard={setHoveredCard}
            />
          ))}
      </StyledTrailList>
    </div>
  );
};

export default TrailList;
