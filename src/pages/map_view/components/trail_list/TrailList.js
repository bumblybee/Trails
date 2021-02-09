import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { UserContext } from "../../../../context/user/UserContext";
import { BookmarkContext } from "../../../../context/bookmark/BookmarkContext";
import { SearchContext } from "../../../../context/search/SearchContext";
import TrailCard from "./TrailCard";
import { StyledTrailList, StyledTrailListHeader } from "./StyledTrailList";

const TrailList = ({ setHoveredCard }) => {
  const { trails } = useContext(SearchContext);
  const { getUserBookmarks } = useContext(BookmarkContext);
  const { user } = useContext(UserContext);

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const city = query.get("city");
  const state = query.get("state");

  useEffect(() => {
    user && getUserBookmarks(user.id).then((bkmrks) => console.log(bkmrks));
  }, []);

  return (
    <div>
      <StyledTrailList>
        <StyledTrailListHeader>
          {trails.length ? (
            <h3>
              Trails near {city}, {state}
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