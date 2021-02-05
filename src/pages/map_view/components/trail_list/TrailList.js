import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { useLocalStorage } from "../../../../hooks/useLocalStorage";
import { SearchContext } from "../../../../context/search/SearchContext";
import TrailCard from "./TrailCard";
import { StyledTrailList, StyledTrailListHeader } from "./StyledTrailList";

const TrailList = ({ setHoveredCard }) => {
  const location = useLocation();

  const { trails, searchLocation } = useContext(SearchContext);
  // window.history.replaceState(
  //   null,
  //   null,
  //   `/search?city=${searchLocation.city}&state=${searchLocation.state}&lat=${searchLocation.coords.lat}&lng=${searchLocation.coords.lng}`
  // );
  const [locationSearch] = useLocalStorage("location_search");

  return (
    <div>
      <StyledTrailList>
        <StyledTrailListHeader>
          {trails.length ? (
            <h3>
              Trails near{" "}
              {/* {locationSearch.substring(0, locationSearch.length - 5)} */}
              {searchLocation.city}, {searchLocation.state}
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
